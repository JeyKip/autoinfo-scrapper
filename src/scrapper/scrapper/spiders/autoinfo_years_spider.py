import random
from typing import List

from scrapy import Request

from autoinfo.data.plain import Model, Maker, SubModel
from autoinfo.services import AutoDetailsService
from . import AutoInfoBaseSpider
from .parsers import YearsResponseParser
from ..items import YearsListItem


class AutoInfoYearsSpider(AutoInfoBaseSpider):
    name = 'autoinfo-years-spider'

    def __init__(self, auto_details_service: AutoDetailsService, base_url: str, **kwargs):
        super().__init__(auto_details_service, base_url, **kwargs)

        self.__parser = YearsResponseParser(self.logger)

    def start_requests(self):
        makers = self.auto_details_service.load_makers_dict()
        models = self.auto_details_service.load_models_dict()
        submodels = self.auto_details_service.load_submodels()

        # we need to shuffle submodels to prevent using of the same cookie value
        # from the same model in multiple subsequent requests
        shuffled_indexes = random.sample([i for i in range(len(submodels))], len(submodels))

        # if model has submodels we need to request all years for submodels and concatenate them in the model object
        # otherwise we need to request all years by model directly
        # first of all get all years available for models without submodels
        for key, model in models.items():
            if model.submodels_handled and not model.submodels_count and not model.years_handled:
                yield self.__create_download_years_request(makers[model.maker_id], model)

        # then gather all years for all submodels
        for index in shuffled_indexes:
            submodel = submodels[index]

            if not submodel.years_handled:
                model = models[submodel.model_id]
                maker = makers[model.maker_id]

                yield self.__create_download_years_request(maker, model, submodel)

    def __create_download_years_request(self, maker: Maker, model: Model, submodel: SubModel = None):
        sub_id, sub_code = self.auto_details_service.get_submodel_properties_or_default(submodel)
        request_builder = self.create_basic_request_builder()
        request_builder.add_params({
            "scriptVersion": model.script_version,
            "cookie": model.cookie,
            "0": "year",
            "1": maker.name,
            "2": model.code,
            "3": sub_code
        })
        request_url = request_builder.build()

        return Request(request_url, lambda response: self.__parse_years(model.id, sub_id, response))

    def __parse_years(self, model_id, submodel_id, response):
        decoded_response_text = self.decode_response_if_successful(response)
        years: List[int] = self.__parser(decoded_response_text)

        yield YearsListItem(model_id=model_id, submodel_id=submodel_id, years=years)

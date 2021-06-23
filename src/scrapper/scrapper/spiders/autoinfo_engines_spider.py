import random
from typing import List

from scrapy import Request

from autoinfo.data.plain import Model, Maker, SubModel, Series, ModelSeries, Engine
from autoinfo.services import AutoDetailsService
from . import AutoInfoBaseSpider
from .parsers import EnginesResponseParser
from ..items import EnginesListItem


class AutoInfoEnginesSpider(AutoInfoBaseSpider):
    name = 'autoinfo-engines-spider'

    def __init__(self, auto_details_service: AutoDetailsService, base_url: str, **kwargs):
        super().__init__(auto_details_service, base_url, **kwargs)

        self.__engines_parsed = 0
        self.__parser = EnginesResponseParser(self.logger)

    def start_requests(self):
        makers = self.auto_details_service.load_makers_dict()
        models = self.auto_details_service.load_models_dict()
        submodels = self.auto_details_service.load_submodels_dict()
        series_dict = self.auto_details_service.load_series_dict()
        model_series = self.auto_details_service.load_model_series()

        # we need to shuffle series to prevent using of the same cookie value
        # from the same model in multiple subsequent requests
        shuffled_indexes = random.sample([i for i in range(len(model_series))], len(model_series))

        for index in shuffled_indexes:
            model_series_item = model_series[index]

            if not model_series_item.engines_handled:
                submodel = submodels[model_series_item.submodel_id] if model_series_item.submodel_id else None
                series = series_dict[model_series_item.series_id]
                model = models[model_series_item.model_id]
                maker = makers[model.maker_id]

                yield self.__create_download_engines_request(maker, model, model_series_item, series, submodel)

    def __create_download_engines_request(self, maker: Maker, model: Model, model_series: ModelSeries, series: Series,
                                          submodel: SubModel):
        sub_id, sub_code = self.auto_details_service.get_submodel_properties_or_default(submodel)
        request_builder = self.create_basic_request_builder()
        request_builder.add_params({
            "scriptVersion": model.script_version,
            "cookie": model.cookie,
            "0": "engine",
            "1": maker.name,
            "2": model.code,
            "3": sub_code,
            "4": model_series.year,
            "5": f"{series.series}--{series.chassis}"
        })
        request_url = request_builder.build()

        return Request(request_url,
                       lambda response: self.__parse_engines(model.id, sub_id, model_series.year, model_series.id,
                                                             response))

    def __parse_engines(self, model_id, submodel_id, year, model_series_id, response):
        self.logger.debug(f"#{self.__engines_parsed + 1}. Got '{response.text}' for model_id='{model_id}',"
                          f" submodel_id='{submodel_id}', model_series_id='{model_series_id}' year='{year}'.")
        decoded_response_text = self.decode_response_if_successful(response)
        engines: List[Engine] = self.__parser(decoded_response_text)

        self.__engines_parsed += 1

        yield EnginesListItem(model_id=model_id, submodel_id=submodel_id, year=year, model_series_id=model_series_id,
                              engines=engines)

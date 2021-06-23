import random
from typing import List

from scrapy import Request

from autoinfo.data.plain import Model, Maker, SubModel, Series, ModelYear
from autoinfo.services import AutoDetailsService
from . import AutoInfoBaseSpider
from .parsers import SeriesResponseParser
from ..items import SeriesListItem


class AutoInfoSeriesSpider(AutoInfoBaseSpider):
    name = 'autoinfo-series-spider'

    def __init__(self, auto_details_service: AutoDetailsService, base_url: str, **kwargs):
        super().__init__(auto_details_service, base_url, **kwargs)

        self.__series_parsed = 0
        self.__parser = SeriesResponseParser(self.logger)

    def start_requests(self):
        makers = self.auto_details_service.load_makers_dict()
        models = self.auto_details_service.load_models_dict()
        submodels = self.auto_details_service.load_submodels_dict()
        years = self.auto_details_service.load_years()

        # we need to shuffle years to prevent using of the same cookie value
        # from the same model in multiple subsequent requests
        shuffled_indexes = random.sample([i for i in range(len(years))], len(years))

        for index in shuffled_indexes:
            year = years[index]

            if not year.series_handled:
                submodel = submodels[year.submodel_id] if year.submodel_id else None
                model = models[year.model_id]
                maker = makers[model.maker_id]

                yield self.__create_download_series_request(maker, model, year, submodel)

    def __create_download_series_request(self, maker: Maker, model: Model, year_info: ModelYear, submodel: SubModel):
        sub_id, sub_code = self.auto_details_service.get_submodel_properties_or_default(submodel)
        request_builder = self.create_basic_request_builder()
        request_builder.add_params({
            "scriptVersion": model.script_version,
            "cookie": model.cookie,
            "0": "series",
            "1": maker.name,
            "2": model.code,
            "3": sub_code,
            "4": year_info.year
        })
        request_url = request_builder.build()

        return Request(request_url, lambda response: self.__parse_series(model.id, sub_id, year_info.id, response))

    def __parse_series(self, model_id, submodel_id, year_id, response):
        self.logger.debug(f"#{self.__series_parsed + 1}. Got '{response.text}' for model_id='{model_id}',"
                          f" submodel_id='{submodel_id}', year_id='{year_id}'.")
        decoded_response_text = self.decode_response_if_successful(response)
        series: List[Series] = self.__parser(decoded_response_text)

        self.__series_parsed += 1

        yield SeriesListItem(model_id=model_id, submodel_id=submodel_id, year_id=year_id, series=series)

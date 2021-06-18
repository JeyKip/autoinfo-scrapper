from typing import List

from scrapy import Request

from autoinfo.data.plain import Model, Maker
from autoinfo.decoders import HexDecoder
from autoinfo.services import AutoDetailsService
from . import AutoInfoBaseSpider
from .parsers import YearsResponseParser
from ..items import YearsListItem


class AutoInfoYearsSpider(AutoInfoBaseSpider):
    name = 'autoinfo-years-spider'

    def __init__(self, auto_details_service: AutoDetailsService, base_url: str, **kwargs):
        super().__init__(auto_details_service, base_url, **kwargs)

        self.__parser = YearsResponseParser(self.logger)
        self.__hex_decoder = HexDecoder()

    def start_requests(self):
        makers = {maker.id: maker for maker in self.auto_details_service.load_makers()}
        models = {model.id: model for model in self.auto_details_service.load_models()}

        for model in models.values():
            yield self.__create_download_years_request(makers[model.maker_id], model)

        for sub_model in self.auto_details_service.load_sub_models():
            model = models[sub_model.model_id]
            maker = makers[model.maker_id]

            yield self.__create_download_years_request(maker, model, sub_model)

    def __create_download_years_request(self, maker: Maker, model: Model, sub_model=None):
        sub_model_id = sub_model.id if sub_model else None
        sub_model_name = sub_model.name if sub_model else "ALL"
        sub_model_code = self.__hex_decoder.convert_to_hex_string(sub_model_name)

        request_builder = self.create_basic_request_builder()
        request_builder.add_params({
            "scriptVersion": model.script_version,
            "cookie": model.cookie,
            "0": "year",
            "1": maker.name,
            "2": model.code,
            "3": sub_model_code
        })
        request_url = request_builder.build()

        return Request(request_url, lambda response: self.__parse_years(model.id, sub_model_id, response))

    def __parse_years(self, model_id, sub_model_id, response):
        decoded_response_text = self.decode_response_if_successful(response)
        years: List[int] = self.__parser(decoded_response_text)

        yield YearsListItem(model_id=model_id, sub_model_id=sub_model_id, years=years)

from typing import List

from scrapy import Request

from autoinfo.cookie import CookieProvider
from autoinfo.data.plain import Model
from autoinfo.services import AutoDetailsService
from . import AutoInfoCookieBaseSpider
from .parsers import ModelsResponseParser
from ..items import ModelsListItem


class AutoInfoModelsSpider(AutoInfoCookieBaseSpider):
    name = 'autoinfo-models-spider'

    def __init__(self, auto_details_service: AutoDetailsService, cookie_provider: CookieProvider, base_url: str,
                 **kwargs):
        super().__init__(auto_details_service, cookie_provider, base_url, **kwargs)

        self.__parser = ModelsResponseParser(self.logger)

    def start_requests(self):
        for maker in self.auto_details_service.load_makers():
            yield self.__create_download_models_request(maker.name)

    def __create_download_models_request(self, maker_name):
        request_builder = self.create_basic_request_builder()
        request_builder.add_param("1", maker_name)
        request_builder.add_param("0", "model")
        request_url = request_builder.build()

        return Request(request_url,
                       lambda response: self.__parse_models(maker_name, self.script_version, self.cookie, response))

    def __parse_models(self, maker_name, script_version, cookie, response):
        decoded_response_text = self.decode_response_if_successful(response)
        models_list: List[Model] = self.__parser(decoded_response_text)

        for model in models_list:
            model.script_version = script_version
            model.cookie = cookie

        yield ModelsListItem(maker_name=maker_name, models=models_list)

from typing import List

from scrapy import Request

from autoinfo.data.plain import Model, Maker, SubModel
from autoinfo.services import AutoDetailsService
from . import AutoInfoBaseSpider
from .parsers import SubModelsResponseParser
from ..items import SubModelsListItem


class AutoInfoSubModelsSpider(AutoInfoBaseSpider):
    name = 'autoinfo-sub-models-spider'

    def __init__(self, auto_details_service: AutoDetailsService, base_url: str, **kwargs):
        super().__init__(auto_details_service, base_url, **kwargs)

        self.__parser = SubModelsResponseParser(self.logger)

    def start_requests(self):
        makers = {maker.id: maker for maker in self.auto_details_service.load_makers()}

        for model in self.auto_details_service.load_models():
            yield self.__create_download_sub_models_request(makers[model.maker_id], model)

    def __create_download_sub_models_request(self, maker: Maker, model: Model):
        request_builder = self.create_basic_request_builder()
        request_builder.add_params({
            "scriptVersion": model.script_version,
            "cookie": model.cookie,
            "0": "submodel",
            "1": maker.name,
            "2": model.code
        })
        request_url = request_builder.build()

        return Request(request_url, lambda response: self.__parse_sub_models(model.id, response))

    def __parse_sub_models(self, model_id, response):
        decoded_response_text = self.decode_response_if_successful(response)
        sub_models_list: List[SubModel] = self.__parser(decoded_response_text)

        yield SubModelsListItem(model_id=model_id, sub_models=sub_models_list)

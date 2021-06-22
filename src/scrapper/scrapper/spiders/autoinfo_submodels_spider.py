from typing import List

from scrapy import Request

from autoinfo.data.plain import Model, Maker, SubModel
from autoinfo.services import AutoDetailsService
from . import AutoInfoBaseSpider
from .parsers import SubModelsResponseParser
from ..items import SubModelsListItem


class AutoInfoSubModelsSpider(AutoInfoBaseSpider):
    name = 'autoinfo-submodels-spider'

    def __init__(self, auto_details_service: AutoDetailsService, base_url: str, **kwargs):
        super().__init__(auto_details_service, base_url, **kwargs)

        self.__parser = SubModelsResponseParser(self.logger)

    def start_requests(self):
        makers = self.auto_details_service.load_makers_dict()

        for model in self.auto_details_service.load_models():
            if not model.submodels_handled:
                yield self.__create_download_submodels_request(makers[model.maker_id], model)

    def __create_download_submodels_request(self, maker: Maker, model: Model):
        request_builder = self.create_basic_request_builder()
        request_builder.add_params({
            "scriptVersion": model.script_version,
            "cookie": model.cookie,
            "0": "submodel",
            "1": maker.name,
            "2": model.code
        })
        request_url = request_builder.build()

        return Request(request_url, lambda response: self.__parse_submodels(model.id, response))

    def __parse_submodels(self, model_id, response):
        decoded_response_text = self.decode_response_if_successful(response)
        submodels_list: List[SubModel] = self.__parser(decoded_response_text)

        yield SubModelsListItem(model_id=model_id, submodels=submodels_list)

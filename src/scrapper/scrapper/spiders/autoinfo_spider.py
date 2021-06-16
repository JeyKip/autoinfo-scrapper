import time
from typing import List

import scrapy
from scrapy import Request

from autoinfo.cookie import CookieProvider
from autoinfo.data.plain import Maker
from autoinfo.decoders import RequestBuilder, ResponseDecoder
from autoinfo.services import AutoDetailsService
from .parsers import MakersResponseParser
from ..items import MakersListItem

MAKERS_PARSER = "MAKERS_PARSER"


# noinspection PyAbstractClass,PyMethodMayBeStatic
class AutoInfoSpider(scrapy.Spider):
    name = 'autoinfo'
    allowed_domains = ['online.autoinfo.com.au']

    def __init__(self,
                 auto_details_service: AutoDetailsService,
                 cookie_provider: CookieProvider,
                 base_url: str,
                 **kwargs):
        super().__init__(**kwargs)

        self.__auto_details_service = auto_details_service
        self.__cookie_provider = cookie_provider
        self.__response_decoder = ResponseDecoder()
        self.__base_url = base_url
        self.__refresh_cookie()

        self.__parsers = {
            MAKERS_PARSER: MakersResponseParser(self.logger)
        }

    def __refresh_cookie(self):
        self.__cookie = self.__cookie_provider.get_cookie()

    def start_requests(self):
        yield self.__create_download_makers_request()

    def __create_download_makers_request(self):
        request_builder = self.__create_basic_request_builder()
        request_builder.add_param("0", "make")
        request_url = request_builder.build()

        return Request(request_url, self.__parse_makers)

    def __create_basic_request_builder(self):
        request_builder = RequestBuilder(self.__base_url)
        request_builder.add_params({
            "AU": 1,
            "NZ": 1,
            "USA": 1,
            "JAPAN": 1,
            "THAI": 1,
            "AEM": 1,
            "lllll": 0,
            "ChassisFlag": 1,
            "SeriesFlag": 1,
            "isBot": "false",
            "amd": "false",
            "t": 0,  # tab number, check getTabCodeByTabId method in script file
            "scriptVersion": self.__cookie.script_version,
            "cookie": self.__cookie.cookie,
        })
        request_builder.exec_before_evaluation(lambda rb: rb.add_param("dt", int(time.time()) * 1000))

        return request_builder

    def __parse_makers(self, response):
        decoded_response_text = self.__decode_response_if_successful(response)
        makers_list: List[Maker] = self.__parsers[MAKERS_PARSER](decoded_response_text)

        yield MakersListItem(makers=makers_list)

        for maker in makers_list:
            yield self.__create_download_models_request(maker.name)

    def __decode_response_if_successful(self, response):
        try:
            if 200 <= response.status < 300:
                return self.__response_decoder.decode(response.text[2:-2]).replace("&nbsp;", "")

            return ""
        except Exception as error:
            self.logger.exception(error)
            return ""

    def __create_download_models_request(self, maker_name):
        request_builder = self.__create_basic_request_builder()
        request_builder.add_param("1", maker_name)
        request_builder.add_param("0", "model")
        request_url = request_builder.build()

        return Request(request_url, lambda response: self.__parse_models(maker_name, response))

    def __parse_models(self, maker_name, response):
        decoded_response_text = self.__decode_response_if_successful(response)
        # ignore all models and popular models items
        # check for duplicates because items in the popular models and all models sections have the same names and ids

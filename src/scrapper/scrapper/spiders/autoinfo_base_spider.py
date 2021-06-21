import time

from scrapy import Spider

from autoinfo.decoders import ResponseDecoder, RequestBuilder
from autoinfo.services import AutoDetailsService


class AutoInfoBaseSpider(Spider):
    allowed_domains = ['online.autoinfo.com.au']

    def __init__(self, auto_details_service: AutoDetailsService, base_url: str, **kwargs):
        super().__init__(**kwargs)

        self.__auto_details_service = auto_details_service
        self.__base_url = base_url
        self.__response_decoder = ResponseDecoder()

    @property
    def auto_details_service(self):
        return self.__auto_details_service

    def create_basic_request_builder(self):
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
        })
        request_builder.exec_before_evaluation(lambda rb: rb.add_param("dt", int(time.time()) * 1000))

        return request_builder

    def decode_response_if_successful(self, response):
        try:
            if 200 <= response.status < 300:
                # if "Unauthorised use has been detected." in response.text:
                #     # handle a case when request is banned
                #     return ""

                return self.__response_decoder.decode(response.text[2:-2]).replace("&nbsp;", "")

            return ""
        except Exception as error:
            self.logger.exception(error)
            return ""

    def parse(self, response, **kwargs):
        pass

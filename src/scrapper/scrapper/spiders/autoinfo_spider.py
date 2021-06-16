import time

import scrapy

from autoinfo.cookie import CookieProvider
from autoinfo.decoders import RequestBuilder
from autoinfo.services import AutoDetailsService


class AutoInfoSpider(scrapy.Spider):
    name = 'autoinfo'
    allowed_domains = ['online.autoinfo.com.au']

    def __init__(self,
                 auto_details_service: AutoDetailsService,
                 cookie_provider: CookieProvider,
                 base_url: str,
                 **kwargs):
        self.__auto_details_service = auto_details_service
        self.__cookie_provider = cookie_provider
        self.__request_builder = RequestBuilder(base_url)

        super().__init__(**kwargs)

    def start_requests(self):
        self.__init_request_builder()

    def parse(self, response, **kwargs):
        pass

    def __init_request_builder(self):
        self.__request_builder.add_params({
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
            "t": 0  # tab number, check getTabCodeByTabId method in script file
        })
        self.__request_builder.exec_before_evaluation(lambda rb: rb.add_param("dt", int(time.time()) * 1000))
        self.__init_request_builder_with_cookies()
        # rb.add_param("1", "TOYOTA888")
        # rb.add_param("0", "model")
        # rb.add_param("0", "make")
        # rb.add_param("ZZZ", "2097266890bddd773b05ff7300cacb82")

    def __init_request_builder_with_cookies(self):
        cookie = self.__cookie_provider.get_cookie()

        self.__request_builder.add_params({
            "scriptVersion": cookie.script_version,
            "cookie": cookie.cookie,
        })

from autoinfo.cookie import CookieProvider
from autoinfo.services import AutoDetailsService
from scrapper.scrapper.spiders import AutoInfoBaseSpider


class AutoInfoCookieBaseSpider(AutoInfoBaseSpider):
    def __init__(self, auto_details_service: AutoDetailsService, cookie_provider: CookieProvider, base_url: str,
                 **kwargs):
        super().__init__(auto_details_service, base_url, **kwargs)

        self.__cookie_provider = cookie_provider
        self.__refresh_cookie()

    def __refresh_cookie(self):
        self.__cookie = self.__cookie_provider.get_cookie()

    @property
    def cookie_provider(self):
        return self.__cookie_provider

    @property
    def script_version(self):
        return self.__cookie.script_version

    @property
    def cookie(self):
        return self.__cookie.cookie

    def create_basic_request_builder(self):
        request_builder = super().create_basic_request_builder()
        request_builder.add_params({
            "scriptVersion": self.script_version,
            "cookie": self.cookie,
        })

        return request_builder

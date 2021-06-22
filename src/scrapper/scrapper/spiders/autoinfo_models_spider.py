from typing import List

from scrapy import Request

from autoinfo.cookie import CookieProvider
from autoinfo.data.plain import Model
from autoinfo.services import AutoDetailsService
from . import AutoInfoCookieBaseSpider
from .parsers import ModelsResponseParser
from ..items import ModelsListItem, MakerModelsCountItem


class AutoInfoModelsSpider(AutoInfoCookieBaseSpider):
    name = 'autoinfo-models-spider'

    def __init__(self, auto_details_service: AutoDetailsService, cookie_provider: CookieProvider, base_url: str,
                 **kwargs):
        super().__init__(auto_details_service, cookie_provider, base_url, **kwargs)

        self.__parser = ModelsResponseParser(self.logger)
        self.__models_parsed = 0

    def start_requests(self):
        for maker in self.auto_details_service.load_makers():
            # if all models are handled we don't need to load them (suppose that they don't change at all)
            # if we need to refresh by some maker we just can zero out these properties
            # of a maker in the database and run this spider again
            if maker.models_count and maker.models_count == maker.handled_models_count:
                continue

            callback = self.__get_multi_models_parser(maker.id, maker.name)
            request = self.__create_download_models_request(maker.name, callback)

            yield request

    def __create_download_models_request(self, maker_name, callback, script_version=None, cookie=None):
        request_builder = self.create_basic_request_builder()
        request_builder.add_params({
            "1": maker_name,
            "0": "model",
            "scriptVersion": script_version or self.script_version,
            "cookie": cookie or self.cookie,
        })
        request_url = request_builder.build()

        return Request(request_url, callback, dont_filter=True)

    def __get_multi_models_parser(self, maker_id, maker_name):
        def parse(response):
            decoded_response_text = self.decode_response_if_successful(response)
            existing_models = self.auto_details_service.load_models_for_maker(maker_id)
            existing_models_name_set = set(map(lambda x: x.name, existing_models))
            models_list: List[Model] = self.__parser(decoded_response_text)

            # notify maker entity about available amount of models
            yield MakerModelsCountItem(maker_id=maker_id, models_count=len(models_list))

            for model in models_list:
                # if model is already handled we should skip it
                if model.name in existing_models_name_set:
                    continue

                script_version, cookie = self.__load_cookies_for_model(maker_name, model.name)

                callback = self.__get_single_model_parser(maker_name, model.name, script_version, cookie)
                request = self.__create_download_models_request(maker_name, callback, script_version, cookie)

                yield request

        return parse

    def __load_cookies_for_model(self, maker_name, model_name):
        # we need to set individual cookie value for every model to prevent probability to be banned
        # since this site checks this value to calculate activity of the user
        # making many subsequent requests but with different cookie value can allow us to make a lot of
        # requests and not being banned
        # if we've already got cookie for this model we don't need to get it again
        existing_cookie = self.auto_details_service.get_cookie_for_model(maker_name, model_name)
        if existing_cookie:
            self.logger.debug("==============================")
            self.logger.debug(f"Skip cookie refreshing for '{maker_name} {model_name}'")

            return existing_cookie.script_version, existing_cookie.cookie
        else:
            self.logger.debug("==============================")
            self.logger.debug(f"Refreshing cookie for '{maker_name} {model_name}'")

            cookie = self.cookie_provider.get_cookie()

            # save cookie values for future usage
            self.auto_details_service.save_model_cookie(maker_name, model_name, cookie.script_version, cookie.cookie)

            return cookie.script_version, cookie.cookie

    def __get_single_model_parser(self, maker_name, model_name, script_version, cookie):
        def parse(response):
            self.logger.debug(
                f"#{self.__models_parsed + 1}. Parsing '{maker_name} {model_name}' with cookie '{cookie}'")
            decoded_response_text = self.decode_response_if_successful(response)
            models_list: List[Model] = self.__parser(decoded_response_text)

            for model in models_list:
                if model.name == model_name:
                    model.script_version = script_version
                    model.cookie = cookie

                    self.__models_parsed += 1

                    yield ModelsListItem(maker_name=maker_name, models=[model])

        return parse

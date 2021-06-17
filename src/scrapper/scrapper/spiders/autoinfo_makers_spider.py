from typing import List

from scrapy import Request

from autoinfo.data.plain import Maker
from . import AutoInfoBaseSpider
from .parsers import MakersResponseParser
from ..items import MakersListItem


# noinspection PyAbstractClass,PyMethodMayBeStatic
class AutoInfoMakersSpider(AutoInfoBaseSpider):
    name = 'autoinfo-makers-spider'

    def start_requests(self):
        yield self.__create_download_makers_request()

    def __create_download_makers_request(self):
        request_builder = self.create_basic_request_builder()
        request_builder.add_param("0", "make")
        request_url = request_builder.build()

        return Request(request_url, self.__parse_makers)

    def __parse_makers(self, response):
        parse_makers = MakersResponseParser(self.logger)
        decoded_response_text = self.decode_response_if_successful(response)
        makers_list: List[Maker] = parse_makers(decoded_response_text)

        yield MakersListItem(makers=makers_list)

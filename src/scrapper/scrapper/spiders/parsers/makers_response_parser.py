import re
from typing import List

from autoinfo.data.plain import Maker


class MakersResponseParser:
    def __init__(self, logger):
        self.__logger = logger
        self.__maker_data_regexp = re.compile(r'\[([^]]+)]', re.IGNORECASE | re.MULTILINE)
        self.__maker_name_regexp = re.compile(r'"\s*([^"]+)\s*"', re.IGNORECASE)

    def __call__(self, decoded_response_text: str, *args, **kwargs):
        makers_data = re.findall(self.__maker_data_regexp, decoded_response_text)
        makers_list_item = self.__parse_makers(makers_data)

        return makers_list_item

    def __parse_makers(self, makers_data):
        makers: List[Maker] = []
        all_makers_passed = False

        for maker_data in makers_data:
            if all_makers_passed:
                maker_name = self.__extract_maker_name(maker_data)
                if maker_name:
                    makers.append(Maker(maker_name=maker_name))
            elif "All Makes" in maker_data:
                all_makers_passed = True

        return makers

    def __extract_maker_name(self, maker_info):
        try:
            result = re.search(self.__maker_name_regexp, maker_info.split(",")[-1])
            maker_name = result.group(1)

            return maker_name
        except Exception as error:
            self.__logger.exception(error)
            return None

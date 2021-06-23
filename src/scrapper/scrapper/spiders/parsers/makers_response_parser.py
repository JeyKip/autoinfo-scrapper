import json
from typing import List

from autoinfo.data.plain import Maker


class MakersResponseParser:
    def __init__(self, logger):
        self.__logger = logger

    def __call__(self, decoded_response_text: str, *args, **kwargs):
        makers_data = json.loads(f"[{decoded_response_text}]")
        makers_list_item = self.__parse_makers(makers_data)

        return makers_list_item

    # noinspection PyMethodMayBeStatic
    def __parse_makers(self, makers_data):
        makers: List[Maker] = []
        all_makers_passed = False

        for _, maker_name in makers_data:
            if all_makers_passed:
                makers.append(Maker(name=maker_name))
            elif "All Makes" in maker_name:
                all_makers_passed = True

        return makers

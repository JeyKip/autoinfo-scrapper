import re
from typing import List

from autoinfo.data.plain import SubModel


class SubModelsResponseParser:
    def __init__(self, logger):
        self.__logger = logger
        self.__sub_model_data_regexp = re.compile(r'\[([^]]+)]', re.IGNORECASE | re.MULTILINE)
        self.__sub_model_name_regexp = re.compile(r'"\s*([^"]+)\s*"', re.IGNORECASE)

    def __call__(self, decoded_response_text: str, *args, **kwargs):
        sub_models_data = re.findall(self.__sub_model_data_regexp, decoded_response_text)
        sub_models_list_item = self.__parse_sub_models(sub_models_data)

        return sub_models_list_item

    def __parse_sub_models(self, sub_models_data):
        sub_models: List[SubModel] = []

        for sub_model_data in sub_models_data:
            if "ALL" not in sub_model_data:
                name = self.__extract_name(sub_model_data)
                if name:
                    sub_models.append(SubModel(name=name))

        return sub_models

    def __extract_name(self, sub_model_info):
        try:
            name_quoted = sub_model_info.split(",")[-1]
            name = re.search(self.__sub_model_name_regexp, name_quoted).group(1)

            return name
        except Exception as error:
            self.__logger.exception(error)
            return None

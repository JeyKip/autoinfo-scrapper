import re
from typing import List

from autoinfo.data.plain import SubModel


class SubModelsResponseParser:
    def __init__(self, logger):
        self.__logger = logger
        self.__submodel_data_regexp = re.compile(r'\[([^]]+)]', re.IGNORECASE | re.MULTILINE)
        self.__submodel_prop_regexp = re.compile(r'"\s*([^"]+)\s*"', re.IGNORECASE)

    def __call__(self, decoded_response_text: str, *args, **kwargs):
        submodels_data = re.findall(self.__submodel_data_regexp, decoded_response_text)
        submodels_list_item = self.__parse_submodels(submodels_data)

        return submodels_list_item

    def __parse_submodels(self, submodels_data):
        submodels: List[SubModel] = []

        for submodel_data in submodels_data:
            if "ALL" not in submodel_data:
                code, name = self.__extract_props(submodel_data)
                if code and name:
                    submodels.append(SubModel(code=code, name=name))

        return submodels

    def __extract_props(self, model_info):
        try:
            code_quoted, name_quoted = model_info.split(",")
            code = re.search(self.__submodel_prop_regexp, code_quoted).group(1)
            name = re.search(self.__submodel_prop_regexp, name_quoted).group(1)

            return code, name
        except Exception as error:
            self.__logger.exception(error)
            return None, None

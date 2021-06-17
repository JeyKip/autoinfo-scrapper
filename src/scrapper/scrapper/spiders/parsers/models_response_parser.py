import re
from typing import List

from autoinfo.data.plain import Model


class ModelsResponseParser:
    def __init__(self, logger):
        self.__logger = logger
        self.__model_data_regexp = re.compile(r'\[([^]]+)]', re.IGNORECASE | re.MULTILINE)
        self.__model_prop_regexp = re.compile(r'"\s*([^"]+)\s*"', re.IGNORECASE)

    def __call__(self, decoded_response_text: str, *args, **kwargs):
        models_data = re.findall(self.__model_data_regexp, decoded_response_text)
        models_list_item = self.__parse_models(models_data)

        return models_list_item

    def __parse_models(self, models_data):
        handled_models = set()
        models: List[Model] = []

        for model_data in models_data:
            if "Popular Models" in model_data or "All Models" in model_data:
                continue

            code, name = self.__extract_props(model_data)

            if code and name and code not in handled_models:
                handled_models.add(code)
                models.append(Model(model_code=code, model_name=name))

        return models

    def __extract_props(self, model_info):
        try:
            code_quoted, name_quoted = model_info.split(",")
            code = re.search(self.__model_prop_regexp, code_quoted).group(1)
            name = re.search(self.__model_prop_regexp, name_quoted).group(1)

            return code, name
        except Exception as error:
            self.__logger.exception(error)
            return None, None

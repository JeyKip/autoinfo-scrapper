import json
from typing import List

from autoinfo.data.plain import Model


class ModelsResponseParser:
    def __init__(self, logger):
        self.__logger = logger

    def __call__(self, decoded_response_text: str, *args, **kwargs):
        models_data = json.loads(f"[{decoded_response_text}]")
        models_list_item = self.__parse_models(models_data)

        return models_list_item

    # noinspection PyMethodMayBeStatic
    def __parse_models(self, models_data):
        handled_models = set()
        models: List[Model] = []

        for code, name in models_data:
            if name not in ['- Popular Models -', '- All Models -'] and code not in handled_models:
                handled_models.add(code)
                models.append(Model(model_code=code, model_name=name))

        return models

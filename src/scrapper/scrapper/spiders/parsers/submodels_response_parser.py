import json

from autoinfo.data.plain import SubModel


class SubModelsResponseParser:
    def __init__(self, logger):
        self.__logger = logger

    def __call__(self, decoded_response_text: str, *args, **kwargs):
        submodels_data = json.loads(f"[{decoded_response_text}]")
        submodels_list = [SubModel(code=code, name=name) for code, name in submodels_data if
                          name != "ALL" and code and name]

        return submodels_list

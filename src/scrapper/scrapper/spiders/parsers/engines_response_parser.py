import json

from autoinfo.data.plain import Engine


class EnginesResponseParser:
    def __init__(self, logger):
        self.__logger = logger

    def __call__(self, decoded_response_text: str, *args, **kwargs):
        engines_data = json.loads(f"[{decoded_response_text}]")
        engines_list = [Engine(code=code, name=name) for code, name in engines_data]

        return engines_list

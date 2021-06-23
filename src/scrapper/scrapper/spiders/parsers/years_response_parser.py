import json


class YearsResponseParser:
    def __init__(self, logger):
        self.__logger = logger

    def __call__(self, decoded_response_text: str, *args, **kwargs):
        years_data = json.loads(f"[{decoded_response_text}]")
        years_list_item = [int(year) for _, year in years_data if year != "ALL" and year]

        return years_list_item

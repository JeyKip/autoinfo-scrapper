import json

from autoinfo.data.plain import Series


class SeriesResponseParser:
    def __init__(self, logger):
        self.__logger = logger

    def __call__(self, decoded_response_text: str, *args, **kwargs):
        if "aaData" not in decoded_response_text:
            self.__logger.warning(f"There is no 'aaData' section in '{decoded_response_text}'")
            return []

        series_data = json.loads(decoded_response_text)["aaData"]
        series_list = [Series(series=series, chassis=chassis) for series, chassis in series_data if
                       series != "SHOW ALL"]

        return series_list

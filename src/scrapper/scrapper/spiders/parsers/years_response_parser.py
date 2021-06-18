import re
from typing import List


class YearsResponseParser:
    def __init__(self, logger):
        self.__logger = logger
        self.__data_regexp = re.compile(r'\[([^]]+)]', re.IGNORECASE | re.MULTILINE)
        self.__year_regexp = re.compile(r'"\s*(\d+)\s*"', re.IGNORECASE)

    def __call__(self, decoded_response_text: str, *args, **kwargs):
        years_data = re.findall(self.__data_regexp, decoded_response_text)
        years_list_item = self.__parse_years(years_data)

        return years_list_item

    def __parse_years(self, years_data):
        years: List[int] = []

        for year_data in years_data:
            if "ALL" not in year_data:
                year = self.__extract_year(year_data)
                if year:
                    years.append(year)

        return years

    def __extract_year(self, year_info):
        try:
            year_quoted = year_info.split(",")[-1]
            year = re.search(self.__year_regexp, year_quoted).group(1)

            return int(year)
        except Exception as error:
            self.__logger.exception(error)
            return None

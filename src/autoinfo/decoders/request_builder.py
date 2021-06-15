from .hex_decoder import HexDecoder


# noinspection PyMethodMayBeStatic
class RequestBuilder:
    def __init__(self, base_url):
        self.__base_url = base_url
        self.__params = dict()
        self.__hex_decoder = HexDecoder()

    def add_param(self, param_name, value):
        self.__params[param_name] = value

    def build(self):
        pure_query_str = self.__build_query_str()
        encoded_query_str = self.__encode(pure_query_str)
        query_str = f"{self.__base_url}?p={encoded_query_str}"

        return query_str

    def __build_query_str(self):
        return '&'.join([f"{key}={value}" for key, value in self.__params.items()])

    def __encode(self, value):
        hex_str = self.__hex_decoder.convert_to_hex_string(value)
        substituted_str = "".join(self.__hex_decoder.replace_hex_with_substitutions(hex_str))

        return substituted_str

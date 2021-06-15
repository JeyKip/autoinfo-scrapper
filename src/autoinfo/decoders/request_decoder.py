from .constants import HEX_SUBSTITUTION_SYMBOLS, ZERO_ASCII_CODE
from .hex_decoder import HexDecoder


# noinspection PyMethodMayBeStatic
class RequestDecoder:
    def __init__(self):
        self.__hex_decoder = HexDecoder()

    def decode(self, value):
        original_hex_query = self.__replace_substitutions_with_original_symbols(value)
        original_query = self.__hex_decoder.from_hex_to_string(original_hex_query)

        return original_query

    def __replace_substitutions_with_original_symbols(self, value):
        result = []

        for i in range(len(value) - 1, -1, -1):
            index_in_substitutions = HEX_SUBSTITUTION_SYMBOLS.index(value[i])
            symbol_ascii_code = index_in_substitutions + ZERO_ASCII_CODE
            original_symbol = chr(symbol_ascii_code)

            result.append(original_symbol)

        return "".join(result)

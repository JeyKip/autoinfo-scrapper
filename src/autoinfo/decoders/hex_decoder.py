import traceback

from .constants import HEX_SUBSTITUTION_SYMBOLS, ZERO_ASCII_CODE
from .errors import HexDecodingError


# noinspection PyMethodMayBeStatic
class HexDecoder:
    def from_hex_to_char_array(self, hex_string):
        try:
            hex_length = self.__validate_hex_string_length(hex_string)
            return [self.__decode_symbol(hex_string[i:i + 2]) for i in range(0, hex_length - 2, 2)]
        except Exception as error:
            traceback.print_tb(error.__traceback__)
            raise HexDecodingError("Cannot convert hex string to char array because input string has incorrect format.")

    def from_hex_to_inverted_char_array(self, hex_string):
        try:
            hex_length = self.__validate_hex_string_length(hex_string)
            return [self.__decode_symbol(hex_string[i - 2:i]) for i in range(hex_length, 0, -2)]
        except Exception as error:
            traceback.print_tb(error.__traceback__)
            raise HexDecodingError(
                "Cannot convert hex string to inverted char array because input string has incorrect format.")

    def from_hex_to_string(self, hex_string):
        return self.__to_string(self.from_hex_to_char_array(hex_string))

    def from_hex_to_inverted_string(self, hex_string):
        return self.__to_string(self.from_hex_to_inverted_char_array(hex_string))

    def convert_to_hex_array(self, value):
        return [hex(ord(symbol))[2:].zfill(2).upper() for symbol in value]

    def convert_to_hex_string(self, value):
        return "".join(self.convert_to_hex_array(value))

    def replace_hex_with_substitutions(self, hex_str):
        symbols = []

        for i in range(len(hex_str) - 1, -1, -1):
            ascii_code = ord(hex_str[i])
            index_in_encoding_set = ascii_code - ZERO_ASCII_CODE
            substituted_symbol = HEX_SUBSTITUTION_SYMBOLS[index_in_encoding_set]

            symbols.append(substituted_symbol)

        return self.__to_string(symbols)

    def __decode_symbol(self, hex_symbol):
        ascii_code = int(hex_symbol, 16)
        original_symbol = chr(ascii_code)

        return original_symbol

    def __to_string(self, arr):
        return "".join(arr)

    def __validate_hex_string_length(self, hex_str):
        str_length = len(hex_str or "")

        if str_length % 2 == 1:
            raise HexDecodingError("Length of hex decoded string should be even number.")

        return str_length

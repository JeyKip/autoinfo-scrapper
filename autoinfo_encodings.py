import traceback

HEX_SUBSTITUTION_SYMBOLS = "F0CB9DAE16       543872"
ZERO_ASCII_CODE = ord("0")


class HexDecodingError(Exception):
    pass


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


# noinspection PyMethodMayBeStatic
class ResponseDecoder:
    def __init__(self):
        self.__xor_codes = list(self.__get_xor_codes())
        self.__hex_to_int_dict = self.__get_hex_to_int_dict()

    def __get_xor_codes(self):
        return [ord(x) for x in "k81238321"]

    def __get_hex_to_int_dict(self):
        return {hex(i)[2:].zfill(2).upper(): i for i in range(256)}

    def decode(self, value):
        if not value or not isinstance(value, str):
            return ""

        result = []
        xor_code_index = 0
        xor_codes_length = len(self.__xor_codes)
        value_length = len(value) - 1

        while value_length > 0:
            hex_symbol = self.__hex_to_int_dict[value[value_length] + value[value_length - 1]]
            xor_code = self.__xor_codes[xor_code_index]
            char_code = hex_symbol ^ xor_code
            result.append(chr(char_code))

            xor_code_index += 1
            value_length -= 2

            if xor_code_index >= xor_codes_length:
                xor_code_index = 0

        return "".join(result)

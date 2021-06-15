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

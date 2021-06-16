import traceback


def get_value_safely(key, dictionary, value_type=str):
    try:
        if key in dictionary:
            return value_type(dictionary[key])

        return None
    except Exception as error:
        traceback.print_tb(error.__traceback__)
        return None

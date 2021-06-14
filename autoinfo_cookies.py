import re
import traceback
from urllib.parse import unquote

import requests

from autoinfo_encodings import HexDecoder


class CookieCannotBeResolvedError(Exception):
    pass


class VariableCannotBeResolvedError(Exception):
    pass


class Cookie:
    def __init__(self, script_version, cookie):
        self.__script_version = script_version
        self.__cookie = cookie

    @property
    def script_version(self):
        return self.__script_version

    @property
    def cookie(self):
        return self.__cookie


class CookieProvider:
    def __init__(self):
        # to get a correct script with filled lO variable we need to make a request
        # to the following url without c (cookie) parameter specified
        self.__script_url = "https://online.autoinfo.com.au/oscar/jpeg/2.6.jpg,guid=Aut01nf0iiqq4,myAction=,c="

        # name of variable to get cookie key from
        # it is stored in the javascript file such like this:
        # var lO = "9E273728C9D79945416FBBFC1495AF989469D90C3FF31D161C485866D5B97E9D680B33ED6B3B8BCF1C3E2A0B8EEBFE1D4F2ED93A900F114BCD4D8E4CE6DD0963";
        self.__cookie_key_var_name = "lO"

        # name of variable to get script version from
        # it is stored in the javascript file such like this:
        # var mP = "3.590.jpg";
        self.__script_version_var_name = "mP"

        # base url to get cookie value
        self.__cookie_base_url = "https://online.autoinfo.com.au/oscar/Aut01nf0iiqq4/z_0"

        self.__hex_decoder = HexDecoder()

    def get_cookie(self) -> Cookie:
        link = self.__get_script_link()
        decoded_script = self.__get_decoded_script(link)
        script_version = self.__get_var_from_script(decoded_script, self.__script_version_var_name)
        cookie_key = self.__get_var_from_script(decoded_script, self.__cookie_key_var_name)
        encrypted_cookie_key = self.__hex_decoder.replace_hex_with_substitutions(cookie_key)
        cookie = self.__get_cookie_value(encrypted_cookie_key)

        return Cookie(script_version, cookie)

    def __get_script_link(self):
        try:
            # example of script which we can get from here:
            # eval(unescape('%76%61%72%20%5F%30%78%37%35%66%31%3D%5B%22%5C%78%36%43%5C%78%36%35
            # %5C%78%36%45%5C%78%36%37%5C%78%37%34%5C%78%36%38%22%2C%22%5C%78%37%33%5C%78%37%35
            # %5C%78%36%32%5C%78%37%33%5C%78%37%34%5C%78%37%32%22%2C%22%5C%78%36%36%5C%78%37%32
            # %5C%78%36%46%5C%78%36%44%5C%78%34%33%5C%78%36%38%5C%78%36%31%5C%78%37%32%5C%78%34
            # %33%5C%78%36%46%5C%78%36%34%5C%78%36%35%22%2C%22%5C%78%37%30%5C%78%37%35%5C%78%37
            # %33%5C%78%36%38%22%2C%22%22%2C%22%5C%78%36%41%5C%78%36%46%5C%78%36%39%5C%78%36%45
            # %22%2C%22%5C%78%37%32%5C%78%36%35%5C%78%37%36%5C%78%36%35%5C%78%37%32%5C%78%37%33
            # %5C%78%36%35%22%2C%22%5C%78%32%46%5C%78%32%46%5C%78%36%46%5C%78%36%45%5C%78%36%43
            # %5C%78%36%39%5C%78%36%45%5C%78%36%35%5C%78%32%45%5C%78%36%31%5C%78%37%35%5C%78%37
            # %34%5C%78%36%46%5C%78%36%39%5C%78%36%45%5C%78%36%36%5C%78%36%46%5C%78%32%45%5C%78
            # %36%33%5C%78%36%46%5C%78%36%44%5C%78%32%45%5C%78%36%31%5C%78%37%35%5C%78%32%46%5C
            # %78%36%46%5C%78%37%33%5C%78%36%33%5C%78%36%31%5C%78%37%32%5C%78%32%46%5C%78%37%30
            # %5C%78%36%45%5C%78%36%37%5C%78%32%46%5C%78%33%33%5C%78%32%45%5C%78%33%35%5C%78%33
            # %39%5C%78%33%30%5C%78%32%45%5C%78%36%41%5C%78%37%30%5C%78%36%37%5C%78%32%43%5C%78
            # %37%36%5C%78%36%35%5C%78%36%38%5C%78%36%39%5C%78%36%33%5C%78%36%43%5C%78%36%35%5C
            # %78%33%44%5C%78%32%43%5C%78%36%37%5C%78%37%32%5C%78%36%46%5C%78%37%35%5C%78%37%30
            # %5C%78%33%44%5C%78%32%43%5C%78%37%30%5C%78%36%31%5C%78%37%32%5C%78%37%34%5C%78%34
            # %45%5C%78%37%35%5C%78%36%44%5C%78%36%32%5C%78%36%35%5C%78%37%32%5C%78%33%44%5C%78
            # %32%43%5C%78%36%37%5C%78%37%35%5C%78%36%39%5C%78%36%34%5C%78%33%44%5C%78%34%31%5C
            # %78%37%35%5C%78%37%34%5C%78%33%30%5C%78%33%31%5C%78%36%45%5C%78%36%36%5C%78%33%30
            # %5C%78%36%39%5C%78%36%39%5C%78%37%31%5C%78%37%31%5C%78%33%34%5C%78%32%43%5C%78%36
            # %33%5C%78%33%44%22%2C%22%5C%78%36%37%5C%78%36%35%5C%78%37%34%22%5D%3B%66%75%6E%63
            # %74%69%6F%6E%20%5F%30%78%7A%35%31%37%28%5F%30%78%62%35%63%36%78%32%29%7B%76%61%72
            # %20%5F%30%78%62%35%63%36%78%33%3D%5B%5D%3B%76%61%72%20%5F%30%78%62%35%63%36%78%34
            # %3D%5F%30%78%62%35%63%36%78%32%5B%5F%30%78%37%35%66%31%5B%30%5D%5D%3B%66%6F%72%28
            # %76%61%72%20%5F%30%78%62%35%63%36%78%35%3D%30%3B%5F%30%78%62%35%63%36%78%35%3C%20
            # %5F%30%78%62%35%63%36%78%34%3B%5F%30%78%62%35%63%36%78%35%2B%3D%20%32%29%7B%5F%30
            # %78%62%35%63%36%78%33%5B%5F%30%78%37%35%66%31%5B%33%5D%5D%28%53%74%72%69%6E%67%5B
            # %5F%30%78%37%35%66%31%5B%32%5D%5D%28%70%61%72%73%65%49%6E%74%28%5F%30%78%62%35%63
            # %36%78%32%5B%5F%30%78%37%35%66%31%5B%31%5D%5D%28%5F%30%78%62%35%63%36%78%35%2C%32
            # %29%2C%31%36%29%29%29%7D%3B%72%65%74%75%72%6E%20%5F%30%78%62%35%63%36%78%33%5B%5F
            # %30%78%37%35%66%31%5B%36%5D%5D%28%29%5B%5F%30%78%37%35%66%31%5B%35%5D%5D%28%5F%30
            # %78%37%35%66%31%5B%34%5D%29%7D%66%75%6E%63%74%69%6F%6E%20%5F%30%78%61%39%30%63%28
            # %5F%30%78%62%35%63%36%78%37%29%7B%65%76%61%6C%28%5F%30%78%7A%35%31%37%28%5F%30%78
            # %62%35%63%36%78%37%5B%5F%30%78%37%35%66%31%5B%31%5D%5D%28%31%35%36%2C%5F%30%78%62
            # %35%63%36%78%37%5B%5F%30%78%37%35%66%31%5B%30%5D%5D%2D%20%31%35%36%29%29%29%7D%24
            # %5B%5F%30%78%37%35%66%31%5B%38%5D%5D%28%5F%30%78%37%35%66%31%5B%37%5D%2C%5F%30%78
            # %61%39%30%63%29'));

            with requests.get(self.__script_url) as response:
                response.raise_for_status()

                # we need to get TEXT part from such construction eval(unescape('TEXT'));
                encoded_script = response.text[15:-4]

                # since we get regular javascript here we should split it by ";" and get first value
                # where array containing target url is declared
                declare_values_expression = unquote(encoded_script).split(";")[0]

                # then we need to get array with values from the expression and remove quotes around it
                encoded_values = declare_values_expression.split("=")[1][1:-1]

                # then we need to get second element from the end of the array where our link is stored
                # and remove quotes around it
                encoded_link = encoded_values.split(",")[-2][1:-1]

                # and finally we need to convert every hex symbol from this link into char and concatenate them together
                url = "https:" + "".join([chr(int(x, 16)) for x in encoded_link.split("\\x") if x != ""])

                return url

        except (requests.ConnectionError, requests.HTTPError) as error:
            traceback.print_tb(error.__traceback__)

            raise CookieCannotBeResolvedError(
                "Cannot resolve cookie because there are some issues with getting a link to the script.")

    def __get_decoded_script(self, link):
        try:
            with requests.get(link) as response:
                response.raise_for_status()

                # real script starts at 156th position and all symbols before is just a noise
                encoded_script = response.text[156:]
                decoded_script = self.__hex_decoder.from_hex_to_inverted_string(encoded_script)

                return decoded_script
        except (requests.ConnectionError, requests.HTTPError) as error:
            traceback.print_tb(error.__traceback__)

            raise CookieCannotBeResolvedError(
                "Cannot resolve cookie because there are some issues with getting decoded script.")

    # noinspection PyMethodMayBeStatic
    def __get_var_from_script(self, script, var_name):
        if not script:
            raise ValueError("'script' parameter cannot be undefined.")

        if not var_name:
            raise ValueError("'var_name' parameter cannot be undefined.")

        pattern = re.compile(f'var\\s+{var_name}\\s*=\\s*"([^"]+)"', re.MULTILINE)
        match = re.search(pattern, script)

        if match is None:
            raise VariableCannotBeResolvedError(f"Cannot resolve variable '{var_name}' from the script '{script}'.")

        return match.group(1)

    def __get_cookie_value(self, cookie_key):
        cookie_link = f"{self.__cookie_base_url}/{cookie_key}"

        try:
            with requests.get(cookie_link) as response:
                response.raise_for_status()

                return response.text
        except (requests.ConnectionError, requests.HTTPError) as error:
            traceback.print_tb(error.__traceback__)

            raise CookieCannotBeResolvedError(f"Cannot get cookie from '{cookie_link}'.")

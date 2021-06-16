from autoinfo.utils import get_value_safely

if __name__ == "__main__":
    from dotenv import dotenv_values
    from autoinfo.data.mongo.mongo_connector import MongoConnector

    config = dotenv_values(".env")

    MongoConnector.setup(
        get_value_safely("MONGO_AUTH_USERNAME", config),
        get_value_safely("MONGO_AUTH_PASSWORD", config),
        get_value_safely("MONGO_HOST", config),
        get_value_safely("MONGO_PORT", config, int),
        get_value_safely("MONGO_AUTH_DATABASE", config)
    )

# import requests
#
# from autoinfo.cookie import CookieProvider
# from autoinfo.decoders import RequestBuilder, ResponseDecoder, RequestDecoder
#
# cookie_provider = CookieProvider()
# cookie = cookie_provider.get_cookie()
#
# print(f"Cookie: '{cookie.cookie}', Script version: '{cookie.script_version}'.")
#
# base_ulr = "https://online.autoinfo.com.au/oscar/Aut01nf0iiqq4/a"
# rb = RequestBuilder(base_ulr)
# rb.add_param("AU", 1)
# rb.add_param("NZ", 1)
# rb.add_param("USA", 1)
# rb.add_param("JAPAN", 1)
# rb.add_param("THAI", 1)
# rb.add_param("AEM", 1)
# rb.add_param("lllll", 0)
# rb.add_param("ChassisFlag", 1)
# rb.add_param("SeriesFlag", 1)
# # rb.add_param("1", "TOYOTA888")
# # rb.add_param("0", "model")
# rb.add_param("0", "make")
# # rb.add_param("dt", int(time.time()) * 1000)
# rb.add_param("scriptVersion", cookie.script_version)
# rb.add_param("cookie", cookie.cookie)
# # rb.add_param("isBot", "false")
# # rb.add_param("amd", "false")
# # rb.add_param("t", 0) # tab number, check getTabCodeByTabId method in script file
# # rb.add_param("ZZZ", "2097266890bddd773b05ff7300cacb82")
#
# print(rb.build())
# response = requests.get(rb.build())
# rd = ResponseDecoder()
# print(rd.decode(response.text[2:-2]))
#
# request_decoder = RequestDecoder()
# print(request_decoder.decode(
#     "CE0ADA6E8BFBACB99BB99B0B9B8BBBACAB6BD9DBFBD9C9DBEBBB0BABD9EB1B6B6BEBA9D9B99BFB090B99BBB9D9D9DBDBD90BC9AB0BD96BCBFBBBC9BBD96B1BFBB99BC9C99B99B9EB0BD9B9D99B09A9BB8BCBAC29D98929CDFC09A939098B0BACFB8B9EAC8B9EBAAC0B8BEA0A3AA9BEDA6ACEDABDAC0B8BEA0A3AA9BE6ABEBE0A1AB9ACBBCBBB8B3A3A3A3A3AACDABE3A0AAA8B9A8A0AACDABE3A0AAA8B9E2AC9BE6AACA91BAB9BFBC91BCBB9ABBBA91BCBEBC91B990B9B6B9BFB1B1BA9B96BCBDB6B6B8BDA6A4A2A2ABAACEAFE5A7CFB6BDB7CBB8B7A2A6ABECEDAAD9EFE6ACEBABEACCB1BCABA0ABAFBFBBBEBAAAADBFBCABBEBEB9A9A9ACAFB6B1BABABCBEB6BFBCB8B5D5D5DAC0B8B89D909AC0B8B6909199DAC0B8B7909FD0959AC0B8B09BDDDAC0B8B5D79AC0B8BDD09"))

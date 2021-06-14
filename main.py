import requests

from autoinfo_cookies import CookieProvider
from autoinfo_encodings import RequestBuilder, ResponseDecoder, RequestDecoder

cookie_provider = CookieProvider()
cookie = cookie_provider.get_cookie()

print(f"Cookie: '{cookie.cookie}', Script version: '{cookie.script_version}'.")

base_ulr = "https://online.autoinfo.com.au/oscar/Aut01nf0iiqq4/a"
rb = RequestBuilder(base_ulr)
rb.add_param("AU", 1)
rb.add_param("NZ", 1)
rb.add_param("USA", 1)
rb.add_param("JAPAN", 1)
rb.add_param("THAI", 1)
rb.add_param("AEM", 1)
rb.add_param("lllll", 0)
rb.add_param("ChassisFlag", 1)
rb.add_param("SeriesFlag", 1)
# rb.add_param("1", "TOYOTA888")
# rb.add_param("0", "model")
rb.add_param("0", "make")
# rb.add_param("dt", int(time.time()) * 1000)
rb.add_param("scriptVersion", cookie.script_version)
rb.add_param("cookie", cookie.cookie)
# rb.add_param("isBot", "false")
# rb.add_param("amd", "false")
# rb.add_param("ZZZ", "2097266890bddd773b05ff7300cacb82")

print(rb.build())
response = requests.get(rb.build())
rd = ResponseDecoder()
print(rd.decode(response.text[2:-2]))

request_decoder = RequestDecoder()
print(request_decoder.decode("CBFB0B6BDBEBBB6BABBBCBAB0B8B9E9AAC3ADA9A2A8A8BFBACE979299DFCE97929195D8B0BACFB8B9EAC8B9EBAAC0B8BEA0A3AA9BEDA6ACEDABDAC0B8BEA0A3AA9BE6ABEBE0A1AB9ACFB8B3A3A3A3A3AACDABE3A0AAA8B9A8A0AACDABE3A0AAA8B9E2AC9BE6AACA91BAB9BFBC91BCBB9ABBBA91BCBEBC91B990B9B6B9BFB1B1BA9B96BCBDB6B6B8BDA6A4A2A2ABAACEAFE5A7CFB6BDB7CBB8B7A2A6ABECEDAAD9EFE6ACEBABEACCB1BCABA0ABAFBFBBBEBAAAADBFBCABBEBEB9A9A9ACAFB6B1BABABCBEB6BFBCB8B5D5D5DAC0B8B89D909AC0B8B6909199DAC0B8B7909FD0959AC0B8B09BDDDAC0B8B5D79AC0B8BDD09"))

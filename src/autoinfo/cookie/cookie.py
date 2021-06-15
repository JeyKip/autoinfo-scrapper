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

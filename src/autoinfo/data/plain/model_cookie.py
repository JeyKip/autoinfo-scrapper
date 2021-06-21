from .entity import Entity


class ModelCookie(Entity):
    def __init__(self, _id=None, maker_name=None, model_name=None, script_version=None, cookie=None):
        self.maker_name = maker_name
        self.model_name = model_name
        self.script_version = script_version
        self.cookie = cookie

        super().__init__(_id)

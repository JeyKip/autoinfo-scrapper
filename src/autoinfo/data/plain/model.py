from .entity import Entity


class Model(Entity):
    def __init__(self, model_id=None, maker_id=None, model_code=None, model_name=None, script_version=None,
                 cookie=None):
        self.maker_id = maker_id
        self.code = model_code
        self.name = model_name
        self.script_version = script_version
        self.cookie = cookie

        super().__init__(model_id)

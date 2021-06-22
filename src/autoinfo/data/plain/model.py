from .entity import Entity


class Model(Entity):
    def __init__(self, _id=None, maker_id=None, model_code=None, model_name=None, script_version=None,
                 cookie=None, submodels_handled=None, submodels_count=None, years_handled=None):
        self.maker_id = maker_id
        self.code = model_code
        self.name = model_name
        self.script_version = script_version
        self.cookie = cookie
        self.submodels_handled = submodels_handled
        self.submodels_count = submodels_count
        self.years_handled = years_handled

        super().__init__(_id)

from .entity import Entity


class SubModel(Entity):
    def __init__(self, _id=None, model_id=None, code=None, name=None, years_handled=None):
        self.model_id = model_id
        self.code = code
        self.name = name
        self.years_handled = years_handled

        super().__init__(_id)

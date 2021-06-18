from .entity import Entity


class SubModel(Entity):
    def __init__(self, _id=None, model_id=None, name=None, years=None):
        self.model_id = model_id
        self.name = name
        self.years = years

        super().__init__(model_id)

from .entity import Entity


class Maker(Entity):
    def __init__(self, _id=None, name: str = None, models_count: int = None, handled_models_count: int = None):
        self.name = name
        self.models_count = models_count
        self.handled_models_count = handled_models_count

        super().__init__(_id)

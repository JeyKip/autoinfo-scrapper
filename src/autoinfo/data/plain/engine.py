from .entity import Entity


class Engine(Entity):
    def __init__(self, _id=None, code=None, name=None):
        self.code = code
        self.name = name

        super().__init__(_id)

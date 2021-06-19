from .entity import Entity


class Maker(Entity):
    def __init__(self, _id=None, name=None):
        self.name = name

        super().__init__(_id)

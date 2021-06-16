from .entity import Entity


class Maker(Entity):
    def __init__(self, maker_id=None, maker_name=None):
        self.name = maker_name

        super().__init__(maker_id)

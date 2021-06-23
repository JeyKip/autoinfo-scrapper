from .entity import Entity


class Series(Entity):
    def __init__(self, _id=None, series=None, chassis=None):
        self.series = series
        self.chassis = chassis

        super().__init__(_id)

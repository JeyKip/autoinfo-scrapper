from .entity import Entity


class ModelEngine(Entity):
    def __init__(self, _id=None, model_id=None, submodel_id=None, series_id=None, engine_id=None, year=None):
        self.model_id = model_id
        self.submodel_id = submodel_id
        self.series_id = series_id
        self.engine_id = engine_id
        self.year = year

        super().__init__(_id)

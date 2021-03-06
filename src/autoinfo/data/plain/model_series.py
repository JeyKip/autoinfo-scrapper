from .entity import Entity


class ModelSeries(Entity):
    def __init__(self, _id=None, model_id=None, submodel_id=None, series_id=None, year=None, engines_handled=None):
        self.model_id = model_id
        self.submodel_id = submodel_id
        self.series_id = series_id
        self.year = year
        self.engines_handled = engines_handled

        super().__init__(_id)

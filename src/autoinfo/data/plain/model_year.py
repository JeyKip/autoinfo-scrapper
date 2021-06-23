from autoinfo.data.plain import Entity


class ModelYear(Entity):
    def __init__(self, _id=None, model_id=None, submodel_id=None, year=None, series_handled=None):
        self.model_id = model_id
        self.submodel_id = submodel_id
        self.year = year
        self.series_handled = series_handled

        super().__init__(_id)

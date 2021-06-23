from typing import List, Optional

from mongoengine import Document, IntField, BooleanField, ObjectIdField

from . import MongoBaseStore
from .fields import NullableObjectIdField
from ..abstraction import ModelSeriesStore
from ..plain import ModelSeries


class MongoModelSeries(Document):
    model_id = ObjectIdField(required=True)
    submodel_id = NullableObjectIdField()
    series_id = ObjectIdField(required=True)
    year = IntField(required=True)
    engines_handled = BooleanField(required=True, default=False)

    meta = {
        'db_alias': 'core',
        'collection': 'model_series',
        'indexes': [
            'model_id',
            {'fields': ('model_id', 'submodel_id', 'series_id', 'year'), 'unique': True}
        ]
    }


class MongoModelSeriesStore(ModelSeriesStore, MongoBaseStore):
    doc_type = MongoModelSeries

    def get_all(self) -> List[ModelSeries]:
        return [self.__create_model(x) for x in self.doc_type.objects]

    def find_by_id(self, _id) -> Optional[ModelSeries]:
        return self.__find_single(id=_id)

    def find_by_unique_key(self, model_id, submodel_id, series_id, year):
        return self.__find_single(model_id=model_id, submodel_id=submodel_id, series_id=series_id, year=year)

    def __find_single(self, **kwargs):
        entity = self.doc_type.objects(**kwargs).first()
        model = self.__create_model(entity)

        return model

    # noinspection PyMethodMayBeStatic
    def __create_model(self, entity: MongoModelSeries):
        if not entity:
            return None

        return ModelSeries(
            _id=entity.id, model_id=entity.model_id, submodel_id=entity.submodel_id, series_id=entity.series_id,
            year=entity.year, engines_handled=entity.engines_handled
        )

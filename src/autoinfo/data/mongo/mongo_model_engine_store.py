from typing import List, Optional

from mongoengine import Document, IntField, ObjectIdField

from . import MongoBaseStore
from .fields import NullableObjectIdField
from ..abstraction import ModelEngineStore
from ..plain import ModelEngine


class MongoModelEngine(Document):
    model_id = ObjectIdField(required=True)
    submodel_id = NullableObjectIdField()
    series_id = ObjectIdField(required=True)
    engine_id = ObjectIdField(required=True)
    year = IntField(required=True)

    meta = {
        'db_alias': 'core',
        'collection': 'model_engines',
        'indexes': [
            'model_id',
            {'fields': ('model_id', 'submodel_id', 'series_id', 'engine_id', 'year'), 'unique': True}
        ]
    }


class MongoModelEngineStore(ModelEngineStore, MongoBaseStore):
    doc_type = MongoModelEngine

    def get_all(self) -> List[ModelEngine]:
        return [self.__create_model(x) for x in self.doc_type.objects]

    def find_by_id(self, _id) -> Optional[ModelEngine]:
        return self.__find_single(id=_id)

    def find_by_unique_key(self, model_id, submodel_id, series_id, engine_id, year):
        return self.__find_single(model_id=model_id, submodel_id=submodel_id, series_id=series_id, engine_id=engine_id,
                                  year=year)

    def __find_single(self, **kwargs):
        entity = self.doc_type.objects(**kwargs).first()
        model = self.__create_model(entity)

        return model

    # noinspection PyMethodMayBeStatic
    def __create_model(self, entity: MongoModelEngine):
        if not entity:
            return None

        return ModelEngine(
            _id=entity.id, model_id=entity.model_id, submodel_id=entity.submodel_id, series_id=entity.series_id,
            engine_id=entity.engine_id, year=entity.year)

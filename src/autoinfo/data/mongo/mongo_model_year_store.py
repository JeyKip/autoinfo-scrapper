from typing import List, Optional

from mongoengine import Document, IntField, ObjectIdField, BooleanField

from . import MongoBaseStore
from .fields import NullableObjectIdField
from ..abstraction.model_year_store import ModelYearStore
from ..plain import ModelYear


class MongoModelYear(Document):
    model_id = ObjectIdField(required=True)
    submodel_id = NullableObjectIdField()
    year = IntField(required=True)
    series_handled = BooleanField(required=True, default=False)

    meta = {
        'db_alias': 'core',
        'collection': 'model_years',
        'ordering': ['year'],
        'indexes': [
            'model_id',
            'submodel_id',
            ('model_id', 'submodel_id'),
            {'fields': ('model_id', 'submodel_id', 'year'), 'unique': True}
        ]
    }


class MongoModelYearStore(ModelYearStore, MongoBaseStore):
    doc_type = MongoModelYear

    def get_all(self) -> List[ModelYear]:
        return [self.__create_model(x) for x in self.doc_type.objects]

    def find_by_id(self, _id) -> Optional[ModelYear]:
        return self.__find_single(id=_id)

    def find_by_model_id(self, model_id):
        return [self.__create_model(x) for x in self.doc_type.objects(model_id=model_id)]

    def find_by_submodel_id(self, submodel_id):
        return [self.__create_model(x) for x in self.doc_type.objects(submodel_id=submodel_id)]

    def find_by_model_id_and_submodel_id(self, model_id, submodel_id):
        return [self.__create_model(x) for x in self.doc_type.objects(model_id=model_id, submodel_id=submodel_id)]

    def __find_single(self, **kwargs):
        entity = self.doc_type.objects(**kwargs).first()
        model = self.__create_model(entity)

        return model

    # noinspection PyMethodMayBeStatic
    def __create_model(self, entity: MongoModelYear):
        if not entity:
            return None

        return ModelYear(_id=entity.id, model_id=entity.model_id, submodel_id=entity.submodel_id, year=entity.year,
                         series_handled=entity.series_handled)

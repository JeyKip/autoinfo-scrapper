from typing import List, Optional

from mongoengine import Document, StringField, SortedListField, IntField

from . import MongoBaseStore
from ..abstraction import SubModelStore
from ..plain import SubModel


class MongoSubModel(Document):
    model_id = StringField(required=True)
    name = StringField(required=True, unique_with="model_id")
    years = SortedListField(IntField(), reverse=True)

    meta = {
        'db_alias': 'core',
        'collection': 'submodels',
        'ordering': ['name']
    }


class MongoSubModelStore(SubModelStore, MongoBaseStore):
    doc_type = MongoSubModel

    def get_all(self) -> List[SubModel]:
        return [self.__create_model(x) for x in self.doc_type.objects]

    def find_by_id(self, _id) -> Optional[SubModel]:
        return self.__find_single(id=_id)

    def find_by_model_id(self, model_id):
        return [self.__create_model(x) for x in self.doc_type.objects(model_id=model_id)]

    def __find_single(self, **kwargs):
        entity = self.doc_type.objects(**kwargs).first()
        model = self.__create_model(entity)

        return model

    # noinspection PyMethodMayBeStatic
    def __create_model(self, entity: MongoSubModel):
        if not entity:
            return None

        return SubModel(entity.id, entity.model_id, entity.name, entity.years)

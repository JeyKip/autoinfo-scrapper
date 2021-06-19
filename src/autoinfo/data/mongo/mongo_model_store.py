from typing import List, Optional

from mongoengine import Document, StringField, SortedListField, IntField, ObjectIdField

from . import MongoBaseStore
from ..abstraction import ModelStore
from ..plain import Model


class MongoModel(Document):
    maker_id = ObjectIdField(required=True)
    code = StringField(required=True)
    name = StringField(required=True, unique_with="maker_id")
    script_version = StringField(required=True)
    cookie = StringField(required=True)
    years = SortedListField(IntField(), reverse=True)

    meta = {
        'db_alias': 'core',
        'collection': 'models',
        'ordering': ['name']
    }


class MongoModelStore(ModelStore, MongoBaseStore):
    doc_type = MongoModel

    def get_all(self) -> List[Model]:
        return [self.__create_model(x) for x in self.doc_type.objects]

    def find_by_id(self, _id) -> Optional[Model]:
        entity = self.doc_type.objects(id=_id).first()
        model = self.__create_model(entity)

        return model

    def find_by_maker_id(self, maker_id) -> List[Model]:
        return [self.__create_model(x) for x in self.doc_type.objects(maker_id=maker_id)]

    # noinspection PyMethodMayBeStatic
    def __create_model(self, entity: MongoModel):
        if not entity:
            return None

        return Model(entity.id, entity.maker_id, entity.code, entity.name, entity.script_version, entity.cookie,
                     entity.years)

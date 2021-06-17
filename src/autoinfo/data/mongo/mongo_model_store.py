from typing import List, Optional

from mongoengine import Document, StringField

from . import MongoBaseStore
from ..abstraction import ModelStore
from ..plain import Model


class MongoModel(Document):
    maker_id = StringField(required=True)
    code = StringField(required=True)
    name = StringField(required=True, unique_with="maker_id")

    meta = {
        'db_alias': 'core',
        'collection': 'models',
        'ordering': ['name']
    }


class MongoModelStore(ModelStore, MongoBaseStore):
    doc_type = MongoModel

    def get_all(self) -> List[Model]:
        return [Model(x.id, x.maker_id, x.code, x.name) for x in self.doc_type.objects]

    def find_by_id(self, _id) -> Optional[Model]:
        entity = self.doc_type.objects(id=_id).first()

        if not entity:
            return None

        return Model(entity.id, entity.maker_id, entity.code, entity.name)

    def find_by_maker_id(self, maker_id) -> List[Model]:
        return [Model(x.id, x.maker_id, x.code, x.name) for x in self.doc_type.objects(maker_id=maker_id)]

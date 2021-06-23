from typing import List, Optional

from mongoengine import Document, StringField

from autoinfo.data.abstraction import EngineStore
from . import MongoBaseStore
from ..plain import Engine


class MongoEngine(Document):
    code = StringField(required=True)
    name = StringField(required=True)

    meta = {
        'db_alias': 'core',
        'collection': 'engines',
        'indexes': [
            {'fields': ('code', 'name'), 'unique': True}
        ]
    }


class MongoEngineStore(EngineStore, MongoBaseStore):
    doc_type = MongoEngine

    def get_all(self) -> List[Engine]:
        return [self.__create_model(x) for x in self.doc_type.objects]

    def find_by_id(self, _id) -> Optional[Engine]:
        return self.__find_single(id=_id)

    def find_by_unique_key(self, code, name) -> Engine:
        return self.__find_single(code=code, name=name)

    def __find_single(self, **kwargs):
        entity = self.doc_type.objects(**kwargs).first()
        model = self.__create_model(entity)

        return model

    # noinspection PyMethodMayBeStatic
    def __create_model(self, entity: MongoEngine):
        if not entity:
            return None

        return Engine(_id=entity.id, code=entity.code, name=entity.name)

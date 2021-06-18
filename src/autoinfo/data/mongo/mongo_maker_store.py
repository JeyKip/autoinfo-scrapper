from typing import List, Optional

from mongoengine import Document, StringField

from autoinfo.data.abstraction import MakerStore
from . import MongoBaseStore
from ..plain import Maker


class MongoMaker(Document):
    name = StringField(required=True, unique=True)

    meta = {
        'db_alias': 'core',
        'collection': 'makers',
        'ordering': ['name']
    }


class MongoMakerStore(MakerStore, MongoBaseStore):
    doc_type = MongoMaker

    def get_all(self) -> List[Maker]:
        return [self.__create_model(x) for x in self.doc_type.objects]

    def find_by_id(self, _id) -> Optional[Maker]:
        return self.__find_single(id=_id)

    def find_by_name(self, name):
        return self.__find_single(name=name)

    def __find_single(self, **kwargs):
        entity = self.doc_type.objects(**kwargs).first()
        model = self.__create_model(entity)

        return model

    # noinspection PyMethodMayBeStatic
    def __create_model(self, entity: MongoMaker):
        if not entity:
            return None

        return Maker(entity.id, entity.name)

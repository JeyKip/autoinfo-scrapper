from typing import List, Optional

from mongoengine import Document, StringField, IntField

from autoinfo.data.abstraction import MakerStore
from . import MongoBaseStore
from ..plain import Maker


class MongoMaker(Document):
    name = StringField(required=True, unique=True)
    models_count = IntField(required=True, default=0)
    handled_models_count = IntField(required=True, default=0)

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

    def set_models_count(self, maker_id, models_count: int):
        self.doc_type.objects(id=maker_id).update_one(set__models_count=models_count)

    def change_handled_models_count(self, maker_id, change: int):
        self.doc_type.objects(id=maker_id).update_one(inc__handled_models_count=change)

    def __find_single(self, **kwargs):
        entity = self.doc_type.objects(**kwargs).first()
        model = self.__create_model(entity)

        return model

    # noinspection PyMethodMayBeStatic
    def __create_model(self, entity: MongoMaker):
        if not entity:
            return None

        return Maker(_id=entity.id, name=entity.name, models_count=entity.models_count,
                     handled_models_count=entity.handled_models_count)

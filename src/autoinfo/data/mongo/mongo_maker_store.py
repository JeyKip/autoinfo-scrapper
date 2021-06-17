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
        return [Maker(x.id, x.name) for x in self.doc_type.objects]

    def find_by_id(self, _id) -> Optional[Maker]:
        entity = self.doc_type.objects(id=_id).first()

        if not entity:
            return None

        return Maker(entity.id, entity.name)

    def find_by_name(self, name):
        entity = self.doc_type.objects(name=name).first()

        if not entity:
            return None

        return Maker(entity.id, entity.name)
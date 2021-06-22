from typing import List, Optional

from mongoengine import Document, StringField, IntField, ObjectIdField, BooleanField

from . import MongoBaseStore
from ..abstraction import ModelStore
from ..plain import Model


class MongoModel(Document):
    maker_id = ObjectIdField(required=True)
    code = StringField(required=True)
    name = StringField(required=True, unique_with="maker_id")
    script_version = StringField(required=True)
    cookie = StringField(required=True)
    submodels_handled = BooleanField(required=True, default=False)
    submodels_count = IntField(required=True, default=0)
    years_handled = BooleanField(required=True, default=False)

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

    def turn_on_years_handled_flag(self, model_id):
        self.doc_type.objects(id=model_id).update_one(set__years_handled=True)

    # noinspection PyMethodMayBeStatic
    def __create_model(self, entity: MongoModel):
        if not entity:
            return None

        return Model(
            _id=entity.id, maker_id=entity.maker_id, model_code=entity.code, model_name=entity.name,
            script_version=entity.script_version, cookie=entity.cookie, submodels_handled=entity.submodels_handled,
            submodels_count=entity.submodels_count, years_handled=entity.years_handled
        )

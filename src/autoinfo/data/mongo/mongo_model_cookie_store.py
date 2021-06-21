from mongoengine import Document, StringField

from . import MongoBaseStore
from ..abstraction import ModelCookieStore
from ..plain import ModelCookie


class MongoModelCookie(Document):
    maker_name = StringField(required=True)
    model_name = StringField(required=True, unique_with="maker_name")
    script_version = StringField(required=True)
    cookie = StringField(required=True)

    meta = {
        'db_alias': 'core',
        'collection': 'model_cookies'
    }


class MongoModelCookieStore(ModelCookieStore, MongoBaseStore):
    doc_type = MongoModelCookie

    def find_by_model(self, maker_name, model_name):
        return self.__find_single(maker_name=maker_name, model_name=model_name)

    def get_all(self):
        return [self.__create_model(x) for x in self.doc_type.objects]

    def find_by_id(self, _id):
        return self.__find_single(id=_id)

    def __find_single(self, **kwargs):
        entity = self.doc_type.objects(**kwargs).first()
        model = self.__create_model(entity)

        return model

    # noinspection PyMethodMayBeStatic
    def __create_model(self, entity: MongoModelCookie):
        if not entity:
            return None

        return ModelCookie(entity.id, entity.maker_name, entity.model_name, entity.script_version, entity.cookie)

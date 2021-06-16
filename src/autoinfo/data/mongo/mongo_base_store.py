from abc import ABC
from typing import List, Type

from mongoengine import Document

from autoinfo.data.abstraction import BaseStore
from autoinfo.data.plain import Entity


class MongoBaseStore(BaseStore, ABC):
    doc_type: Type[Document] = None

    def save(self, data):
        if not data:
            return

        if isinstance(data, list):
            self.__save_many(data)
        else:
            self.__save_single(data)

    def __save_many(self, data: List[Entity]):
        if not data or len(data) == 0:
            return

        created = []
        updated = []

        for item in data:
            entity = self.__create_entity(item)

            if not item.id:
                created.append(entity)
            else:
                updated.append(entity)

        if len(created) > 0:
            self.doc_type.objects.insert(created)

        if len(updated) > 0:
            self.doc_type.objects.update(updated)

    def __save_single(self, data: Entity):
        if not data:
            return

        entity = self.__create_entity(data)
        entity.save()

    def __create_entity(self, item):
        return self.doc_type(**vars(item))

from typing import List, Optional

from mongoengine import Document, StringField

from autoinfo.data.abstraction import SeriesStore
from . import MongoBaseStore
from ..plain import Series


class MongoSeries(Document):
    series = StringField(required=True, default="")
    chassis = StringField(required=True, default="")

    meta = {
        'db_alias': 'core',
        'collection': 'series',
        'indexes': [
            {'fields': ('series', 'chassis'), 'unique': True}
        ]
    }


class MongoSeriesStore(SeriesStore, MongoBaseStore):
    doc_type = MongoSeries

    def get_all(self) -> List[Series]:
        return [self.__create_model(x) for x in self.doc_type.objects]

    def find_by_id(self, _id) -> Optional[Series]:
        return self.__find_single(id=_id)

    def find_by_series_and_chassis(self, series, chassis):
        return self.__find_single(series=series, chassis=chassis)

    def __find_single(self, **kwargs):
        entity = self.doc_type.objects(**kwargs).first()
        model = self.__create_model(entity)

        return model

    # noinspection PyMethodMayBeStatic
    def __create_model(self, entity: MongoSeries):
        if not entity:
            return None

        return Series(_id=entity.id, series=entity.series, chassis=entity.chassis)

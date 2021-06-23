from abc import ABC, abstractmethod

from autoinfo.data.abstraction import BaseStore


class ModelSeriesStore(BaseStore, ABC):
    @abstractmethod
    def find_by_unique_key(self, model_id, submodel_id, series_id, year):
        raise NotImplementedError

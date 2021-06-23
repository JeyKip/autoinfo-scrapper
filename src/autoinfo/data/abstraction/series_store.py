from abc import ABC, abstractmethod

from autoinfo.data.abstraction import BaseStore
from autoinfo.data.plain import ModelSeries


class SeriesStore(BaseStore, ABC):
    @abstractmethod
    def find_by_series_and_chassis(self, series, chassis) -> ModelSeries:
        raise NotImplementedError

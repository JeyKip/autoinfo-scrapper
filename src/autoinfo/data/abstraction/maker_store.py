from abc import ABC, abstractmethod

from autoinfo.data.abstraction import BaseStore


class MakerStore(BaseStore, ABC):
    @abstractmethod
    def find_by_name(self, name):
        raise NotImplementedError

    @abstractmethod
    def set_models_count(self, maker_id, models_count: int):
        raise NotImplementedError

    @abstractmethod
    def change_handled_models_count(self, maker_id, change: int):
        raise NotImplementedError

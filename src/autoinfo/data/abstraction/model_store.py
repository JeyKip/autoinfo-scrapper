from abc import ABC, abstractmethod

from autoinfo.data.abstraction import BaseStore


class ModelStore(BaseStore, ABC):
    @abstractmethod
    def find_by_maker_id(self, maker_id):
        raise NotImplementedError

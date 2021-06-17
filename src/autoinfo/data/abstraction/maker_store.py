from abc import ABC, abstractmethod

from autoinfo.data.abstraction import BaseStore


class MakerStore(BaseStore, ABC):
    @abstractmethod
    def find_by_name(self, name):
        raise NotImplementedError

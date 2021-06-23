from abc import ABC, abstractmethod

from autoinfo.data.abstraction import BaseStore
from autoinfo.data.plain import Engine


class EngineStore(BaseStore, ABC):
    @abstractmethod
    def find_by_unique_key(self, code, name) -> Engine:
        raise NotImplementedError

from abc import ABC, abstractmethod

from autoinfo.data.abstraction import BaseStore


class SubModelStore(BaseStore, ABC):
    @abstractmethod
    def find_by_model_id(self, model_id):
        raise NotImplementedError

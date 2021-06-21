from abc import ABC, abstractmethod

from autoinfo.data.abstraction import BaseStore


class ModelCookieStore(BaseStore, ABC):
    @abstractmethod
    def find_by_model(self, maker_name, model_name):
        raise NotImplementedError

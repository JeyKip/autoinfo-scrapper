from abc import ABC, abstractmethod


class BaseStore(ABC):
    @abstractmethod
    def save(self, data):
        raise NotImplementedError

    @abstractmethod
    def get_all(self):
        raise NotImplementedError

    @abstractmethod
    def find_by_id(self, _id):
        raise NotImplementedError

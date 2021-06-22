from abc import ABC, abstractmethod

from autoinfo.data.abstraction import BaseStore


class ModelYearStore(BaseStore, ABC):
    @abstractmethod
    def find_by_model_id(self, model_id):
        raise NotImplementedError

    @abstractmethod
    def find_by_submodel_id(self, submodel_id):
        raise NotImplementedError

    @abstractmethod
    def find_by_model_id_and_submodel_id(self, model_id, submodel_id):
        raise NotImplementedError

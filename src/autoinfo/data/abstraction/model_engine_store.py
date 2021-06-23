from abc import ABC, abstractmethod

from autoinfo.data.abstraction import BaseStore
from autoinfo.data.plain import ModelEngine


class ModelEngineStore(BaseStore, ABC):
    @abstractmethod
    def find_by_unique_key(self, model_id, submodel_id, series_id, engine_id, year) -> ModelEngine:
        raise NotImplementedError

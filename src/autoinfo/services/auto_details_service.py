from typing import List

from autoinfo.data.abstraction import MakerStore, ModelStore
from autoinfo.data.plain import Maker, Entity, Model


class AutoDetailsService:
    def __init__(self, maker_store: MakerStore, models_store: ModelStore):
        self.__maker_store = maker_store
        self.__models_store = models_store

    def save_makers(self, makers: List[Maker]):
        existing_makers = self.__maker_store.get_all()
        makers_to_save = self.__filter_entities_to_save(existing_makers, makers, lambda maker: maker.name)

        self.__maker_store.save(makers_to_save)

    def load_makers(self):
        return self.__maker_store.get_all()

    def save_models(self, maker_name: str, models: List[Model]):
        maker = self.__maker_store.find_by_name(maker_name)
        existing_models = self.__models_store.find_by_maker_id(maker.id)
        models = models or []

        for model in models:
            model.maker_id = maker.id

        models_to_save = self.__filter_entities_to_save(existing_models, models,
                                                        lambda entity: (entity.maker_id, entity.name))

        self.__models_store.save(models_to_save)

    # noinspection PyMethodMayBeStatic
    def __filter_entities_to_save(self, existing_entities: List[Entity], entities_to_save: List[Entity],
                                  unique_key_supplier):
        if not unique_key_supplier or not callable(unique_key_supplier):
            raise ValueError("unique_key_supplier is required and should be a callable object.")

        existing_entities = existing_entities or []
        entities_to_save = entities_to_save or []

        existing_entities_by_id_dict = {}
        existing_entities_by_unique_key_dict = {}

        for entity in existing_entities:
            existing_entities_by_id_dict[entity.id] = entity
            existing_entities_by_unique_key_dict[unique_key_supplier(entity)] = entity

        filtered_entities = []

        for entity in entities_to_save:
            key = unique_key_supplier(entity)

            if entity.id:
                if entity.id in existing_entities_by_id_dict:
                    if key not in existing_entities_by_unique_key_dict:
                        filtered_entities.append(entity)
                    else:
                        existing_entity = existing_entities_by_unique_key_dict[key]
                        if existing_entity.id == entity.id:
                            filtered_entities.append(entity)
            elif key not in existing_entities_by_unique_key_dict:
                filtered_entities.append(entity)

        return filtered_entities

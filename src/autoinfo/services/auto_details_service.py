from collections import defaultdict
from typing import List, Dict

from autoinfo.data.abstraction import MakerStore, ModelStore, SubModelStore, ModelCookieStore
from autoinfo.data.plain import Maker, Entity, Model, SubModel, ModelCookie


class AutoDetailsService:
    def __init__(self, maker_store: MakerStore, models_store: ModelStore, sub_model_store: SubModelStore,
                 model_cookie_store: ModelCookieStore):
        self.__maker_store = maker_store
        self.__models_store = models_store
        self.__sub_model_store = sub_model_store
        self.__model_cookie_store = model_cookie_store

    def save_makers(self, makers: List[Maker]):
        existing_makers = self.__maker_store.get_all()
        makers_to_save = self.__filter_entities_to_save(existing_makers, makers, lambda maker: maker.name)

        self.__maker_store.save(makers_to_save)

    def load_makers(self) -> List[Maker]:
        return self.__maker_store.get_all()

    def load_makers_dict(self) -> Dict[str, Maker]:
        return {maker.id: maker for maker in self.load_makers()}

    def save_models(self, maker_name: str, models: List[Model]):
        maker = self.__maker_store.find_by_name(maker_name)
        existing_models = self.__models_store.find_by_maker_id(maker.id)
        models = models or []

        for model in models:
            model.maker_id = maker.id

        models_to_save = self.__filter_entities_to_save(existing_models, models,
                                                        lambda entity: (entity.maker_id, entity.name))
        new_models_count = len(list(filter(lambda item: not item.id, models_to_save)))

        if len(models_to_save) > 0:
            self.__models_store.save(models_to_save)

        if new_models_count > 0:
            self.__maker_store.change_handled_models_count(maker.id, new_models_count)

    def load_models(self) -> List[Model]:
        return self.__models_store.get_all()

    def load_models_for_maker(self, maker_id):
        return self.__models_store.find_by_maker_id(maker_id)

    def load_models_dict(self) -> Dict[str, Model]:
        return {model.id: model for model in self.load_models()}

    def save_sub_models(self, model_id: str, sub_models: List[SubModel]):
        existing_sub_models = self.__sub_model_store.find_by_model_id(model_id)
        sub_models = sub_models or []

        for sm in sub_models:
            sm.model_id = model_id

        sub_models_to_save = self.__filter_entities_to_save(existing_sub_models, sub_models,
                                                            lambda entity: (entity.model_id, entity.name))

        self.__sub_model_store.save(sub_models_to_save)

    def load_sub_models(self) -> List[SubModel]:
        return self.__sub_model_store.get_all()

    def load_sub_models_by_model_id_dict(self) -> Dict[str, List[SubModel]]:
        result = defaultdict(list)

        for sub in self.load_sub_models():
            result[sub.model_id].append(sub)

        return result

    def save_years(self, model_id: str, sub_model_id: str, years: List[int]):
        if not model_id:
            raise ValueError("model_id is required parameter for save_years method.")

        if sub_model_id:
            sub_model = self.__sub_model_store.find_by_id(sub_model_id)
            sub_model.years = years
            self.__sub_model_store.save(sub_model)

        model = self.__models_store.find_by_id(model_id)
        model.years = set().union(model.years or [], years)
        self.__models_store.save(model)

    def save_model_cookie(self, maker_name, model_name, script_version, cookie):
        existing_cookie = self.__model_cookie_store.find_by_model(maker_name, model_name)

        if existing_cookie:
            existing_cookie.script_version = script_version
            existing_cookie.cookie = cookie

            self.__model_cookie_store.save(existing_cookie)
        else:
            self.__model_cookie_store.save(ModelCookie(
                maker_name=maker_name, model_name=model_name,
                script_version=script_version, cookie=cookie
            ))

    def get_cookie_for_model(self, maker_name, model_name) -> ModelCookie:
        return self.__model_cookie_store.find_by_model(maker_name, model_name)

    def set_maker_models_count(self, maker_id, models_count):
        self.__maker_store.set_models_count(maker_id, models_count)

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

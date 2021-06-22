from collections import defaultdict
from typing import List, Dict

from autoinfo.data.abstraction import MakerStore, ModelStore, SubModelStore, ModelCookieStore, ModelYearStore
from autoinfo.data.plain import Maker, Entity, Model, SubModel, ModelCookie, ModelYear


class AutoDetailsService:
    def __init__(self, maker_store: MakerStore, models_store: ModelStore, submodel_store: SubModelStore,
                 model_cookie_store: ModelCookieStore, model_year_store: ModelYearStore):
        self.__maker_store = maker_store
        self.__models_store = models_store
        self.__submodel_store = submodel_store
        self.__model_cookie_store = model_cookie_store
        self.__model_year_store = model_year_store

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

        if models_to_save:
            self.__models_store.save(models_to_save)

        if new_models_count:
            self.__maker_store.change_handled_models_count(maker.id, new_models_count)

    def load_models(self) -> List[Model]:
        return self.__models_store.get_all()

    def load_models_for_maker(self, maker_id):
        return self.__models_store.find_by_maker_id(maker_id)

    def load_models_dict(self) -> Dict[str, Model]:
        return {model.id: model for model in self.load_models()}

    def save_submodels(self, model_id: str, submodels: List[SubModel]):
        model = self.__models_store.find_by_id(model_id)
        existing_submodels = self.__submodel_store.find_by_model_id(model_id)
        submodels = submodels or []

        for sm in submodels:
            sm.model_id = model_id

        submodels_to_save = self.__filter_entities_to_save(existing_submodels, submodels,
                                                           lambda entity: (entity.model_id, entity.name))

        model.submodels_handled = True
        model.submodels_count = len(submodels_to_save)

        self.__submodel_store.save(submodels_to_save)
        self.__models_store.save(model)

    def load_submodels(self) -> List[SubModel]:
        return self.__submodel_store.get_all()

    def load_submodels_by_model_id_dict(self) -> Dict[str, List[SubModel]]:
        result = defaultdict(list)

        for sub in self.load_submodels():
            result[sub.model_id].append(sub)

        return result

    def save_years(self, model_id: str, submodel_id: str, years: List[int]):
        if not model_id:
            raise ValueError("model_id is required parameter for save_years method.")

        if not years:
            return

        existing_model_years = self.load_years(model_id, submodel_id)
        model_years = [ModelYear(model_id=model_id, submodel_id=submodel_id, year=year) for year in years]
        model_years_to_save = self.__filter_entities_to_save(
            existing_model_years, model_years,
            lambda entity: (entity.model_id, entity.submodel_id, entity.year)
        )

        if model_years_to_save:
            self.__model_year_store.save(model_years_to_save)

        if submodel_id:
            self.__submodel_store.turn_on_years_handled_flag(submodel_id)
        else:
            self.__models_store.turn_on_years_handled_flag(model_id)

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

    def load_years(self, model_id, submodel_id):
        if not model_id:
            raise ValueError("model_id is required parameter.")

        if not submodel_id:
            return self.__model_year_store.find_by_model_id(model_id)
        else:
            return self.__model_year_store.find_by_model_id_and_submodel_id(model_id, submodel_id)

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

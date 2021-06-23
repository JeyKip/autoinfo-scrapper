from collections import defaultdict
from typing import List, Dict

from autoinfo.data.abstraction import MakerStore, ModelStore, SubModelStore, ModelCookieStore, ModelYearStore, \
    SeriesStore, ModelSeriesStore, EngineStore, ModelEngineStore
from autoinfo.data.plain import Maker, Entity, Model, SubModel, ModelCookie, ModelYear, Series, ModelSeries, Engine, \
    ModelEngine
from autoinfo.decoders import HexDecoder


class AutoDetailsService:
    def __init__(self, maker_store: MakerStore, models_store: ModelStore, submodel_store: SubModelStore,
                 model_cookie_store: ModelCookieStore, model_year_store: ModelYearStore, series_store: SeriesStore,
                 model_series_store: ModelSeriesStore, engine_store: EngineStore, model_engine_store: ModelEngineStore):
        self.__maker_store = maker_store
        self.__models_store = models_store
        self.__submodel_store = submodel_store
        self.__model_cookie_store = model_cookie_store
        self.__model_year_store = model_year_store
        self.__series_store = series_store
        self.__model_series_store = model_series_store
        self.__engine_store = engine_store
        self.__model_engine_store = model_engine_store
        self.__hex_decoder = HexDecoder()

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

    def load_submodels_dict(self) -> Dict[str, SubModel]:
        return {sub.id: sub for sub in self.__submodel_store.get_all()}

    def load_submodels_by_model_id_dict(self) -> Dict[str, List[SubModel]]:
        result = defaultdict(list)

        for sub in self.load_submodels():
            result[sub.model_id].append(sub)

        return result

    def get_submodel_properties_or_default(self, submodel: SubModel = None):
        if submodel:
            return submodel.id, submodel.code
        else:
            return None, self.__hex_decoder.convert_to_hex_string("ALL")

    def save_years(self, model_id: str, submodel_id: str, years: List[int]):
        if not model_id:
            raise ValueError("model_id is required parameter for save_years method.")

        existing_model_years = self.load_years_for_model(model_id, submodel_id)
        model_years = [ModelYear(model_id=model_id, submodel_id=submodel_id, year=year) for year in years or []]
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

    def load_years(self) -> List[ModelYear]:
        return self.__model_year_store.get_all()

    def load_years_for_model(self, model_id, submodel_id):
        if not model_id:
            raise ValueError("model_id is required parameter.")

        if not submodel_id:
            return self.__model_year_store.find_by_model_id(model_id)
        else:
            return self.__model_year_store.find_by_model_id_and_submodel_id(model_id, submodel_id)

    def save_series(self, model_id, submodel_id, year_id, series_list: List[Series]):
        if not model_id:
            raise ValueError("model_id is required parameter.")

        if not year_id:
            raise ValueError("year_id is required parameter.")

        self.__save_series(series_list)
        self.__save_model_series(model_id, submodel_id, year_id, series_list)

    def __save_series(self, series_list: List[Series]):
        series_to_save = [item for item in series_list if
                          not self.__series_store.find_by_series_and_chassis(item.series, item.chassis)]

        if series_to_save:
            self.__series_store.save(series_to_save)

    def __save_model_series(self, model_id, submodel_id, year_id, series_list: List[Series]):
        model_year = self.__model_year_store.find_by_id(year_id)
        model_series_to_save = []

        for series in series_list:
            series_entity = self.__series_store.find_by_series_and_chassis(series.series, series.chassis)
            model_series_entity = self.__model_series_store.find_by_unique_key(model_id, submodel_id, series_entity.id,
                                                                               model_year.year)

            if not model_series_entity:
                model_series = ModelSeries(model_id=model_id, submodel_id=submodel_id, series_id=series_entity.id,
                                           year=model_year.year)
                model_series_to_save.append(model_series)

        if model_series_to_save:
            self.__model_series_store.save(model_series_to_save)

        model_year.series_handled = True
        self.__model_year_store.save(model_year)

    def load_series(self) -> List[Series]:
        return self.__series_store.get_all()

    def load_series_dict(self) -> Dict[str, Series]:
        return {item.id: item for item in self.load_series()}

    def load_model_series(self) -> List[ModelSeries]:
        return self.__model_series_store.get_all()

    def save_engines(self, model_id, submodel_id, year, model_series_id, engines_list: List[Engine]):
        if not model_id:
            raise ValueError("model_id is required parameter.")

        if not year:
            raise ValueError("year is required parameter.")

        if not model_series_id:
            raise ValueError("series_id is required parameter.")

        self.__save_engines(engines_list)
        self.__save_model_engines(model_id, submodel_id, year, model_series_id, engines_list)

    def __save_engines(self, engines_list: List[Engine]):
        engines_to_save = [item for item in engines_list if
                           not self.__engine_store.find_by_unique_key(item.code, item.name)]

        if engines_to_save:
            self.__engine_store.save(engines_to_save)

    def __save_model_engines(self, model_id, submodel_id, year, model_series_id, engines_list: List[Engine]):
        model_series = self.__model_series_store.find_by_id(model_series_id)
        model_engines_to_save = []

        for engine in engines_list:
            engine_entity = self.__engine_store.find_by_unique_key(engine.code, engine.name)
            model_engine_entity = self.__model_engine_store.find_by_unique_key(
                model_id, submodel_id, model_series.series_id, engine_entity.id, year
            )

            if not model_engine_entity:
                model_engine = ModelEngine(
                    model_id=model_id, submodel_id=submodel_id, series_id=model_series.series_id,
                    engine_id=engine_entity.id, year=year
                )
                model_engines_to_save.append(model_engine)

        if model_engines_to_save:
            self.__model_engine_store.save(model_engines_to_save)

        model_series.engines_handled = True
        self.__model_series_store.save(model_series)

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

from autoinfo.services import AutoDetailsService
from scrapper.scrapper.items import MakersListItem, ModelsListItem, SubModelsListItem, YearsListItem, \
    MakerModelsCountItem, SeriesListItem, EnginesListItem


class SaveItemToDatabasePipeline:
    def __init__(self, auto_details_service: AutoDetailsService):
        self.__auto_details_service = auto_details_service
        self.__handlers = {
            MakersListItem.__name__: self.__handle_makers_list_item,
            ModelsListItem.__name__: self.__handle_models_list_item,
            SubModelsListItem.__name__: self.__handle_submodels_list_item,
            YearsListItem.__name__: self.__handle_years_list_item,
            MakerModelsCountItem.__name__: self.__set_maker_models_count,
            SeriesListItem.__name__: self.__handle_series_list_item,
            EnginesListItem.__name__: self.__handle_engines_list_item,
        }

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            auto_details_service=crawler.settings.get('AUTO_DETAILS_SERVICE')
        )

    def process_item(self, item, spider):
        cls_name = item.__class__.__name__

        if cls_name in self.__handlers:
            self.__handlers[cls_name](item)

    def __handle_makers_list_item(self, item):
        self.__auto_details_service.save_makers(item["makers"])

    def __handle_models_list_item(self, item):
        self.__auto_details_service.save_models(item["maker_name"], item["models"])

    def __handle_submodels_list_item(self, item):
        self.__auto_details_service.save_submodels(item["model_id"], item["submodels"])

    def __handle_years_list_item(self, item):
        self.__auto_details_service.save_years(item["model_id"], item["submodel_id"], item["years"])

    def __set_maker_models_count(self, item):
        self.__auto_details_service.set_maker_models_count(item["maker_id"], item["models_count"])

    def __handle_series_list_item(self, item):
        self.__auto_details_service.save_series(item["model_id"], item["submodel_id"], item["year_id"], item["series"])

    def __handle_engines_list_item(self, item):
        self.__auto_details_service.save_engines(item["model_id"], item["submodel_id"], item["year"],
                                                 item["model_series_id"], item["engines"])

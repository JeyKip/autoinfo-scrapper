from autoinfo.services import AutoDetailsService
from scrapper.scrapper.items import MakersListItem


class SaveItemToDatabasePipeline:
    def __init__(self, auto_details_service: AutoDetailsService):
        self.__auto_details_service = auto_details_service

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            auto_details_service=crawler.settings.get('AUTO_DETAILS_SERVICE')
        )

    def process_item(self, item, spider):
        self.__handle_makers_list_item(item)

    def __handle_makers_list_item(self, item):
        if isinstance(item, MakersListItem):
            self.__auto_details_service.save_makers(item["makers"])

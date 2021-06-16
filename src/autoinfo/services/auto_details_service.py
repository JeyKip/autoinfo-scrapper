from typing import List

from autoinfo.data.abstraction import MakerStore
from autoinfo.data.plain import Maker


class AutoDetailsService:
    def __init__(self, maker_store: MakerStore):
        self.__maker_store = maker_store

    def save_makers(self, makers: List[Maker]):
        makers_to_save = []
        existing_makers = self.__maker_store.get_all()

        existing_makers_by_id_dict = {}
        existing_makers_by_name_dict = {}

        for maker in existing_makers:
            existing_makers_by_id_dict[maker.id] = maker
            existing_makers_by_name_dict[maker.name] = maker

        for maker in makers:
            if maker.id:
                if maker.id in existing_makers_by_id_dict:
                    if maker.name not in existing_makers_by_name_dict:
                        makers_to_save.append(maker)
                    else:
                        existing_maker = existing_makers_by_name_dict[maker.name]
                        if existing_maker.id == maker.id:
                            makers_to_save.append(maker)
            elif maker.name not in existing_makers_by_name_dict:
                makers_to_save.append(maker)

        self.__maker_store.save(makers_to_save)

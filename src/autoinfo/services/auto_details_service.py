from autoinfo.data.abstraction import MakerStore


class AutoDetailsService:
    def __init__(self, maker_store: MakerStore):
        self.__maker_store = maker_store

from scrapy import Item, Field


class MakerModelsCountItem(Item):
    maker_id = Field()
    models_count = Field()

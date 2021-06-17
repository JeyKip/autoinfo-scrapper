from scrapy import Item, Field


class ModelsListItem(Item):
    maker_name = Field()
    models = Field()

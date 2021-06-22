from scrapy import Item, Field


class SubModelsListItem(Item):
    model_id = Field()
    submodels = Field()

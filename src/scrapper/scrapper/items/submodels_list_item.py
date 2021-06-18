from scrapy import Item, Field


class SubModelsListItem(Item):
    model_id = Field()
    sub_models = Field()

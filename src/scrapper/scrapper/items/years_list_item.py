from scrapy import Item, Field


class YearsListItem(Item):
    model_id = Field()
    submodel_id = Field()
    years = Field()

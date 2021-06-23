from scrapy import Item, Field


class EnginesListItem(Item):
    model_id = Field()
    submodel_id = Field()
    year = Field()
    model_series_id = Field()
    engines = Field()

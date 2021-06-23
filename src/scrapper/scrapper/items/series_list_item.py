from scrapy import Item, Field


class SeriesListItem(Item):
    model_id = Field()
    submodel_id = Field()
    year_id = Field()
    series = Field()

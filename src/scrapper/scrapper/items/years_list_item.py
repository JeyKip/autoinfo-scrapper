from scrapy import Item, Field


class YearsListItem(Item):
    model_id = Field()
    sub_model_id = Field()
    years = Field()

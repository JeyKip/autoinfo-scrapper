from scrapy import Item, Field


class MakersListItem(Item):
    makers = Field()

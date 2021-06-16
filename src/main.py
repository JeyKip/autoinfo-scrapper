if __name__ == "__main__":
    from scrapy.crawler import CrawlerProcess
    from scrapy.utils.project import get_project_settings
    from dotenv import dotenv_values
    from autoinfo.cookie import CookieProvider
    from autoinfo.utils import get_value_safely
    from autoinfo.data.mongo import MongoConnector, MongoMakerStore
    from autoinfo.services import AutoDetailsService
    from scrapper.scrapper.spiders import AutoInfoSpider

    config = dotenv_values(".env")

    MongoConnector.setup(
        get_value_safely("MONGO_AUTH_USERNAME", config),
        get_value_safely("MONGO_AUTH_PASSWORD", config),
        get_value_safely("MONGO_HOST", config),
        get_value_safely("MONGO_PORT", config, int),
        get_value_safely("MONGO_AUTH_DATABASE", config)
    )

    # create concrete stores
    maker_store = MongoMakerStore()

    # create services
    auto_details_service = AutoDetailsService(maker_store)

    # create utils classes
    cookie_provider = CookieProvider()

    # run spiders
    settings = get_project_settings()
    process = CrawlerProcess(settings)
    process.crawl(AutoInfoSpider, auto_details_service, cookie_provider,
                  "https://online.autoinfo.com.au/oscar/Aut01nf0iiqq4/a")
    process.start()

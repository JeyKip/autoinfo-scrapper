import os

from dotenv import dotenv_values
from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings

from autoinfo.cookie import CookieProvider
from autoinfo.data.mongo import MongoConnector, MongoConnectionSettings, MongoMakerStore
from autoinfo.services import AutoDetailsService
from autoinfo.utils import get_value_safely
from scrapper.scrapper.spiders import AutoInfoSpider


def start_scrapping():
    with MongoConnector() as connector:
        config = dotenv_values(".env")
        settings = [
            MongoConnectionSettings(
                "core", "core",
                get_value_safely("MONGO_AUTH_USERNAME", config),
                get_value_safely("MONGO_AUTH_PASSWORD", config),
                get_value_safely("MONGO_HOST", config),
                get_value_safely("MONGO_PORT", config, int),
                get_value_safely("MONGO_AUTH_DATABASE", config)
            )
        ]
        connector.create_connections(settings)

        # create concrete stores
        maker_store = MongoMakerStore()

        # create services
        auto_details_service = AutoDetailsService(maker_store)

        # create utils classes
        cookie_provider = CookieProvider()

        # run spiders
        process = create_crawler_process(auto_details_service)
        process.crawl(AutoInfoSpider, auto_details_service, cookie_provider,
                      "https://online.autoinfo.com.au/oscar/Aut01nf0iiqq4/a")
        process.start()


def create_crawler_process(auto_details_service):
    # we need to specify a custom module name where to take overridden settings from
    os.environ.setdefault('SCRAPY_SETTINGS_MODULE', "scrapper.scrapper.settings")
    settings = get_project_settings()

    # we need to extend settings with passing custom objects to be able to inject them into pipelines
    settings.set("AUTO_DETAILS_SERVICE", auto_details_service)
    process = CrawlerProcess(settings)

    return process


if __name__ == "__main__":
    start_scrapping()

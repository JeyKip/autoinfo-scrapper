import os

from dotenv import dotenv_values
from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings
from twisted.internet.defer import inlineCallbacks

from autoinfo.cookie import CookieProvider
from autoinfo.data.mongo import MongoConnector, MongoConnectionSettings, MongoMakerStore, MongoModelStore, \
    MongoSubModelStore
from autoinfo.services import AutoDetailsService
from autoinfo.utils import get_value_safely
from scrapper.scrapper.spiders import AutoInfoSubModelsSpider, AutoInfoMakersSpider, AutoInfoModelsSpider, \
    AutoInfoYearsSpider


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
        models_store = MongoModelStore()
        sub_models_store = MongoSubModelStore()

        # create services
        auto_details_service = AutoDetailsService(maker_store, models_store, sub_models_store)

        # create utils classes
        cookie_provider = CookieProvider()

        process = create_crawler_process(auto_details_service)

        # We should run all these spiders consequently because:
        # 1) Each of them depends on the results of running previous one
        # 2) It also gives us flexibility to run only some particular spiders to crawl only required information.
        # Since lists of makers, models and years are changed rarely we don't need to load them every time
        # we run this scrapper. So we can make some sort of tasks which can be stored in a database and run spiders
        # based on them. Or we just can comment out some of them at some time and run only required one to update
        # only information which we need to update right now.

        @inlineCallbacks
        def run_spiders():
            base_api_url = "https://online.autoinfo.com.au/oscar/Aut01nf0iiqq4/a"
            yield process.crawl(AutoInfoMakersSpider, auto_details_service, cookie_provider, base_api_url)
            yield process.crawl(AutoInfoModelsSpider, auto_details_service, cookie_provider, base_api_url)
            yield process.crawl(AutoInfoSubModelsSpider, auto_details_service, base_api_url)
            yield process.crawl(AutoInfoYearsSpider, auto_details_service, base_api_url)

        run_spiders()
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

from mongoengine import connect


class MongoConnector:
    @staticmethod
    def setup(username=None, password=None, host="localhost", port=27017, auth_db="admin"):
        connect(
            alias="core",
            db="core",
            username=username,
            password=password,
            host=host,
            port=port,
            authentication_source=auth_db
        )

from typing import List

from mongoengine import connect


class MongoConnectionSettings:
    def __init__(self, alias, db, username=None, password=None, host="localhost", port=27017, auth_db="admin"):
        self.__alias = alias
        self.__db = db
        self.__username = username
        self.__password = password
        self.__host = host
        self.__port = port
        self.__auth_db = auth_db

    @property
    def alias(self):
        return self.__alias

    @property
    def db(self):
        return self.__db

    @property
    def username(self):
        return self.__username

    @property
    def password(self):
        return self.__password

    @property
    def host(self):
        return self.__host

    @property
    def port(self):
        return self.__port

    @property
    def auth_db(self):
        return self.__auth_db


class MongoConnector:
    def __init__(self):
        self.__connections = {}

    def create_connections(self, settings: List[MongoConnectionSettings]):
        self.__connections = {item.alias: connect(
            alias=item.alias,
            db=item.db,
            username=item.username,
            password=item.password,
            host=item.host,
            port=item.port,
            authentication_source=item.auth_db
        ) for item in settings}

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.close_connections()

    def close_connections(self):
        for connection in self.__connections.values():
            connection.close()

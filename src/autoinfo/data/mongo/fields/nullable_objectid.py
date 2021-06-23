from mongoengine import ObjectIdField


class NullableObjectIdField(ObjectIdField):
    def __init__(self, **kwargs):
        super().__init__(null=True, **kwargs)

    def to_mongo(self, value):
        if value is None:
            return None

        return super().to_mongo(value)

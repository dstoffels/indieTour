from django.db.models import Model, CharField, CASCADE, ForeignKey
from authentication.models import User

class Contact(Model):
  user_id = ForeignKey(User, on_delete=CASCADE)
  name = CharField(max_length=255)
  phone = CharField(max_length=255)
  email = CharField(max_length=255)


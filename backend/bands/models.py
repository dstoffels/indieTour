from django.db.models import CASCADE, CharField,ForeignKey, Model, ManyToManyField
from authentication.models import User

class Band(Model):
  name = CharField(max_length=255)
  owner = ForeignKey(User, on_delete=CASCADE)
  admins = ManyToManyField(User, related_name='band_admin')

# class BandAdmin(Model):
#   band = ForeignKey(Band, on_delete=CASCADE)
#   user= ForeignKey(User, on_delete=CASCADE)

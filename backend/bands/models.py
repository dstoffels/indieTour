import uuid
from django.db.models import CASCADE, CharField,ForeignKey, Model, ManyToManyField, BooleanField, UUIDField
from authentication.models import User
from django.contrib import admin

#BAND MODEL
class Band(Model):
  id = UUIDField(primary_key=True, default= uuid.uuid4, editable=False)
  name = CharField(max_length=255, unique=True)
  users = ManyToManyField(User, through='BandUser', related_name='band_users')
  is_archived = BooleanField(default=False)
  owner = ForeignKey(User, on_delete=CASCADE)

  def __str__(self) -> str:
    return self.name


#BANDUSER MODEL
class BandUser(Model):
  id = UUIDField(primary_key=True, default= uuid.uuid4, editable=False)
  band = ForeignKey(Band, on_delete=CASCADE)
  user = ForeignKey(User, on_delete=CASCADE)
  is_admin = BooleanField(default=False)

  def __str__(self) -> str:
    return f'{self.user.email} ({self.band})'

# ADMIN
class BandUserInline(admin.TabularInline):
  model = BandUser
  extra = 1

class BandAdmin(admin.ModelAdmin):
  inlines = [BandUserInline]
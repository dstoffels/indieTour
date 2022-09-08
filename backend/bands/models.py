from django.db.models import CASCADE, CharField,ForeignKey, Model, ManyToManyField, BooleanField
from authentication.models import User
from django.contrib import admin

class Band(Model):
  name = CharField(max_length=255, unique=True)
  users = ManyToManyField(User, through='BandUser')
  is_archived = BooleanField(default=False)

  def __str__(self) -> str:
    return self.name

class BandUser(Model):
  band = ForeignKey(Band, on_delete=CASCADE)
  user = ForeignKey(User, on_delete=CASCADE)
  is_admin = BooleanField(default=False)
  is_owner = BooleanField(default=False)

  def __str__(self) -> str:
    return f'{self.user.email} ({self.band})'

class BandUserInline(admin.TabularInline):
  model = BandUser
  extra = 1

class BandAdmin(admin.ModelAdmin):
  inlines = [BandUserInline]
from rest_framework import serializers
from authentication.models import User
from bands.models import BandUser

# BANDUSER SERIALIZER
class BandUserSerializer(serializers.ModelSerializer):
  @staticmethod
  def create_or_update(users, band_id):
      band_users = []
      for band_user_data in users:
        user, created = User.objects.get_or_create(email=band_user_data['email'])
        band_user, created = BandUser.objects.get_or_create(user=user, band_id = band_id)
        band_user.is_admin = band_user_data['is_admin']
        band_user.save()
        band_users.append(band_user)
      return band_users

  class Meta:
    model = BandUser
    fields = ['id', 'username', 'email', 'is_admin', 'banduser_id']

  id = serializers.SerializerMethodField()
  def get_id(self, band_user):
     return band_user.user.id

  email = serializers.SerializerMethodField()
  def get_email(self, band_user):
    return band_user.user.email

  username = serializers.SerializerMethodField()
  def get_username(self, band_user):
    return band_user.user.username
  
  banduser_id = serializers.SerializerMethodField()
  def get_banduser_id(self, band_user):
    return band_user.id
from rest_framework import serializers
from authentication.models import User
from bands.models import BandUser

# BANDUSER SERIALIZER
class  BandUserSerializer(serializers.ModelSerializer):
  def init_users(users, band_id):
     for user in users:
        user, created = User.objects.get_or_create(email=user['email'])
        BandUser.objects.create(band_id=band_id, user=user)

  class Meta:
    model = BandUser
    fields = ['id', 'username', 'email', 'is_admin']

  id = serializers.SerializerMethodField()
  def get_id(self, band_user):
     return band_user.user.id

  email = serializers.SerializerMethodField()
  def get_email(self, band_user):
    return band_user.user.email

  username = serializers.SerializerMethodField()
  def get_username(self, band_user):
    return band_user.user.username
  
  
  # def create(self, validated_data):
  #   # need to create new users if they don't exist
  #   self.get_or_create_user(validated_data)
  #   return super().create(validated_data)
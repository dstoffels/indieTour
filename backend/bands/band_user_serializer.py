from rest_framework import serializers
from authentication.models import User
from bands.models import BandUser
from django.core.mail import send_mail
from django.conf import settings

# BANDUSER SERIALIZER
class BandUserSerializer(serializers.ModelSerializer):
  @staticmethod
  def create_or_update(users, band_id):
      band_users = []
      for band_user_data in users:
        user, user_created = User.objects.get_or_create(email=band_user_data['email'])
        banduser, banduser_created = BandUser.objects.get_or_create(user=user, band_id = band_id)

        # send email to new user
        if user_created:
          BandUserSerializer.send_new_user_email(banduser)
          
        banduser.is_admin = band_user_data['is_admin']
        banduser.save()
        band_users.append(banduser)
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
  
  @staticmethod
  def send_new_user_email(banduser: BandUser):
        subject = f'You have been invited to join {banduser.band.name}!'
        message = f'''Please follow this link to setup your account:
http://localhost:3000/user/{banduser.user.id}
'''
        email_from = settings.EMAIL_HOST_USER
        recipients = [banduser.user.email]
        send_mail( subject, message, email_from, recipients)
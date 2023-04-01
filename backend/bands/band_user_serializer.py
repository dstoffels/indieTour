from rest_framework import serializers
from authentication.serializers import User, UserSerializer
from bands.models import BandUser
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.response import Response
from rest_framework import status


# BANDUSER SERIALIZER
class BandUserSerializer(serializers.ModelSerializer):
    banduser_id = serializers.CharField(source="id")
    user_id = serializers.CharField(source="user.id")
    email = serializers.CharField(source="user.email")
    username = serializers.CharField(source="user.username")

    class Meta:
        model = BandUser
        fields = ("banduser_id", "user_id", "email", "is_admin", "username")

    @staticmethod
    def create_or_update(req, band_id):

        user, user_created = User.objects.get_or_create(email=req.data["email"])
        banduser, banduser_created = BandUser.objects.get_or_create(user=user, band_id=band_id)

        # send email to new user
        if user_created:
            BandUserSerializer.send_new_user_email(banduser)

        banduser.save()
        return banduser

    @staticmethod
    def send_new_user_email(banduser: BandUser):
        subject = f"You have been invited to join {banduser.band.name}!"
        message = f"""Please follow this link to setup your account:
http://localhost:3000/user/{banduser.user.id}
"""
        email_from = settings.EMAIL_HOST_USER
        recipients = [banduser.user.email]
        send_mail(subject, message, email_from, recipients)

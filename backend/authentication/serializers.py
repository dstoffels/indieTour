from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.password_validation import validate_password
from .models import User


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user: User):
        token = super().get_token(user)
        # for any additional fields you'd like to add to the JWT sent back in response
        # add below using the token["field name"] = user.name_of_property
        # token["is_student"] = user.is_student

        token["username"] = user.username
        token["email"] = user.email
        token["is_active"] = user.is_active
        token["active_band_id"] = str(user.active_band.id)
        token["active_tour_id"] = str(user.active_tour.id)

        return token


class RegistrationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])

    class Meta:
        model = User
        # If added new columns through the User model, add them in the fields
        # list as seen below
        fields = (
            "username",
            "password",
            "email",
            "first_name",
            "last_name",
        )

    def create(self, validated_data):

        user = User.objects.create(
            username=validated_data["username"],
            email=validated_data["email"],
            # If added new columns through the User model, add them in this
            # create method. Example below:
            # is_student=validated_data['is_student']
        )
        user.set_password(validated_data["password"])
        user.save()

        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "last_login"]

from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view, permission_classes
from .serializers import MyTokenObtainPairSerializer, RegistrationSerializer, UserSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from constants import *
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User
# User = get_user_model()


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer

    def post(self, request, *args, **kwargs):
        subject = 'Welcome to indietour!'
        message = f"Hello {request.data['username']}, thank you for signing up for indietour."
        email_from = settings.EMAIL_HOST_USER
        recipients = [request.data['email']]
        send_mail( subject, message, email_from, recipients)
        return super().post(request, *args, **kwargs)

@api_view([GET])
def all_users(req):
    users = User.objects.all()
    return Response(UserSerializer(users, many=True).data)

@api_view([GET])
def new_user(req, uid):
    user = get_object_or_404(User, id=uid)
    if user.password:
        return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
    refresh = RefreshToken.for_user(user)
    return Response(str(refresh.access_token), status=status.HTTP_200_OK)

@api_view([PATCH])
@permission_classes([IsAuthenticated])
def update_user(req):
    user = get_object_or_404(User, id=req.user.id)
    if req.data.get('password', False) and not user.password:
        user.set_password(req.data['password'])
        user.save()
        
    if req.data.get('old_pw', False):
        old_pw = req.data['old_pw']
        new_pw = req.data['new_pw']
        if user.check_password(old_pw):
            user.set_password(new_pw)
        else:
            return Response({"password": "Incorrect password."}, status=status.HTTP_401_UNAUTHORIZED)
    ser = UserSerializer(user, data=req.data, partial=True)
    ser.is_valid(raise_exception=True)
    ser.save()
    return Response(user.email, status=status.HTTP_202_ACCEPTED)
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
User = get_user_model()


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

@api_view([POST])
@permission_classes([IsAuthenticated])
def update_password(req):
    user = get_object_or_404(User, id=req.user.id)
    old_pw = req.data['old_pw']
    new_pw = req.data['new_pw']
    if user.check_password(old_pw):
        user.set_password(new_pw)
        user.save()
        return Response(status=status.HTTP_202_ACCEPTED)
    else:
        return Response({"password": "Password incorrect."}, status=status.HTTP_401_UNAUTHORIZED)
    

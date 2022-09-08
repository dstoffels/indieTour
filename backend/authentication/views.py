from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from constants import *
from .serializers import MyTokenObtainPairSerializer, RegistrationSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.http import HttpRequest


User = get_user_model()


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer

class ChangeActiveBandView(TokenRefreshView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = [JWTAuthentication]
    def post(self, request, id):
        user = User.objects.get(id=request.user.id)
        user.active_band_id=id
        user.save()
        serializer = MyTokenObtainPairSerializer(user)
        token = serializer.get_token(user)
        req = HttpRequest()
        req.__setattr__('data', {"refresh": str(token)})

        return super().post(req)

class ChangeActiveTourView(TokenRefreshView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = [JWTAuthentication]
    def post(self, request, id):
        user = User.objects.get(id=request.user.id)
        user.active_tour_id=id
        user.save()
        serializer = MyTokenObtainPairSerializer(user)
        token = serializer.get_token(user)
        req = HttpRequest()
        req.__setattr__('data', {"refresh": str(token)})

        return super().post(req)

        




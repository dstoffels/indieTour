from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from constants import *
from .serializers import MyTokenObtainPairSerializer, RegistrationSerializer, UserSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated, AllowAny
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

class EditUserView(TokenRefreshView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = [JWTAuthentication]

    def post(self, request):
        user = get_object_or_404(User, id=request.user.id)
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            token = MyTokenObtainPairSerializer.get_token(user)
            request = HttpRequest()
            request.__setattr__('data', {"refresh": str(token)})
        return super().post(request)

        




from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from constants import *
from .serializers import MyTokenObtainPairSerializer, RegistrationSerializer, UserSerializer, UserSettingsSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.http import HttpRequest
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from bands.permissions import IsBandUser
from tours.tours.permissions import IsTourUser

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


@api_view([GET, PUT])
@permission_classes([IsAuthenticated])
def user_settings(request):
    user = get_object_or_404(User, id=request.user.id)
    if request.method == GET:
        serializer = UserSettingsSerializer(user)
        return Response(data=serializer.data, status=status.HTTP_200_OK)    
    if request.method == PUT:
        serializer = UserSettingsSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)






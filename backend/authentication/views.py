from django.contrib.auth import get_user_model
from default_views import patch_view
from constants import *
from .serializers import MyTokenObtainPairSerializer, RegistrationSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

User = get_user_model()


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer

@api_view([PATCH])
@permission_classes([IsAuthenticated])
def update_user(request):
    user = User.objects.get(id=request.user.id)
    if request.method == PATCH:
        return patch_view(request, user, RegistrationSerializer)




from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import EditUserView, RegisterView, MyTokenObtainPairView

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
    path('user/', EditUserView.as_view(), name='edit_user')
]

from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import ChangeActiveBandView, ChangeActiveTourView, RegisterView, MyTokenObtainPairView

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
    path('active/band/<int:id>/', ChangeActiveBandView.as_view(), name='change_active_band'),
    path('active/tour/<int:id>/', ChangeActiveTourView.as_view(), name='change_active_tour')
]

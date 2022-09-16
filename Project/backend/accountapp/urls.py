from django.urls import path, include
from .views import RegistrationAPIView


urlpatterns = [
    path('signup', RegistrationAPIView.as_view()),
]
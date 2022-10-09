from django.urls import path, include
from .views import RegistrationAPIView, LoginAPIView, UserRetrieveUpdateAPIView, UserView, ProfileAPIView


urlpatterns = [
    path('signup', RegistrationAPIView.as_view()),
    path('login', LoginAPIView.as_view()),
    path('current', UserRetrieveUpdateAPIView.as_view()),
    path('profile', ProfileAPIView.as_view()), # 나중에 뒤에 /유저닉네임 붙일거임
    path('isauthenticated', UserView.as_view()),
]
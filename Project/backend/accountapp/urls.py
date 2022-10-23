from django.urls import path, include
from .views import *


urlpatterns = [
    path('signup', RegistrationAPIView.as_view()),
    path('login', LoginAPIView.as_view()),
    path('current', UserRetrieveUpdateAPIView.as_view()),
    path('profile/list', ProfileListAPIView.as_view()), # 나중에 뒤에 /유저닉네임 붙일거임
    path('profile/detail/<int:pk>', ProfileDetailAPIView.as_view()),
    path('profile/follow', FollowAPIView.as_view()),
    path('profile/following/list', FollowingProfileShowAPIView.as_view()),
    path('profile/follower/list', FollowerProfileShowAPIView.as_view()),    
    path('isauthenticated', UserView.as_view()),
    path('profile/search', ProfileSearchAPIView.as_view())
]
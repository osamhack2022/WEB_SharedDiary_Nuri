from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns =[
    path('diary/', views.DiaryList.as_view()),
    path('diary/<int:pk>/', views.DiaryDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)



from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import DiaryList, DiaryDetail, NoteCreateView

urlpatterns =[
    path('diary', DiaryList.as_view()),
    path('diary/<int:pk>', DiaryDetail.as_view()),
    path('diary/create', NoteCreateView.as_view()),
    #url delete나 ..
]

# urlpatterns = format_suffix_patterns(urlpatterns)



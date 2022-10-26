from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import *

urlpatterns =[
    path('diary', DiaryList.as_view()),
    path('diary/<int:pk>', DiaryDetail.as_view()),
    path('note/create', NoteCreateView.as_view()),
    path('diary/create', DiaryCreateView.as_view()),
    path('note/diary-list', ListDiaryNote.as_view()),
    path('note', NoteListAPI.as_view()),
    path('note/all', AllNoteList.as_view()),
    #url delete나 ..
]

# urlpatterns = format_suffix_patterns(urlpatterns)



from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
# Create your views here.
from .serializer import DiarySerializer, NoteSerializer
from accountapp.models import User
from diaryapp.models import Diary, Note

import base64
from PIL import Image

# 모든 일기 리스트 반환 API
class DiaryList(APIView):
    permission_classes = (AllowAny,)
    serializer_class = DiarySerializer

    def get(self, request, format=None):
        diary = Diary.objects.all()
        serializer = self.serializer_class(diary, many=True)
        return Response(serializer.data)

# 모든 노트 리스트 반환 API
class AllNoteList(APIView):
    permission_classes = (AllowAny,)
    serializer_class = NoteSerializer

    def get(self, request, format=None):
        note = Note.objects.all()
        serializer = self.serializer_class(note, many=True)
        return Response(serializer.data)

# 일기장 생성 API
class NoteCreateView(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = NoteSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            post = Note.objects.create(
                writer=request.user,
                title=request.data['title'],
                description=request.data['description'],
                image=request.data['image'],
                to_open=request.data['to_open']
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 일기장안에서 일기생성 API
class DiaryCreateView(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = DiarySerializer

    def post(self, request, *args, **kwargs):
        serializer = DiarySerializer(data=request.data)
        note_id = request.data['id']
        note = Note.objects.get(id=note_id)
        user=request.user
        # image = base64.b64decode(str(request.data['image']))   

        if serializer.is_valid():
            post = Diary.objects.create(
                writer=user,
                title=request.data['title'],
                content=request.data['content'],
                note=note,
                image=request.data['image'],
                to_open=request.data['to_open']
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# 클라이언트에서 axios로 노트 id를 받아서 해당 노트의 일기를 필터링해 반환하는 API
class ListDiaryNote(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, *args, **kwargs):     
        note_id = request.query_params['id']
        note = Note.objects.filter(id__in=note_id)
        diary = Diary.objects.filter(note__in=note)
        serializer = DiarySerializer(diary, many=True)
        return Response(serializer.data)



# 유저의 일기장 반환 API
class NoteListAPI(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = NoteSerializer

    def get(self, request):
        user_id=request.query_params['id']
        user=User.objects.get(id=user_id)
        note = Note.objects.filter(writer=user)
        serializer = NoteSerializer(note, many=True)
        return Response(serializer.data)

class UserDiaryAPI(APIView):
    # 유저의 일기만 필터링해 제공하는 리스트
    def get():
        pass
    # 유저의 일기 수정
    def put():
        pass
    # 유저의 일기 삭제
    def delete():
        pass


class UserNoteAPI(APIView):
    # 유저의 노트만 필터링해 제공하는 리스트
    def get():
        pass
    # 유저의 노트 수정
    def put():
        pass
    # 유저의 노트 삭제
    def delete():
        pass


class DiaryDetail(APIView):
    # 객체 가져오기
    def get_object(self, pk):
        try:
            return Diary.objects.get(pk=pk)
        except Diary.DoesNotExist:
            raise Http404
    
    # 게시물 조회
    def get(self, request, pk, format=None):
        diary = self.get_object(pk)
        serializer = DiarySerializer(diary)
        return Response(serializer.data)

    # 게시물 수정
    def put(self, request, pk, format=None):
        diary = self.get_object(pk)
        serializer = DiarySerializer(diary, data=request.data) 
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # 게시물 삭제
    def delete(self, request, pk, format=None):
        diary = self.get_object(pk)
        diary.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
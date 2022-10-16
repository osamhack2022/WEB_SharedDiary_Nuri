from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
# Create your views here.
from .serializer import DiarySerializer, NoteSerializer

from diaryapp.models import Diary, Note

# class Note():
class DiaryList(APIView):
    permission_classes = (AllowAny,)
    serializer_class = DiarySerializer

    def get(self, request, format=None):
        diary = Diary.objects.all()
        serializer = self.serializer_class(diary, many=True)
        return Response(serializer.data)

class NoteCreateView(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = NoteSerializer
    
    # 게시물 생성
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


class NoteListAPI(APIView):
    permission_classes = (AllowAny,)
    serializer_class = NoteSerializer

    def get(self, request):
        user=request.user
        note = Note.objects.filter(writer=user)
        serializer = NoteSerializer(diary, many=True)
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
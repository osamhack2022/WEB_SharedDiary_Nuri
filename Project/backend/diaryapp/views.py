from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from rest_framework.views import APIView
# Create your views here.
from .serializer import DiarySerializer

from diaryapp.models import Diary

# class Note():
class DiaryList(APIView):
    # 게시물 조회
    # 이건 Note class 에 넣어야 하는게 아닌지.
    def get(self, request, format=None):
        diary = Diary.objects.all()
        serializer = DiarySerializer(diary, many=True)
        return Response(serializer.data)
    
    # 게시물 생성
    def post(self, request, format=None):
        serializer = DiarySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
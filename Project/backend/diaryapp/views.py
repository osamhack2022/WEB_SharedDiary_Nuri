from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
# Create your views here.
from diaryapp.models import Diary
from django.views.generic import CreateView, WriteView, DetailView, UpdateView, DeleteView


class DiaryListView():

class DiaryCreateView(CreateView):
    model = User
    
class DirayWriteView(WriteView):
    model = User

class DirayDetailView(DetailView):
    model = User

class DiaryUpdateView(UpdateView):
    model = User

class DiaryDeleteView(DeleteView):
    model = User
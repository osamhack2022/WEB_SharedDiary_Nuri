from .models import Diary, Note
from rest_framework import serializers

class DiarySerializer(serializers.ModelSerializer):
    note = serializers.CharField(max_length=45, read_only=True)
    class Meta:
        model = Diary
        fields = '__all__'

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
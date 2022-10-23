from .models import Diary, Note
from rest_framework import serializers
from accountapp.models import User

class DiarySerializer(serializers.ModelSerializer):
    writer = serializers.ReadOnlyField(source='User.nickname')
    note = serializers.CharField(max_length=45, read_only=True)
    class Meta:
        model = Diary
        fields = '__all__'

class NoteSerializer(serializers.ModelSerializer):
    writer = serializers.ReadOnlyField(source='User.nickname')
    class Meta:
        model = Note
        fields = '__all__'
from .models import Diary, Note
from rest_framework import serializers
from accountapp.models import User
# from drf_extra_fields.fields import Base64ImageField

class DiarySerializer(serializers.ModelSerializer):
    # writer = serializers.ReadOnlyField(source='User.nickname')
    writer = serializers.StringRelatedField(read_only=True)
    writer_pk = serializers.IntegerField(read_only=True)
    note = serializers.CharField(max_length=45, read_only=True)
    # image = Base64ImageField(
    #     max_length=None, use_url=True,
    # )
    class Meta:
        model = Diary
        fields = '__all__'

class NoteSerializer(serializers.ModelSerializer):
    # writer = serializers.ReadOnlyField(source='User.nickname')
    writer = serializers.StringRelatedField(read_only=True)
    writer_pk = serializers.IntegerField(read_only=True)
    class Meta:
        model = Note
        fields = '__all__'
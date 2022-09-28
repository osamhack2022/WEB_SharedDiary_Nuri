from .models import Diary
from rest_framework import serializers

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diary
        fields = '__all__'
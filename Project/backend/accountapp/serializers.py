from rest_framework import serializers
from accountapp.models import User
from django.contrib.auth import authenticate
from django.utils import timezone

class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length = 128,
        min_length = 8,
        write_only = True
    )

    token = serializers.CharField(max_length=255, read_only=True)

    class Meta:
        model = User
        field = '__all__'
    
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    username = serializers.CharField(max_length=20, read_only=True)
    password = serializers.CharField(max_length=128, write_only=True)
    last_login = serializers.CharField(max_length=255, read_only=True)

    def validate(self, data):
        email = data.get('email', None)
        password = data.get('password', None)

        if email is None:
            raise serializers.ValidationError(
                'email address is required to Login'
            )
        if password is None:
            raise serializers.ValidationError(
                'password is required to Login'
            )
        
        user = authenticate(username=email, password=password)

        if user is None:
            raise serializers.ValidationError(
                'user with this email and password was not found'
            )
        
        if not user.is_active:
            raise serializers.ValidationError(
                'This user has been deactivated'
            )
        
        user.last_login = timezone.now()
        user.save(update_fields=['last_login'])

        return {
            'email': user.email,
            'username': user.username,
            'last_login': user.last_login
        }
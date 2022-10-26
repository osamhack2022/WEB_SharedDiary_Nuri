from rest_framework import serializers
from accountapp.models import User, Profile
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
        fields = '__all__'
    
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    username = serializers.CharField(max_length=20, read_only=True)
    password = serializers.CharField(max_length=128, write_only=True)
    last_login = serializers.CharField(max_length=255, read_only=True)
    token = serializers.CharField(max_length=255, read_only=True)
    id = serializers.ReadOnlyField()

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
            'id': user.pk,
            'email':user.email,
            'username': user.username,
            'last_login': user.last_login,
            'token': user.token,
        }
    

class UserSerializer(serializers.ModelSerializer):
    
    password = serializers.CharField(
        max_length=128,
        min_length=8,
        write_only=True
    )

    class Meta:
        model = User
        fields = [
            'email',
            'username',
            'password',
            'token'
        ]

        read_only_fields = ('token',)
    
    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)

        for (key, value) in validated_data.items():
            setattr(instance, key, value)
        
        if password is not None:
            instance.set_password(password)
        
        instance.save()

        return instance

class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    profile_image = serializers.ImageField(read_only=True)
    background_image = serializers.ImageField(read_only=True)
    following_count = serializers.IntegerField(read_only=True)
    follower_count = serializers.IntegerField(read_only=True)

    class Meta:
        model = Profile
        fields = '__all__'
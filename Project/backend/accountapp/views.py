from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.views import APIView
from rest_framework import authentication, exceptions
from django.shortcuts import get_object_or_404

from .serializers import RegistrationSerializer, LoginSerializer, UserSerializer, ProfileSerializer
from .renderers import UserJSONRenderer, ProfileJSONRenderer

from accountapp.models import User, Profile

from django.conf import settings
import jwt

# Create your views here.
class RegistrationAPIView(APIView):
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer
    renderer_classes = (UserJSONRenderer,)
    
    def post(self, request):
        user = request.data
        
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

class LoginAPIView(APIView):
    permission_classes = (AllowAny,)
    renderer_classes = (UserJSONRenderer,)
    serializer_class = LoginSerializer

    def post(self, request):
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)

        res = Response(serializer.data, status=status.HTTP_200_OK)
        getusername = res.data.get('username')
        userObject = User.objects.get(username=getusername)

        token = userObject.token
        res.set_cookie(key='jwt', value=token, httponly=True)

        return res

#로그인 여부 확인
class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')
        if not token:
            raise AuthenticationFailed('UnAutehnticated!')
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('UnAutehnticated!')
        
        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)

        return Response(serializer.data)

class LogoutView(APIView):
    def post(self, request):
        res = Response()
        res.delete_cookie('jwt')
        res.data = {
            "message": "success"
        }

        return res


class UserRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated,)
    renderer_classes = (UserJSONRenderer,)
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        serializer = self.serializer_class(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, *args, **kwargs):
        serializer_data = request.data
        serializer = self.serializer_class(
            request.user, data = serializer_data, partial=True
        )

        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)

class ProfileListAPIView(APIView):
    permission_classes = (AllowAny,)
    serializer_class = ProfileSerializer

    def get(self, request):
        profile = Profile.objects.all()
        serializer = self.serializer_class(profile, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class ProfileDetailAPIView(APIView):
    permission_classes = (AllowAny,)
    serializer_class = ProfileSerializer

    def get(self, request, pk):
        id = request.query_params['id']
        user = User.objects.get(id=id)
        profile = Profile.objects.get(user=user)
        serializer = self.serializer_class(profile)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # def get(self, request, slug):
    #     token = request.COOKIES.get('jwt')
    #     if not token:
    #         raise exceptions.AuthenticationFailed('UnAutehnticated!')
    #     try:
    #         payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
    #     except jwt.ExpiredSignatureError:
    #         raise exceptions.AuthenticationFailed('UnAutehnticated!')
        
    #     user = User.objects.filter(id=payload['id']).first()
    #     profile = Profile.objects.get(user=user)
    #     serializer = self.serializer_class(profile)
    #     return Response(serializer.data, status=status.HTTP_200_OK)

class FollowAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    renderer_classes = (UserJSONRenderer,)
    serializer_class = ProfileSerializer
    def post(self, request, *args, **kwargs):
        user = request.user
        profile = Profile.objects.get(user=user)
        another_user = User.objects.get(id=request.data['id'])
        another_profile = Profile.objects.get(user=another_user)
        profile.following.add(another_profile)
        another_profile.follower.add(profile)
        serializer = self.serializer_class(Profile.objects.get(user=user))
        return Response(serializer.data, status=status.HTTP_200_OK)







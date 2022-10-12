from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from _core.models import TimestampedModel

import jwt
from datetime import datetime, timedelta
from django.core.validators import RegexValidator

from django.conf import settings

class UserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, username, email=None, password=None):
        if not username:
            raise ValueError('must have user username!')
        if not email:
            raise ValueError('must have user email!')
        if not password:
            raise ValueError('must have user password!')
        user = self.model(
            username=username,
            email=self.normalize_email(email), # 정규화 중복최소화
        )
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, email, password):
        superuser = self.create_user(
            username=username,
            email=email,
            password=password
        )
        superuser.is_admin = True
        superuser.is_superuser = True
        superuser.is_staff = True
        superuser.save()
        return superuser


class User(AbstractBaseUser, PermissionsMixin, TimestampedModel):
    username_pattern = RegexValidator(r'^[0-9a-zA-Z_]{5,20}$', '5-20글자 사이의 숫자,영문,언더바만 가능합니다!')
    objects = UserManager()

    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=20, null=False,
                                unique=True, validators=[username_pattern])
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return self.is_admin

    def __str__(self):
        return self.email

    def get_full_name(self):
        return self.username

    def get_short_name(self):
        return self.username

    @property
    def token(self):
        return self._generated_jwt_token()
    
    def _generated_jwt_token(self):
        dt = datetime.now()+timedelta(days=60)

        token = jwt.encode({
            'id':self.pk,
            'exp':dt.utcfromtimestamp(dt.timestamp())
        }, settings.SECRET_KEY, algorithm='HS256')

        return token

    #미사용
    def validate_token(token):
        try:
            jwt.decode(token, settings.SECRET_KEY, algorithms='HS256')
        except jwt.ExpiredSignatureError:
            return status.HTTP_401_UNAUTHORIZED
        except jwt.InvalidTokenError:
            return status.HTTP_401_UNAUTHORIZED
        else:
            return True

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    nickname = models.SlugField(max_length=15, unique=True, allow_unicode=True, blank=False)
    self_intro = models.TextField(blank=True)
    profile_image = models.ImageField(upload_to='profile/', default='../static/img/default-profile.png')
    background_image = models.ImageField(upload_to='profile/', null=True, blank=True)

    def __str__(self):
        return self.nickname

    def save(self, *args, **kwargs):
        self.nickname = self.user.username
        super(Profile, self).save(*args, **kwargs)

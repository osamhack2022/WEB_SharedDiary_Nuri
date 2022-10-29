# 🌱 누리
### <strong>아카이브를 강화한 SNS형태의 공유형 일기장</strong>
<br/>

```bash
저장소 규칙명시
WEB(FE) : Project/frontend
WEB(BE) : Project/backend
```
<br/>

### <strong>Index</strong>
<hr>

1. [<strong>왜 만들었나?</strong> 🚀](#-service-needs)
2. [<strong>뭘로 만들었나?</strong> 💻](#-technique-used)
3. [<strong>실행 주의사항?</strong> ❗](#-compatibility)
4. [<strong>설치방법?</strong> ⚙️](#%EF%B8%8F-installation)
5. [<strong>팀 구성원?</strong> 🔥](#-crew)
6. [<strong>제품 설명?</strong> 🏅](#-product-demonstration)
7. [<strong>개발 문서?</strong> 📚](#-devdocs)

<br>
<br>

### 🚀 <strong>Service Needs</strong>
일기를 쓰면서 내가 아닌 다른 사람들은 어떤 글을 적을까. 나와 어떤 다른 생각을 가지고 있을까 고민한 경험이 많다. 스마트폰이 대중화되면서 많은 사람들이 어플에 일기를 적고 있고, 이런 고민을 반영해 공유 기능을 추가한 서비스도 이미 존재한다. 하지만 공유기능을 의도대로 살리고 유저 간에 커뮤니케이션을 활발하게 이끌어내는데 성공한 서비스는 아직까지 보이지 않는다. 비밀스러운 글이라는 일기의 특성 때문일지도 모르지만 나는 아직까지 '공유'에 초점을 둔 서비스가 없었기 때문이라고 파악한다. SNS가 어떻게 유저 간에 결속을 만들고 강한 확산력을 만들어내는지, 그럼에도 불구하고 SNS가 일기장을 대체할 수 없는 이유가 무엇인지 말이다. <br/>

<strong>공유라는 컨셉의 핵심이 될 SNS의 확산력과 유저 간 결속을 일기장에 반영하고 SNS가 가지지 못한 아카이브의 기능을 강화하여 지금까지의 단순한 일기어플이 아닌 사람들이 일상과 생각을 공유하고 그들의 생활이 될 수 있는 '일기 공유 플랫폼'의 개발을 목표로 한다.</strong>
<br/>
<br/>

### 💻 <strong>Technique Used</strong>
<br/>
<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>
  <img src="https://img.shields.io/badge/Javascript-orange?style=flat-square&logo=Javascript&logoColor=white"/></a>
  <img src="https://img.shields.io/badge/React-18.1.0-13BEF9?style=flat-square&logo=React&logoColor=white"/></a>
  <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/></a>

</div>
<div align="center">
  <img src="https://img.shields.io/badge/Django-4.1.1-092E20?style=flat-square&logo=Django&logoColor=092E20"/></a>
  <img src="https://img.shields.io/badge/SQLite-4169E1?style=flat-square&logo=SQLite&logoColor=white"/></a>
    <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/></a>
</div>
<br/>

* Server
    * Django
    > Django RestFramework (DRF) 이용 
* Frontend
    * React.js
    > Create React App (CRA) 빌드<br>
    > Redux Tool Kit (RTK) 이용 상태관리
* Database
    * SQLite
    > Raw Query 없이 django ORM 이용
    
<br/>
<br/>

### ❗ <strong>Compatibility</strong>
* Python 3.8 이상 (Django 4.1 호환 버전)
* ECMAScript 6 지원 브라우저
<br/>
<br/>

### ⚙️ <strong>Installation</strong>

```bash
$ git clone "https://github.com/osamhack2022/WEB_SharedDiary_Nuri.git"

// 서버 실행 안내
$ cd Project
$ python3 -m venv venv
$ source venv/bin/activate
$ python3 -m pip install --upgrade pip
$ pip install -r requirements.txt

$ cd backend
$ python manage.py makemigrations
$ python manage.py migrate
$ python manage.py runserver

// 프론트엔드 실행 안내
$ cd Project/frontend
$ npm install
$ npm start
```
<br/>
<br/>

### 🔥 <strong>Crew</strong>
```bash
$ cd Aiden-Kwak
$ cat 곽병혁.json

{
    "name" : "Kwak Byeong Hyeok (jeff721@cnsh.hs.kr)",
    "Github" : "@Aiden-Kwak",
    "Role" : ["FullStack", "UI/UX", "Product design"]
}

$ cd mingi123
$ cat 정민기.json

{
    "name" : "Jung MinGi (alsrl123488@gmail.com)",
    "Github" : "@mingi123",
    "Role" : ["UI/UX", "Video Editing"]
}
```
<br/>
<br/>

### 🏅 <strong>Product demonstration(작성중, 이미지추가)</strong>
<br>

* 회원가입, 로그인
> 아이디, 이메일, 비밀번호를 입력받아 회원가입이 이루어집니다. <br>
> 로그인시엔 이메일, 비밀번호를 입력받습니다. <br>
> 로그아웃을 하지 않는다면 브라우저 종료 후 재접속해도 로그인이 유지됩니다.

* 일기장 생성
> 로그인한 유저는 '나의 공간'에서 일기장을 생성할 수 있습니다. <br>
> 일기장 생성시엔 일기장 제목, 일기장 설명, 대표 이미지를 입력받습니다.<br>
> 생성된 일기장은 입력한 내용을 바탕으로 카드형태로 렌더링됩니다.

* 일기 작성
> 유저는 자신이 생성한 일기장안에 일기를 생성할 수 있습니다.<br>
> 일기장은 제목과 내용을 입력받습니다. 내용 입력창은 WYSIWIG 에디터로, 작성한 서식이 그대로 렌더링됩니다.

* 팔로잉
> 유저 팔로잉 기능을 구현하였습니다. <br>
> 팔로워, 팔로잉 유저가 리스팅됩니다.

* 나의 공간
> 일종의 프로필공간으로 유저닉네임, 유저아이디, 프로필이미지, 배경이미지가 나타나며, <br>
> 팔로잉한 유저와 유저의 팔로워수가 나타나는 공간, 생성한 일기장이 모여있는 공간으로 구성됩니다.
> 우측엔 추천사용자가 리스팅됩니다. 프로필카드를 클릭해 해당 유저의 나의공간으로 이동할 수 있습니다.

* 타임라인
> 가입된 모든 유저들의 일기가 최신순으로 업데이트되어 리스팅됩니다. <br>
> 추천일기장 공간엔 다른 사용자들의 일기장이 리스팅 됩니다.

<br/>
<br/>

### 📚 <strong>DevDocs</strong>
<br>

1. [<strong>DB Schema</strong>](#1-db-schema)
2. [<strong>ER-diagram</strong>](#2-er-diagram)
3. [<strong>회원가입 구현</strong>](#3-회원가입-구현)
4. [<strong>로그인, 상태유지, 인증 구현</strong>](#4-로그인-상태유지-구현)
5. [<strong>팔로우 구현</strong>](#5-팔로우-구현)
6. [<strong>일기장 구현</strong>](#6-일기장-구현)
7. [<strong>일기 구현</strong>](#7-일기-구현)
<hr>
<br>

### <strong>1. DB Schema</strong>
```sql
1. 계정관련 (유저, 프로필)

Table User {
  id int [PK]
  username char(20) [unique, not null]
  email varchar [unique, not null]
  created_at datetime
  updated_at datetime
}

Table Profile {
  user int [PK]
  nickname char(20) [unique, not null]
  self_intro char(250)
  profile_image image
  background_image image
  following int
  follower int
  created_at datetime
  updated_at datetime
}

Ref: Profile.user - User.id
Note: 'One-to-One relation'
Ref: Profile.following > Profile.user
Note: 'Many-to-Many relation'
Ref: Profile.follower > Profile.user
Note: 'Many-to-Many relation'


2. 일기관련(일기장, 일기)

Table Diary {
  id int [PK]
  writer int
  title char(45) [not null]
  content varchar [not null]
  note int
  created_at datetime
  updated_at datetime
  to_open boolean
} Note: '일기모델'

Table Note {
  id int [PK]
  writer int
  title char(45)
  description char(150)
  image image
  diary int
  created_at datetime
  updated_at datetime
  to_open boolean
} Note: '일기장 모델'

Ref: Diary.writer - User.id
Note: 'One-to-One relation'
Ref: Diary.note - Note.id
Note: 'One-to-One relation'
Ref: Note.diary > Diary.id
Note: 'One-to-One relation'
```
<br>

### <strong>2. ER-diagram</strong>
![image](https://user-images.githubusercontent.com/67510613/198579841-423e44dd-6d43-4957-ae58-ec2de50f3e9e.png)

### <strong>3. 회원가입 구현</strong>
> jwt(Json Web Token) 방식의 인증을 구현하였다. 아래는 구현과정에 대한 간략한 설명이다.
 ```python
 1. 토큰 생성

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
 ```
 > accountapp/models.py의 일부이다. token은 유저id, 60일로 설정한 만료시간(dt), 적용알고리즘(HS256)을 인코딩한 값을 합친뒤 SECRET_KEY로 hashing되어 만들어진다.

 ```python

1. 유저 생성

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
 ```
 > accountapp/views.py 의 일부이다. post 요청을 받게 되면 RegistrationSerializer에 요청받은 데이터를 넘기고 유효성검사를 통과하면 유저를 생성한다. RegistrationSerializer는 accountapp/serializers.py 참고.

<br>
<br>

### <strong>4. 로그인& 상태유지 구현</strong>
> 로그인기능, 그리고 로그인 이후 페이지가 새로고침되거나 리다이렉트되어도 로그인상태를 유지할 수 있도록 구현하였다.
```python
1. 로그인

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
```
> 다음은 accountapp/serializers.py의 일부이다. 로그인기능의 핵심은 유저가 올바른 인증정보를 입력했는지의 확인, 그리고 인증과정을 위한 토큰 및 유저정보 반환이다.<br> 
> django의 authenticate 함수를 이용해 username필드로 설정한 email, 입력받은 password의 조합을 DB와 매칭해 확인한다.
> accountapp/views.py의 LoginAPIView에서는 이 serializer에 요청받은 데이터를 담고 유효성검사를 거친뒤 리턴한다.

<br>

```python
2. 상태유지 구현

const onSubmit = async() => {
    const url = "/accounts/login";
    const userdata = {
        'email': email,
        'password': password
    };
    const config = {
        "Content-Type": 'application/json'
    };
        
    await axios 
        .post(url, userdata, config)
        .then(function (res) {
            if (res.data.user.token) {
                localStorage.setItem('userdata', JSON.stringify(res.data));
                localStorage.setItem('token', res.data.user.token);
            }
        })
        .catch(function (error) {
            console.log(error);
            setLoginError(true);
        });
};

```
> 위 코드는 frontend/src/account/Login.jsx의 일부이다.<br>
> 로그인 버튼 클릭시 작동하는 함수로 로그인 입력정보를 담아 서버에 post 요청을 보낸다. 로그인을 유지한다는 것은 계속해 로그인한 유저의 정보를 가지고 있다는 것이다. 이를 위해 axios 요청이 성공했을때 반환받은 요청을 브라우저의 localStorage에 담았다. 클라이언트에서는 로그인 이후 저장된 해당 정보를 가지고 동작하게 될 것이다.
<br>

```python
1. 인증구현

class JWTAuthentication(authentication.BaseAuthentication):
    authentication_header_prefix = 'Token'

    def authenticate(self, request):
        auth_header = authentication.get_authorization_header(request).split()
        auth_header_prefix = self.authentication_header_prefix.lower()

        if not auth_header:
            return None    
        if len(auth_header) == 1:
            return None 
        elif len(auth_header) > 2:
            return None
        
        prefix = auth_header[0].decode('utf-8')
        token = auth_header[1].decode('utf-8')

        if prefix.lower() != auth_header_prefix:
            return None

        return self._authenticate_credentials(request, token)


    def _authenticate_credentials(self, request, token):
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        except:
            msg = 'Invalid authentication. Could not decode token.'
            raise exceptions.AuthenticationFailed(msg)

        try:
            user = User.objects.get(pk=payload['id'])
        except User.DoesNotExist:
            msg = 'No user matching this token was found.'
            raise exceptions.AuthenticationFailed(msg)

        if not user.is_active:
            msg = 'This user has been deactivated.'
            raise exceptions.AuthenticationFailed(msg)

        return (user, token)
```
> 다음은 backend/accountapp/backends.py의 일부이다.<br>
> 일기의 내용은 로그인을 하지 않은 유저도 접근할 수 있다. 하지만 일기작성페이지에 로그인을 하지 않은 유저가 접근할 수 있어서는 안된다. Django나 DRF는 기본적으로 JWT 인증을 지원하지 않는다. 위의 코드는 이를 위한 JWT 인증 코드이다.<br>
> authenticate 함수는 인증 필요여부와 관계없이 모든 요청에서 호출이 된다. 인증실패시 None을, 성공시 (user, token) 조합을 반환하여 인증을 처리한다. _authenticate_credentials 를 통해 token을 decode하고 payload에 담긴 id의 유효성을 확인해 최종적으로 인증을 마무리한다.

<br>

### <strong>5. 팔로우 구현</strong>

### <strong>6. 일기장 구현</strong>
### <strong>7. 일기 구현</strong>


<br>

<strong>[Backend 기술문서 바로가기](https://melodious-cornucopia-9b9.notion.site/Nuri-Backend-64f6886d357a458a87a20bedd5102936)</strong>
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
* DB Schema
```sql
계정관련 (유저, 프로필)

일기관련(일기장, 일기)
```

* 회원가입 구현

* 로그인, 상태유지 구현

* 팔로우 구현

* 일기장 구현

* 일기 구현


<br>

<strong>[Backend 기술문서 바로가기](https://melodious-cornucopia-9b9.notion.site/Nuri-Backend-64f6886d357a458a87a20bedd5102936)</strong>
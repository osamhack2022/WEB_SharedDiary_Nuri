# 🌱 누리
# 포크 후 커밋 테스트 10161356
### <strong>아카이브를 강화한 SNS형태의 공유형 일기장</strong>
<br/>

```bash
저장소 규칙명시
WEB(FE) : Project/frontend
WEB(BE) : Project/backend
```
<br/>

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
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/></a>
</div>
<div align="center">
  <img src="https://img.shields.io/badge/Django-4.1.1-092E20?style=flat-square&logo=Django&logoColor=092E20"/></a>
  <img src="https://img.shields.io/badge/Nginx-1.21.1-009639?style=flat-square&logo=Nginx&logoColor=009639"/></a>
  <img src="https://img.shields.io/badge/PostgreSQL-13.3-4169E1?style=flat-square&logo=PostgreSQL&logoColor=4169E1"/></a>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white"/></a>
</div>
<br/>

* Server
    * Django Rest Framework (DRF)
* Frontend
    * React.js + Redux
* Database
    * PostgreSQL
* CI/CD
    * Docker-compose, Git
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
$ python manage.py runserver 8081

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
    "Role" : ["FullStack", "UI/UX", "CI/CD"]
}

$ cd mingi123
$ cat 정민기.json

{
    "name" : "Jung MinGi (alsrl123488@gmail.com)",
    "Github" : "@mingi123",
    "Role" : ["Full Stack", "UI/UX"]
}
```
<br/>
<br/>

### 🏅 <strong>Product demonstration</strong>
작성중
<br/>
<br/>

### 📚 <strong>DevDocs</strong>
<strong>[Backend 기술문서 바로가기](https://melodious-cornucopia-9b9.notion.site/Nuri-Backend-64f6886d357a458a87a20bedd5102936)</strong>
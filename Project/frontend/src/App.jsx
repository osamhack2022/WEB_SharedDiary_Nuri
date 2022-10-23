import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup, Login, ProfileCreate, ProfileDetail, Follower, Following } from './account';
import { RandingPage } from './randingpage';
import { Myspace } from './myspace';
import { Header, Footer, NotFound } from './_components';
import { DiaryContext, DiaryShelf, DiaryList, DiaryCreate, DiaryDetail } from './diary';
import { useDispatch } from 'react-redux'

import { authenticate } from './redux/isauthenticated';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  if(token){
    dispatch(authenticate({isAuthenticated: true}))
  }else {
    dispatch(authenticate({isAuthenticated: false}))
  }
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<RandingPage/>}/>
            <Route path="/accounts/signup" element={<Signup/>}/>
            <Route path="/accounts/login" element={<Login/>}/>
            {/* <Route path="/profile/create" element={<ProfileCreate/>}/> */}
            {/* <Route path="/profile/detail" element={<ProfileDetail/>}/> */}
            <Route path="/diary" element={<DiaryContext/>}/>
            <Route path="/diary/create" element={<DiaryCreate/>}/>
            <Route path="/diaryshelf" element={<DiaryShelf/>}/>
            <Route path="/diary/list" element={<DiaryList/>}/>
            <Route path="/diary/detail" element={<DiaryDetail/>}/>
            <Route path="/myspace/:userid" element={<Myspace/>}/>
            <Route path="/follower/list" element={<Follower/>}/>
            <Route path="/following/list" element={<Following/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

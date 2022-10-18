import React, { useState } from 'react';
import axios from "axios";
import './account.css';
// import { JWTCheck } from '../lib';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
// import { login } from '../redux/user';

export { Login };

function Login() {
    // const dispatch = useDispatch()
    const [info, setInfo] = useState({
        email: '',
        password: '',
    });

    const {email, password} = info; // 비구조화할당

    const onChange = e => {
        const {value,name} = e.target;
        setInfo({
            ...info,
            [name]:value
        });
    };

    
    /* 
    1. 버튼클릭
    2. 이메일, 비번 서버로 전송
    3. /accounts/login은 LoginAPIView와 연결되어있다.
    4. LoginAPIView는 LoginSerializer를 거쳐 직렬화된 데이터를 응답하고 회원가입할때 생성된 token을 쿠키에 저장
    4. username은 따로 쿠키에 저장
    5. axios.then으로 그 응답을 받는다
    6. 이제 로그인 상태를 유지하기 위해 쿠키에 응답받은 내용중 token을 저장할거다
    7. contextLib에 로그인상태인지를 확인하는 코드를 만들었다.
    8. 
    */
    const onSubmit = async() => {
        const url = "/accounts/login";
        const userdata = {
            'email': email,
            'password': password
        };
        const config = {
            "Content-Type": 'application/json',
            header: {
                
            }
        };
        
        await axios 
            .post(url, userdata, config)
            .then(function (res) {
                if (res.data.user.token) {
                    localStorage.setItem('userdata', JSON.stringify(res.data));
                    localStorage.setItem('token', res.data.user.token);
                    localStorage.setItem('username', res.data.user.username);
                    localStorage.setItem('useremail', res.data.user.email);
                    localStorage.setItem('userid', res.data.user.id);   
                }
                console.log(res.data)
                // dispatch(login({username: res.data.user.username, nickname: "닉네임!", selfIntro: "셀프인트로!", profileImg: "이미지다!"}))
                window.history.back();
                setTimeout(()=>{ window.location.reload() }, 100)
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const loginEnter =(e) => {
        if(e.key === 'Enter'){
            console.log('작동');
            onSubmit();
        }
    };

    return (
        <div className='Login'>
            <div className="Login-container">
                <div className='logo'>
                    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox='0 0 48 48'>
                        <path d="M7.7 29.5c-2.3 0-4.1-.8-5.6-2.4C.7 25.5 0 23 0 20c0-4.5 1.1-8.4 3.4-11.6C5.7 5.2 9.2 2.6 14 .5l3.1 7c-3 .5-5.6 1.5-7.8 3A10 10 0 0 0 5 15.9c.7-.3 1.7-.5 2.8-.5 2.2 0 4 .7 5.3 2 1.3 1.3 2 3 2 5.1 0 2.1-.7 3.8-2 5.1a7.3 7.3 0 0 1-5.4 2Zm19 0c-2.3 0-4.2-.8-5.6-2.4-1.4-1.6-2.1-4-2.1-7.1 0-4.5 1-8.4 3.4-11.6C24.7 5.2 28 2.6 32.8.5l3.2 7c-3 .5-5.7 1.5-7.9 3a10 10 0 0 0-4.2 5.3c.8-.3 1.7-.5 2.8-.5 2.2 0 4 .7 5.3 2 1.4 1.3 2 3 2 5.1 0 2.1-.6 3.8-2 5.1a7.3 7.3 0 0 1-5.3 2Z" fill="#4CA771"/>
                    </svg>
                    <p style={{color: '#808080'}}>누리, 사색을 공유하다</p>
                </div>
                <div className='login-form'>
                    <p className='input'><input type="text" name="email" value={email} onChange={onChange} onKeyPress={loginEnter} placeholder="이메일"/></p>
                    <p className='input'><input type="password" name="password" value={password} onChange={onChange} onKeyPress={loginEnter} placeholder="비밀번호"/></p>   
                    <p className='submit'><input type="submit" value="로그인" onClick={onSubmit}/></p>
                </div>
            </div>
            
        </div>  
    );
}
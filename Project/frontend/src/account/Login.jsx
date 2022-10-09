import React, { useState } from 'react';
import axios from "axios";
// import { JWTCheck } from '../lib';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { login } from '../redux/user';

export { Login };

function Login() {
    const dispatch = useDispatch()
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
                console.log(res);
                if (res.data.user.token) {
                    localStorage.setItem('token', res.data.user.token);  
                }
                console.log(res.data)
                dispatch(login({username: res.data.user.username, nickname: "닉네임!", selfIntro: "셀프인트로!", profileImg: "이미지다!"}))
                window.history.back();
                setTimeout(()=>{ window.location.reload() }, 100)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <div className="Login">
                <input type="text" name="email" value={email} onChange={onChange} placeholder="email"/>
                <input type="password" name="password" value={password} onChange={onChange} placeholder="password"/>
            </div>
            <button onClick={onSubmit}>button</button>
        </>  
    );
}
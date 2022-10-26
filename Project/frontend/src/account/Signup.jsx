import React, { useState } from 'react';
import axios from "axios";
import './account.css';
import { VscWorkspaceUntrusted } from "react-icons/vsc";
export { Signup };

function Signup() {
    const [info, setInfo] = useState({
        username: '',
        email: '',
        password: '',
    });

    const {username, email, password} = info; // 비구조화할당
    const [signupError, setSignupError] = useState(false);

    const onChange = e => {
        const {value,name} = e.target;
        setInfo({
            ...info,
            [name]:value
        });
    };

    const url = "/accounts/signup";
    const userdata = {
        'username': username,
        'email': email,
        'password': password
    };
    const config = {"Content-Type": 'application/json'};

    const onSubmit = async() => {
        await axios
            .post(url, userdata, config)
            .then(function (res) {
                console.log(res);
                window.history.back();
                setTimeout(()=>{ window.location.href('/') }, 100)
            })
            .catch(function (error) {
                console.log(error);
                setSignupError(true);
            });
    }
    const loginEnter =(e) => {
        if(e.key === 'Enter'){
            console.log('작동');
            onSubmit();
        }
    };

    return (
        <div className='Signup'>
            <div className="Signup-container">
                <div className='logo'>
                    <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox='0 0 48 48'>
                        <path d="M7.7 29.5c-2.3 0-4.1-.8-5.6-2.4C.7 25.5 0 23 0 20c0-4.5 1.1-8.4 3.4-11.6C5.7 5.2 9.2 2.6 14 .5l3.1 7c-3 .5-5.6 1.5-7.8 3A10 10 0 0 0 5 15.9c.7-.3 1.7-.5 2.8-.5 2.2 0 4 .7 5.3 2 1.3 1.3 2 3 2 5.1 0 2.1-.7 3.8-2 5.1a7.3 7.3 0 0 1-5.4 2Zm19 0c-2.3 0-4.2-.8-5.6-2.4-1.4-1.6-2.1-4-2.1-7.1 0-4.5 1-8.4 3.4-11.6C24.7 5.2 28 2.6 32.8.5l3.2 7c-3 .5-5.7 1.5-7.9 3a10 10 0 0 0-4.2 5.3c.8-.3 1.7-.5 2.8-.5 2.2 0 4 .7 5.3 2 1.4 1.3 2 3 2 5.1 0 2.1-.6 3.8-2 5.1a7.3 7.3 0 0 1-5.3 2Z" fill="#4CA771"/>
                    </svg>
                    <h2 style={{marginLeft:'5px'}}>누리 회원가입</h2>
                </div>
                <p className='description'>
                    누리에 가입해 서로의 세상을 공유해보세요! <br/>가입 후 프로필 변경을 통해 <span style={{color:'#4CA771'}}>닉네임</span>을 설정할 수 있습니다.
                </p>
                <div className='signup-form'>
                    <p className='input'><input type="text" name="username" value={username} onChange={onChange} placeholder="누리 아이디" onKeyPress={loginEnter}/></p>
                    <p className='input'><input type="text" name="email" value={email} onChange={onChange} placeholder="이메일" onKeyPress={loginEnter}/></p>
                    <p className='input'><input type="password" name="password" value={password} onChange={onChange} placeholder="비밀번호" onKeyPress={loginEnter}/></p>
                    <p className='submit'><input type="submit" value="회원가입" onClick={onSubmit}/></p>
                    <p className={'error'+(signupError?'active':'')}>
                        <VscWorkspaceUntrusted/>
                        <span style={{marginLeft:'5px'}}>5-20글자 사이의 숫자,영문,언더바만 가능합니다.</span>
                    </p>
                </div>   
            </div>
            {/* <button onClick={onSubmit}>button</button> */}
        </div>  
    );      
}
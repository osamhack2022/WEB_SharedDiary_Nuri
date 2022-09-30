import React, { useState } from 'react';
import axios from "axios";
export { Login };

function Login() {
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

    const url = "http://127.0.0.1:8000/accounts/login";
    const userdata = {
        'email': email,
        'password': password
    };
    const config = {"Content-Type": 'application/json'};

    const onSubmit = async() => {
        await axios
            .post(url, userdata, config)
            .then(function (res) {
                console.log(res);
                if (res.data.user.token) {
                    localStorage.setItem('nuri-token', res.data.user.token);  
                }
                console.log(res.data.user.token)
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
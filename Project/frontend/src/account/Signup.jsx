import React, { useState } from 'react';
import axios from "axios";
export { Signup };

function Signup() {
    const [info, setInfo] = useState({
        username: '',
        email: '',
        password: '',
    });

    const {username, email, password} = info; // 비구조화할당

    const onChange = e => {
        const {value,name} = e.target;
        setInfo({
            ...info,
            [name]:value
        });
    };

    const url = "http://127.0.0.1:8000/accounts/signup";
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
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            <div className="signup">
                <input type="text" name="username" value={username} onChange={onChange} placeholder="username"/>
                <input type="text" name="email" value={email} onChange={onChange} placeholder="email"/>
                <input type="password" name="password" value={password} onChange={onChange} placeholder="password"/>
            </div>
            <button onClick={onSubmit}>button</button>
        </>  
    );      
}
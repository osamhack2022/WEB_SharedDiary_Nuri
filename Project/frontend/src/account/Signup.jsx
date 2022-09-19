import React, { useState } from 'react';
import axios from "axios";
export { Signup };

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = e => {
        setUsername(e.target.value)
        
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const onSubmit = () => {
        axios
            .post("http://127.0.0.1:8000/accounts/signup", {
                username: username,
                email: email,
                password: password
            })
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
                <input type="text" name="username" value={username} onChange={handleUsername} placeholder="username"/>
                <input type="text" name="email" value={email} onChange={handleEmail} placeholder="email"/>
                <input type="password" name="password" value={password} onChange={handlePassword} placeholder="password"/>
            </div>
            <button onClick={onSubmit}>button</button>
        </>  
    );      
}
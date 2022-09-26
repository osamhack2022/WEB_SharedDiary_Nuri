import React, { useState } from 'react';

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

    return (
        <>
            <div className="Login">
                <input type="text" name="email" value={email} onChange={onChange} placeholder="email"/>
                <input type="password" name="password" value={password} onChange={onChange} placeholder="password"/>
            </div>
            <button onClick={''}>button</button>
        </>  
    );
}
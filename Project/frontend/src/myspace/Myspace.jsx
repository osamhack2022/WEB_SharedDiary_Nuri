import React, { useState } from 'react';
import axios from "axios";
import { useSelector } from 'react-redux'
export {Myspace};

function Myspace() {
    const authentication = useSelector((state) => state.authenticate.value) //authentication.isAuthenticated 사용
    const token = localStorage.getItem('token')
    axios.get('/accounts/current', {
            header: {
                Authentication: `token ${token}`
            }
        })
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
    return (
        <div className="Myspace">
            나의 공간 제작중
            프로필 컴포넌트 만들것
            <div className="Mydiary">


            </div>
        </div>
    );
}
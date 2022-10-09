import React, { useState } from 'react';
import axios from "axios";
import { useDispatch } from 'react-redux'
import {Cookies} from 'react-cookie'
export { DiaryContext };

function DiaryContext() {
    const dispatch = useDispatch()
    // const cookies = new Cookies()
    // const token = cookies.get('jwt')
    // const testtoken = 'token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjcwNDEwMDUxfQ.4RX8t7Wlrp-6Q5G_muPoBFnIK6vQup3eJmK7IJN5gUU'
    // console.log(token)
    // const Axios = axios.get('/accounts/current', {
    //     headers : {
    //         Authorization: {testtoken}
    //     }
    // })
    // console.log(Axios)
    const onSubmit = () => {
        axios.get('/accounts/current')
        .then(res=>console.log(res))
        .catch(error => console.log(error))
    }
    
    return (
        <div className='DiaryContext'>
            <button onClick={onSubmit}>클릭테스트</button>
            <div>
                일기내부 데이터 확인용
            </div>
        </div>
    );
}
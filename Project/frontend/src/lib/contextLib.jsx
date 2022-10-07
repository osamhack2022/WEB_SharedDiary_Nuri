import axios from 'axios';
import {useState} from 'react';
import {Cookies} from 'react-cookie'
export { JWTCheck }

/* 
1. 쿠키에 jwt 저장되었는지 조회 
2. 값이 존재한다면 axios.get , url: /accounts/isauthenticated, useState에 상태저장
3. get 한 프로필 정보 쿠키에 저장.
4. 쿠키는 로그아웃, 브라우저종료 시 삭제
*/

function JWTCheck() {
    const [isAuthenticated, userHasAutehnticated] = useState(false);
    const url = '/accounts/isauthenticated'
    const cookies = new Cookies()

    if(cookies.get('jwt')){
        const token = cookies.get('jwt')
        const request = axios
        .get(url)
        .then(res => res.data)
        .then(userHasAutehnticated(true))
        .catch(error => console.log(error));

    }else{
        userHasAutehnticated(false);
    }
}
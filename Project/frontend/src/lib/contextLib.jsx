import axios from 'axios';
import {useState} from 'react';
export { JWTCheck }
function JWTCheck() {
    const [isAuthenticated, userHasAutehnticated] = useState(false);
    const url = 'http://127.0.0.1:8000/accounts/current'

    if(localStorage.getItem('nuri-token')){
        const token = localStorage.getItem('nuri-token');
        const request = axios
        .get(url, {params:{Data_send}, withCredentials:true})
        .then((response) => response.data)
        .catch((error)=>console.log(error.response.data));

        return {
            type: OUTPUT_DATE,
            payload:request,
        }
    }else{
        userHasAutehnticated(false);
    }


}
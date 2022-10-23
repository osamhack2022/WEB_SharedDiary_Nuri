import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { profilelist } from '../redux/profilelist';
import { useParams } from 'react-router-dom';
import { Profile } from '../account';
import { ProfileCard } from '../_components/ProfileCard';
import './myspace.css'
export {Myspace};

function Myspace() {
    const [info, setInfo] = useState([]);
    const [inputData, setInputData] = useState('');
    const userProfile = useSelector((state) => state.profilelist.value)
    const dispatch = useDispatch()
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    const searchChange = async(e) => {
        setInputData(e.target.value);
        e.target.value.length===0 ? dispatch(profilelist(info)):
        await axios.get('/accounts/profile/search',{
            params:{
                inputData:inputData
            }
        })
        .then(function(res){
            dispatch(profilelist(res.data))
        })
        .catch(error=>console.log(error))
    }
    
    useEffect(()=>{
        axios.get('/accounts/profile/list', {
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type':'application/json'
            },  
        })
        .then(function(res){
            setInfo(res.data)
        })
        .catch(error=>console.log(error))
    }, [token]);


    useEffect(()=>{
        dispatch(profilelist(info))
    }, [info, dispatch])

    const profileList = userProfile.length!==0 ? userProfile&&userProfile.map(profileElement => ( 
        <ProfileCard profileElement={profileElement} key={profileElement.id}/>
    )):<div>추천드릴 누리가 없습니다</div>

    return (
        <div className="Myspace">
            <div className='Myspace-container'>
                <div className='Myspace-profile-cp'>
                    <Profile/>
                </div>
                <div className='Nuri-list'>
                    <h2 style={{marginBottom:'25px', marginLeft: '15px'}}>Find Nuries</h2>
                    <p className='input'><input type="search" name='search' onChange={searchChange} value={inputData} placeholder='누리 찾기'/></p>
                    <div className='list'>
                        {profileList}
                    </div>
                </div>
            </div> 
        </div>
    );
}
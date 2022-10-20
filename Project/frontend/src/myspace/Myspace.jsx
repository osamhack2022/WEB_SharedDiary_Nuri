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
    const userProfile = useSelector((state) => state.profilelist.value)
    const dispatch = useDispatch()
    const token = localStorage.getItem('token');
    
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

    console.log(userProfile)

    const profileList = userProfile&&userProfile.map(profileElement => (
        <ProfileCard profileElement={profileElement} key={profileElement.id}/>
    ))

    return (
        <div className="Myspace">
            <div className='Myspace-profile-cp'>
                <Profile/>
            </div>
            <div className='Nuri-list'>
                <h2 style={{marginBottom:'25px', marginLeft: '15px'}}>Find Nuries</h2>
                <div className='list'>
                    {profileList}
                </div>
            </div>          
        </div>
    );
}
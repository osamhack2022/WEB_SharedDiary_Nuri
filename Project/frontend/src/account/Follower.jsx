import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ProfileCard } from '../_components/ProfileCard';

export {Follower}

function Follower() {
    const location = useLocation();
    const id = location.state.id;
    const [info, setInfo] = useState([]);

    useEffect(()=>{
        axios.get('/accounts/profile/follower/list',{
            params:{
                id: id
            }
        })
        .then(res=>setInfo(res.data))
        .catch(error=>console.log(error))
    },[id]);

    const followerList = info.length!==0 ? info&&info.map(profileElement => (
        <ProfileCard profileElement={profileElement} key={profileElement.id}/>
    )):<div>팔로워가 없습니다</div>

    return (
        <div className="Follower">
            <div className="Follower-container">
                <div className="Follower-list">
                <h2 style={{marginBottom:'25px', marginLeft: '15px'}}>Follower</h2>
                    {/* <p className='input'><input type="search" name='search' onChange={searchChange} value={inputData} placeholder='누리 찾기'/></p> */}
                    <div className='list'>
                        {followerList}
                    </div>
                </div>
            </div>
        </div>
    );
}
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { user } from '../redux/user';
import { useParams } from 'react-router-dom';
export { Profile };

function Profile() {
    const [info, setInfo] = useState({
        id: '',
        nickname: '', 
        background_image: '',
        profile_image: '',
        self_intro: '',
        user: '',
        slug: ''
    });

    let { profileUsername } = useParams();
    profileUsername = localStorage.getItem('username');
    const authentication = useSelector((state) => state.authenticate.value) //authentication.isAuthenticated 사용
    const userProfile = useSelector((state) => state.user.value)
    const dispatch = useDispatch()
    const token = localStorage.getItem('token');
    
    useEffect(()=>{
        axios.get(`/accounts/profile/detail/${profileUsername}`, {
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type':'application/json'
            },  
        })
        .then(function(res){
            setInfo(res.data)
        })
        .catch(error=>console.log(error))
    }, [profileUsername, token]);


    useEffect(()=>{
        dispatch(user({
            id: info.id,
            nickname: info.nickname, 
            background_image: info.background_image,
            profile_image: info.profile_image,
            self_intro: info.self_intro,
            user: info.user,
            slug: info.slug
        }))
    }, [info, dispatch])
    const page_hosturl = 'https://'+window.location.hostname

    return (
        <div className="Profile">
            <div className="Profile-container">
                <div className='background-image'>
                    <img src={`${page_hosturl}${userProfile.profile_image}`} alt="profile-preview"  width={100} height={100} />
                </div>
                <div className='profile-image'>
                    <img src={`${page_hosturl}${userProfile.profile_image}`} alt="profile-preview"  width={100} height={100} />
                </div>
                <button className='profile-edit'>프로필 수정</button>
                <div className='profile-content'>
                    <p className='username'>{profileUsername}</p>
                    <p className='nickname'>{`@${userProfile.nickname}`}</p>
                    <p className='self-intro'>{userProfile.self_intro}</p>
                    <div className='profile-nuri-inform'>
                        <div className='count diary-num'>
                            <p className='num'>132</p>
                            <p className='what'>일기</p>
                        </div>
                        <div className='count diary-num'>
                            <p className='num'>46</p>
                            <p className='what'>팔로잉</p>
                        </div>
                        <div className='count diary-num'>
                            <p className='num'>329</p>
                            <p className='what'>팔로워</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
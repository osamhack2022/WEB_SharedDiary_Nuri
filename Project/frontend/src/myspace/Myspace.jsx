import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { user } from '../redux/user';
import { useParams } from 'react-router-dom';

export {Myspace};

function Myspace() {
    const [info, setInfo] = useState({
        id: '',
        nickname: '', 
        background_image: '',
        profile_image: '',
        self_intro: '',
        user: '',
        slug: ''
    });
    // const { id, nickname, background_image, profile_image, self_intro, user, slug } = info;

    let { profileUsername } = useParams();
    profileUsername = localStorage.getItem('username');
    const authentication = useSelector((state) => state.authenticate.value) //authentication.isAuthenticated 사용
    const userProfile = useSelector((state) => state.user.value)
    const dispatch = useDispatch()
    const token = localStorage.getItem('token');
    // axios.get('/accounts/current', {
    //         headers: {
    //             'Authorization': `token ${token}`,
    //             'Content-Type':'application/json'
    //         },
            
    //     })
    //     .then(res=>console.log(res))
    //     .catch(error=>console.log(error))

    // axios.get('/accounts/profile/list', {
    //         headers: {
    //             'Authorization': `token ${token}`,
    //             'Content-Type':'application/json'
    //         },
            
    //     })
    //     .then(res=>console.log(res))
    //     .catch(error=>console.log(error))

    // axios.get('/home/diary')
    //     .then(res=>console.log(res))
    //     .catch(error=>console.log(error))
    
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


    return (
        <div className="Myspace">
            <div className="Mydiary">
                <div className='ProfileDetail'>
                    <p>프로필 화면 만들거다</p>
                    <div>
                        <p>아마 유저네임: {profileUsername}</p>
                        <p>아마 닉네임: {userProfile.nickname}</p>
                        <p>아마 자기소개: {userProfile.self_intro}</p>
                        <div>
                            <p>아마사진: </p>
                            <div className='profile-preview'>
                                <img src={userProfile.profile_image} alt="profile-preview"  width={100} height={100} />
                            </div>
                        </div>
                        <p>기타 등등</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
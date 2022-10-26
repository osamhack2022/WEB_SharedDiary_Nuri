import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { user } from '../redux/user';
import { useParams, useLocation, Link } from 'react-router-dom';
import { DiaryShelf } from '../diary';

export { Profile };

function Profile() {
    const [info, setInfo] = useState({
        id: '',
        nickname: '', 
        background_image: '',
        profile_image: '',
        self_intro: '',
        user: '',
        slug: '',
        username: ''
    });

    let { userid } = useParams();
    // profileUsername = localStorage.getItem('username');
    const authentication = useSelector((state) => state.authenticate.value) //authentication.isAuthenticated 사용
    const userProfile = useSelector((state) => state.user.value)
    const dispatch = useDispatch()
    const token = localStorage.getItem('token');
    // const id = localStorage.getItem('userid');
    // userid = id

    const location = useLocation();
    const id = location.state.id
    
    useEffect(()=>{
        axios.get(`/accounts/profile/detail/${id}`, {
            params: {
                id: id
            },  
        })
        .then(function(res){
            setInfo(res.data)
        })
        .catch(error=>console.log(error))
    }, [id]);


    useEffect(()=>{
        dispatch(user({
            id: info.id,
            nickname: info.nickname, 
            background_image: info.background_image,
            profile_image: info.profile_image,
            self_intro: info.self_intro,
            user: info.user,
            slug: info.slug,
            username: info.username
        }))
    }, [info, dispatch])
    const page_hosturl = 'https://'+window.location.hostname
    const profile_image = userProfile.profile_image

    // console.log(info)

    return (
        <div className="Profile">
            <div className="Profile-container">
                <div className='background-image'>
                    <img src={`${page_hosturl}${userProfile.background_image}`} alt="profile-preview"  width={100} height={100} />
                </div>
                
                <div className='profile-content'>
                    <div className='image-and-edit'>
                        <div className='profile-image'>
                            { profile_image === null ? 
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile-preview"/>:
                            <img src={`${page_hosturl}${userProfile.profile_image}`} alt="profile-preview"/>
                            }
                        </div>
                        <div className='profile-inform'>
                            <p className='profile-edit'><input type="submit" value='Edit profile'/></p>
                            <p className='nickname'><strong>{userProfile.nickname}</strong></p>
                            <p className='username'>{`@${userProfile.username}`}</p>
                            <p className='self-intro'>{userProfile.self_intro}</p>
                        </div>
                        
                    </div>

                    <div className='profile-nuri-inform'>
                        <a href="">
                            <div className='count diary-num'>
                                <p className='num'>132</p>
                                <p className='what'><strong>일기</strong></p>
                            </div>
                        </a>
                        <Link to='/following/list' state={{id:userProfile.id}}>
                            <div className='count diary-num'>
                                <p className='num'>46</p>
                                <p className='what'><strong>팔로잉</strong></p>
                            </div>
                        </Link>
                        <Link to='/follower/list' state={{id:userProfile.id}}>
                            <div className='count diary-num'>
                                <p className='num'>329</p>
                                <p className='what'><strong>팔로워</strong></p>
                            </div>
                        </Link>
                    </div>
                </div>
                <DiaryShelf idProps={id}/>
            </div>
        </div>
    );
}
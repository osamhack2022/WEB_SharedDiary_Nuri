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
    const username = localStorage.getItem('username');
    
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
            {/* <div className="Myprofile">
                <div className="ProfileDetail">
                    <div className="background-img">
                        <img src={require("../testimg/testbackground.png")}/>
                        <div className="profile-img">
                            <img src={require("../testimg/testprofile.png")}/>
                        </div>
                    </div>
                    <div className="UserInfo">
                        <p>profileUsername</p>
                        <p>userProfile.nickname</p>
                        <p>자기소개: userProfile.self_intro</p>
                    </div>
                </div>
                <div className="TimeLine">
                    <div className="NullSpace"></div>
                    <div className="MydiaryTimeline">
                        <div className="TimelineProfile">
                            <div className="TimelineProfile-img">
                                <img src={require("../testimg/testbackground.png")}/>
                            </div>
                            <div className="TimelineProfileDetail">
                                <p>닉네임userProfile.nickname</p>
                                <p>profileUsername</p>
                            </div>
                        </div>
                        <div className="TimelineContent">
                            <div className="TimelineContentNull"></div>
                            <div classNanme="TimelineContentDetail">
                                <div className="TimelinecontentTitle">
                                    <p>제목입니다</p>
                                </div>
                                <div className="TimelineContent-img">
                                    <img src={require("../testimg/testbackground.png")}/>
                                </div>
                                <div className="TimelineContentWriting">
                                    <p>내용입니다.</p>
                                    <p>가나다라마바사아자차카타하213213213213213213213213123</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MydiaryList">
            </div>    */}
        </div>
    );
}
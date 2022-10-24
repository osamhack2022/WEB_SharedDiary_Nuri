import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import './components.css';
import { 
    BsStarFill, BsStar,
    BsHeartFill, BsHeart,
    BsChat,
    BsEye, BsEyeSlash
} from "react-icons/bs";
export { Diary };

function Diary(props) {
    const page_hosturl = 'https://'+window.location.hostname
    const diary_cover = props.diaryElement.image
    console.log(props.diaryElement)
    //작성자프로필상태관리임
    const id =props.diaryElement.writer_pk
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
    console.log(info)

    return (
        <Link to='/diary/detail' state={{props: props.diaryElement}}>
            <div className="Diary">
                <div className='card'>
                    <div className='diary-profile' style={{backgroundColor:"white"}}>
                        <div className='diary-profile-img'>
                            <img src={`${page_hosturl}${diary_cover}`} alt="diaryCover"  width={100} height={100} />
                        </div>
                        <div className='diary-detail'>
                            <div className='diary-profile-info'>
                                <p>{props.diaryElement.title}</p>
                                <div dangerouslySetInnerHTML={{ __html: props.diaryElement.content }}></div>
                                <p>{props.diaryElement.note}</p>
                                <p>{props.diaryElement.writer}</p>
                                <p>{props.diaryElement.writer_pk}</p>
                                <p>작성자 username: {info.username}</p>
                                <p>작성자 nickname: {info.nickname}</p>
                            </div>
                            {diary_cover!==null?
                            <div className="diary-img">
                                <img src={`${page_hosturl}${diary_cover}`} alt="diaryCover"  width={100} height={100} />
                            </div>:""
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </Link> 
    );
}


/* <div className="diary-data">
                    <p>2022년 3월 30일</p>
                </div>
                <div className='diary-content'>
                    <div className='diary-content-p'>
                        <p className='title'>To the MOOOOOON!</p>
                        <p className='subtitle'>도지코인 트레이딩 기록중</p>
                    </div>
                    <div className='diary-content-star' style={{marginRight:".5rem"}}>
                        <BsStar/>
                    </div>
                </div>
                <div className='diary-reaction'>
                    <div className='icon diary-reaction-likes'>
                        <BsHeart/>
                        <p>14</p>
                    </div>
                    <div className='icon diary-reaction-comments'>
                        <BsChat/>
                        <p>6</p>
                    </div>
                    <div className='icon diary-reaction-views'>
                        <BsEye/>
                        <p>59</p>
                    </div>
                </div> */
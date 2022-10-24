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
        <Link to='/diary/detail' state={{props: props.diaryElement, profileprops:info}}>
            <div className='Diary'>
                <div className='Diary-container'>
                    <div className='profile'>
                        <div className='image'>
                            {info.profile_image!==null?
                            <img src={`${page_hosturl}${info.profile_image}`} alt="diaryCover"  width={100} height={100} />
                            :<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile-preview"/>}
                        </div>
                        <div className='name'>
                            <p className='nickname'>{info.nickname}</p>
                            <p className='username'>{`@${info.username}`}</p>
                        </div>
                    </div>
                    <div className='diary-content'>
                        <p className='title'>{props.diaryElement.title}</p>
                        <div className='content' dangerouslySetInnerHTML={{ __html: props.diaryElement.content }}></div>
                        {diary_cover!==null?
                        <div className="image">
                            <img src={`${page_hosturl}${diary_cover}`} alt="diaryCover"  width={100} height={100} />
                        </div>:""} 
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
                    </div>
                </div>
            </div>
        </Link> 
    );
}
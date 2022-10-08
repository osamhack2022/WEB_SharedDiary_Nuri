import { useState, useRef } from 'react';
import { useSelector } from 'react-redux'
import axios from "axios";
export { ProfileCreate, ProfileDetail }

function ProfileCreate() {
    const [info, setInfo] = useState({
        nickname: '',
        profileImg: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        backImg: '',
        self_intro: ''
    });
    const fileInput = useRef(null)
    const {nickname, profileImg, backImg, self_intro} = info; // 비구조화할당

    const onChange = e => {
        const {value,name} = e.target;
        setInfo({
            ...info,
            [name]:value
        });
    };

    return (
        <div className="ProfileCreate" style={{textAlign:"center"}}>
            프로필생성창
            <div className="ProfileImgBox">
                <input 
                    type="file" 
                    accept="image/jpg, image/jpeg, image/png" 
                    ref={fileInput}
                    // style={{display: 'none'}}
                />
            </div>
            <div className="BackImgBox">
                <input 
                    type="file" 
                    accept="image/jpg, image/jpeg, image/png" 
                    ref={fileInput}
                    // style={{display: 'none'}}
                />
            </div>
            <input type="text" name="nickname" value={nickname} onChange={onChange} placeholder="nickname"/>
            <input type="text" name="self_intro" value={self_intro} onChange={onChange} placeholder="self_intro"/>
            <div className='profile-preview'>
                <img src={profileImg} alt="profile-preview"  width={100} height={100} />
            </div>
            <div className='background-preview'>
                <img src={backImg} alt="background-preview" />
            </div>
        </div>
    );
}

function ProfileDetail() {
    const user = useSelector((state) => state.user.value)
    const onSubmit = () => {
        const url = "/accounts/profile";
        axios
            .get(url)
            .then(res => console.log(res))
            .catch(error => console.log('에러다'+error))
    }
    return (
        <div className='ProfileDetail'>
            <div>
                프로필 콘솔 테스트
                <button onClick={onSubmit}>버튼</button>
            </div>
            <p>프로필 화면 만들거다</p>
            <div>
                <p>아마 유저네임: {user.username}</p>
                <p>아마 닉네임: {user.nickname}</p>
                <p>아마 자기소개: {user.selfIntro}</p>
                <div>
                    <p>아마사진: </p>
                    <div className='profile-preview'>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile-preview"  width={100} height={100} />
                    </div>
                </div>
                <p>기타 등등</p>
            </div>

        </div>
    );
}
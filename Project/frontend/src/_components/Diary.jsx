import dev_img_diary from '../static/img/dev_test/doge-goorm.jpg';
import dev_img_profile from '../static/img/dev_test/프로필이미지.png';
import '../static/css/diary.css';
import { 
    BsStarFill, BsStar,
    BsHeartFill, BsHeart,
    BsChat,
    BsEye, BsEyeSlash
} from "react-icons/bs";
export { Diary };

function Diary() {
    return (
        <div className="Diary">
            <div className='card'>
                <div className='diary-profile'>
                    <div className='diary-profile-img'>
                        <img src={dev_img_profile} alt="profile-img" />
                    </div>
                    <div className='diary-profile-info'>
                        <p>닉네임</p>
                        <p style={{fontSize:".9rem", color:"#536471"}}>@duckracoon</p>
                    </div> 
                </div>
                <p>2022년 3월 30일</p>
                <div className="diary-img">
                    <img src={dev_img_diary} alt="diary-img" />
                </div>
                <div className='diary-content'>
                    <div className='diary-content-p'>
                        <p className='title'>To the MOOOOOON!</p>
                        <p className='subtitle'>도지코인 트레이딩 기록중</p>
                    </div>
                    <div className='diary-content-star'>
                        <BsStar/>
                    </div>
                </div>
                <p>일기 확인하기</p>
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
    );
}
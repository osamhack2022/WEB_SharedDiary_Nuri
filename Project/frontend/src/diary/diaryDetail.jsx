import './diary.css'
import { 
    BsStarFill, BsStar,
    BsHeartFill, BsHeart,
    BsChat,
    BsEye, BsEyeSlash
} from "react-icons/bs";
export {DiaryDetail};

function DiaryDetail() {
    return (
        <div className="DiaryDetail">
            <div className="DiaryDetail-container">
                <div className='cover-area'>
                    <p className='data'>2022년 10월 24일</p>
                    <div>
                        <p className='title'>이 숯도 한때는</p>
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
                    <div>
                        <img src="" alt="일기커버이미지" />
                    </div>
                </div>
                <div className='content-area'>
                    콘텐트 넣기
                </div>
            </div>          
        </div>
    );
}

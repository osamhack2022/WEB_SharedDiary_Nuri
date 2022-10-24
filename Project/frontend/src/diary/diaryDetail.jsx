import { useLocation } from 'react-router-dom';
import './diary.css'
import { 
    BsStarFill, BsStar,
    BsHeartFill, BsHeart,
    BsChat,
    BsEye, BsEyeSlash
} from "react-icons/bs";
export {DiaryDetail};

function DiaryDetail() {
    const location = useLocation();
    const diaryData = location.state.props
    const profileData = location.state.profileprops
    const page_hosturl = 'https://'+window.location.hostname
    console.log(profileData)
    // content: "<h2 class=\"ql-align-center\"><strong>서시</strong></h2><p class=\"ql-align-center\"><strong>윤동주</strong></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\">죽는 날까지 하늘을 우러러</p><p class=\"ql-align-center\">한 점 부끄럼이 없기를,</p><p class=\"ql-align-center\">잎새에 이는 바람에도</p><p class=\"ql-align-center\">나는 괴로워했다.</p><p class=\"ql-align-center\">별을 노래하는 마음으로</p><p class=\"ql-align-center\">모든 죽어 가는 것을 사랑해야지</p><p class=\"ql-align-center\">그리고 나한테 주어진 길을</p><p class=\"ql-align-center\">걸어가야겠다.</p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\">오늘 밤에도 별이 바람에 스치운다.</p><p class=\"ql-align-center\"><br></p><p><br></p>"
    // reated_at: "2022-10-24T03:31:20.568163Z"
    // id: 1
    // image: null
    // note: "일기장"
    // title: "서시 - 윤동주"
    // to_open: true
    // updated_at: "2022-10-24T03:31:20.568192Z"
    return (
        <div className="DiaryDetail">
            <div className="DiaryDetail-container">
                <div className='cover-area'>
                    <p className='data'>2022년 10월 24일</p>
                    <div>
                        <p className='title'>{diaryData.title}</p>
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
                    <img src={`${page_hosturl}${diaryData.image}`} alt="diaryCover"  width={100} height={100} />
                    </div>
                </div>
                <div className='content-area'>
                    <div dangerouslySetInnerHTML={{ __html: diaryData.content }}></div>
                </div>
            </div>          
        </div>
    );
}

import { Link } from 'react-router-dom';
import './components.css';
import { 
    BsStarFill, BsStar,
    BsHeartFill, BsHeart,
    BsChat,
    BsEye, BsEyeSlash
} from "react-icons/bs";
export { Diary };

// {
//     "content":res.data[0].content,
//     "created_at":res.data[0].created_at,OOO
//     "id":res.data[0].id,
//     "image":res.data[0].image,
//     "title":res.data[0].title,
//     "to_open":res.data[0].to_open,OOO
//     "updated_at":res.data[0].updated_at,OOO
//      writer
//     프로필 이미지 필요
//   }
function Diary(props) {
    return (
        <Link to='/diary/detail' state={{props: props.diaryElement}}>
            <div className="Diary">
                <div className='card'>
                    <div className='diary-profile' style={{backgroundColor:"white"}}>
                        <div className='diary-profile-img'>
                            {/* <img src={testData[0].image} alt="profile-img" /> */}
                        </div>
                        <div className='diary-detail'>
                            <div className='diary-profile-info'>
                                <p>{props.diaryElement.title}</p>
                                <div dangerouslySetInnerHTML={{ __html: props.diaryElement.content }}></div>
                                <p>{props.diaryElement.note}</p>
                                <p>{props.diaryElement.writer}</p>
                                {/* <h4>{testData.nickname}</h4> */}
                                {/* <p style={{fontSize:".9rem", color:"#536471"}}>{testData[0].username}</p>
                                <p style={{fontSize:".9rem", color:"#536471"}}>{testData[0].created_at}</p>
                                <p style={{fontSize:".9rem", color:"#536471"}}>{testData[0].updated_at}</p>
                                <p style={{fontSize:".9rem", color:"#536471"}}>{testData[0].to_open}</p> */}
                            </div>
                            <div className="diary-img">
                                {/* <img src={testData[0].image} alt="diary-img" /> */}
                            </div>
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
import randingImg from '../static/img/diary_black.jpg';
import './randingpage.css'
import {Login} from '../account/Login';
import { Link } from 'react-router-dom';
export { RandingPage };

function RandingPage() {
    return (
      <div className='RandingPage'>
        <div className="RandingPage-container">
          <div className="randing-image">
            <img src={randingImg} alt="randingImg"/>
          </div>
          <div className="login-area">
            로그인구역만들예정
            <Login/>
            <p><Link to="/accounts/signup">회원가입 바로가기</Link></p>

          </div>


        </div>
        RandingPage<br/>
        랜딩페이지
      </div>
    );
  }
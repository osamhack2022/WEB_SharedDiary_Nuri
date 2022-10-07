import randingImg from '../static/img/diary_black.jpg';
import './randingpage.css'
import {Login} from '../account/Login';
import { Link } from 'react-router-dom';
import { Diary } from '../_components';
export { RandingPage };

function RandingPage() {
    return (
      <div className='RandingPage'>
        <div className="RandingPage-container">
          <div className="diary-area randingpage-area">
            <Diary/>
            <Diary/>
          </div>
          <div className="recommend-area randingpage-area" style={{backgroundColor:"red"}}>
              추천일기장 구역
          </div>
        </div>
      </div>
    );
  }
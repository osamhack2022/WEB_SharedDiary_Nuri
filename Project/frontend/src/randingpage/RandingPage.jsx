import './randingpage.css'
import { Diary } from '../_components';
export { RandingPage };
import dev_img_profile from '../static/img/dev_test/프로필이미지.png';
import dev_img_diary from '../static/img/dev_test/doge-goorm.jpg';
import axios from "axios";
import React, { useState, useEffect } from 'react';
 
export default function RandingPage(props) {
  const [variable, setVariable] = useState();
  useEffect(() => {    
    axios.get('/home/diary')
    .then(res => {
      setVariable(res.data);
    })
  .catch(error=>console.log(error))
  }, []);
  console.log(variable)

  return (
    <div className='RandingPage'>
      <div className="RandingPage-container">
        <div className="diary-area randingpage-area">
          <Diary/>
        </div>
        <div className="recommend-area randingpage-area" style={{backgroundColor:"red"}}>
            추천일기장 구역
        </div>
      </div>
    </div>
  );
}
  
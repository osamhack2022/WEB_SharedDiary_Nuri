import './randingpage.css'
import { Diary } from '../_components';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { diary } from '../redux/diary';

export { RandingPage };
 
function RandingPage(props) {
  const diarySelector = useSelector((state) => state.diary.value)
  const dispatch = useDispatch()
  const [variable, setVariable] = useState();
  useEffect(() => {    
    axios.get('/home/diary')
    .then(res => {
      setVariable(res.data);
    })
    .catch(error=>console.log(error))
  }, []);

  useEffect(()=>{
    dispatch(diary(variable))
  }, [dispatch, variable])

  const diaryList = diarySelector&&diarySelector.map(diaryElement => (
    <Diary diaryElement={diaryElement} key={diaryElement.id}/>
  ))

  // content: "일기ㅣㅣㅣㅁ닝리"
  // created_at: "2022-10-16T05:51:03.196108Z"
  // id: 2
  // image: null
  // note: 1
  // title: "또 일기"
  // to_open: true
  // updated_at: "2022-10-16T05:51:03.196135Z"
  // writer: 1

  return (
    <div className='RandingPage'>
      <div className="RandingPage-container">
        <div className="diary-area randingpage-area">
          {diaryList}
        </div>
        <div className="recommend-area randingpage-area" style={{backgroundColor:"red"}}>
            추천일기장 구역
        </div>
      </div>
    </div>
  );
}
  
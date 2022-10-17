import { useLocation, Link } from 'react-router-dom';
import { Diary } from '../_components';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { diary } from '../redux/diary';

export {DiaryList}

function DiaryList(){
    const location = useLocation();
    const note_id = location.state.NoteProps.noteElement.id

    const diarySelector = useSelector((state) => state.diary.value)
    const dispatch = useDispatch()
    const [variable, setVariable] = useState();

    useEffect(()=>{
        axios.get('/home/note/diary-list',{
            params:{
                id: note_id
            }
        })
        .then(res=>{
            setVariable(res.data);
        })
        .catch(error=>console.log(error));
    }, [note_id])

    useEffect(()=>{
        dispatch(diary(variable))
    }, [dispatch, variable])

    const diaryList = diarySelector&&diarySelector.map(diaryElement => (
        <Diary diaryElement={diaryElement} key={diaryElement.id}/>
    ))
    // console.log(diarySelector.length)

    return (
        <div className='DiaryList'>
            <div className='list-container'>
                <Link to='/diary/create' state={{ NoteProps: location.state.NoteProps.noteElement}}>
                    <button>일기쓰기</button>
                </Link>
                <div className='list'>
                    {diaryList}
                </div>          
            </div>
        </div>
    );
}
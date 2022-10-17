import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { note } from '../redux/note';

import { Link } from 'react-router-dom';
import axios from "axios";
import './diaryShelf.css'

export {DiaryShelf}

function Note(props) {
    return(
        <Link to='/diary/list' state={{ NoteProps: props}}>
            <div className='Note'>
                <div className='card'>
                    <p>{props.noteElement.title}</p>
                    <p>{props.noteElement.description}</p>
                    <p>{props.noteElement.image}</p>
                </div>
            </div>
        </Link>
        
    );
}

function DiaryShelf() {
    const noteSelector = useSelector((state) => state.note.value)
    const dispatch = useDispatch()
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('userid');

    // get note
    const [myNote, setMyNote] = useState();

    useEffect(() => {    
        axios.get('/home/note', {
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type':'application/json'
            },  
        })
        .then(res => {
          setMyNote(res.data);
        })
        .catch(error=>console.log(error))
    }, [token]);

    useEffect(()=>{
        dispatch(note(myNote))
    }, [dispatch, myNote]);

    // console.log(noteSelector[0].data.id);

    const noteList = noteSelector&&noteSelector.map(noteElement => (
        <Note noteElement={noteElement} key={noteElement.id}/>
    ))

    // create note
    const [noteForm, setNoteForm] = useState({
        title: '',
        description: '',
    });

    const {title, description} = noteForm; // 비구조화할당

    const onChange = e => {
        const {value,name} = e.target;
        setNoteForm({
            ...noteForm,
            [name]:value
        });
    };

    const onSubmit = async() => {
        const url = "/home/note/create";
        const userdata = {
            'title': title,
            'description': description,
            'image': null,
            'to_open': true
        };
        const config = {
            headers: {'Authorization': `token ${token}`,}, 
        };
        
        await axios 
            .post(url, userdata, config)
            .then(function (res) {
                console.log(res)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="DiaryShelf">
            노트작성(제목, 설명, 사진)
            <p><input type="text" name="title" value={title} onChange={onChange} placeholder="title"/></p>
            <p><input type="text" name="description" value={description} onChange={onChange} placeholder="description"/></p>
            <button onClick={onSubmit}>button</button>
            <div className='note-grid'>
                {noteList}
            </div>
            
        </div>
    );
}
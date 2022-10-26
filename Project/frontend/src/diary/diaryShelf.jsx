import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { note } from '../redux/note';
import { Link } from 'react-router-dom';
import { BsPatchPlus } from "react-icons/bs";
import axios from "axios";
import styled from "styled-components";
import './diary.css'


export {DiaryShelf}

function Note(props) {
    const page_hosturl = 'https://'+window.location.hostname
    const StyledNoteBackground = styled.div `
        background-image: url(${page_hosturl}${props.noteElement.image});
        border-radius: 1rem;
        background-size: cover;
        background-color: #E9EAEB;
        `;
        
    return(
        <StyledNoteBackground>
            <Link to='/diary/list' state={{ NoteProps: props}} className='NoteA'>
                <div className='Note'>
                    <div className='card'>
                        <p>{props.noteElement.title}</p>
                        <p>{props.noteElement.description}</p>
                    </div>
                </div>
            </Link>
        </StyledNoteBackground>     
    );
}

function DiaryShelf(props) {
    const noteSelector = useSelector((state) => state.note.value)
    const dispatch = useDispatch()
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('userid');

    // get note
    const [myNote, setMyNote] = useState();
    const id = props.idProps;
    useEffect(() => {    
        axios.get('/home/note', {
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type':'application/json'
            },
            params: {
                id: id
            }
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

    // // create note
    // const [noteForm, setNoteForm] = useState({
    //     title: '',
    //     description: '',
    // });

    // const {title, description} = noteForm; // 비구조화할당

    // const onChange = e => {
    //     const {value,name} = e.target;
    //     setNoteForm({
    //         ...noteForm,
    //         [name]:value
    //     });
    // };

    // const onSubmit = async() => {
    //     const url = "/home/note/create";
    //     const userdata = {
    //         'title': title,
    //         'description': description,
    //         'image': null,
    //         'to_open': true
    //     };
    //     const config = {
    //         headers: {'Authorization': `token ${token}`,}, 
    //     };
        
    //     await axios 
    //         .post(url, userdata, config)
    //         .then(function (res) {
    //             console.log(res)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    return (
        <div className="DiaryShelf">
            <div className='DiaryShelf-container'>
                {/* <p><input type="text" name="title" value={title} onChange={onChange} placeholder="title"/></p>
                <p><input type="text" name="description" value={description} onChange={onChange} placeholder="description"/></p>
                <button onClick={onSubmit}>button</button> */}
                <Link exact to='note/create'>
                    <div className='plus'>
                        <BsPatchPlus/>
                        <p style={{marginLeft:'.5rem'}}>일기장 추가하기</p>
                    </div>
                </Link> 
                <div className='note-grid'>
                    {noteList}
                </div> 
            </div> 
        </div>
    );
}
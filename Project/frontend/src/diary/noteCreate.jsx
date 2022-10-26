import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { note } from '../redux/note';
import axios from "axios";
import './diary.css'

export {NoteCreate}

function NoteCreate() {
    // create note
    const token = localStorage.getItem('token');
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
        <div className='NoteCreate'>
            <div className='NoteCreate-container'>
                <p><input type="text" name="title" value={title} onChange={onChange} placeholder="title"/></p>
                <p><input type="text" name="description" value={description} onChange={onChange} placeholder="description"/></p>
                <button onClick={onSubmit}>button</button>
            </div>
        </div>
    );
}


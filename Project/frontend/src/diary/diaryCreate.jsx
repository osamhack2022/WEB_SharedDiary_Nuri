import React, { useState } from 'react';
import axios from "axios";

export {DiaryCreate}

function DiaryCreate() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('userid');
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
        const url = "/home/diary/create";
        const userdata = {
            'writer': 1,
            'title': title,
            'description': description,
            'image': null,
            'to_open': true
        };
        const config = {
            headers: {
                'Authorization': `token ${token}`,
                // 'Content-Type':'application/json'
            }, 
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
        <div className="DiaryCreate">
            노트작성(제목, 설명, 사진)
            <p><input type="text" name="title" value={title} onChange={onChange} placeholder="title"/></p>
            <p><input type="text" name="description" value={description} onChange={onChange} placeholder="description"/></p>
            <button onClick={onSubmit}>button</button>
        </div>
    );
}
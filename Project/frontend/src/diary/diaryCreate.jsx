import React, { useState } from 'react';
import { useLocation} from 'react-router-dom';
import axios from "axios";
export {DiaryCreate}

function DiaryCreate(){
    const location = useLocation();
    const note_id = location.state.NoteProps.id
    const token = localStorage.getItem('token');
    console.log(note_id)

    const [diaryForm, setDiaryForm] = useState({
        title: '',
        content: '',
    });

    const {title, content} = diaryForm; // 비구조화할당

    const onChange = e => {
        const {value,name} = e.target;
        setDiaryForm({
            ...diaryForm,
            [name]:value
        });
    };

    const onSubmit = async() => {
        const url = "/home/diary/create";
        const userdata = {
            'id': note_id,
            'title': title,
            'content': content,
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
        <div className="DiaryCreate">
            일기장안에서 일기생성
            <p><input type="text" name="title" value={title} onChange={onChange} placeholder="title"/></p>
            <p><textarea type="text" name="content" onChange={onChange}>{content}</textarea></p>
            <button onClick={onSubmit}>button</button>
        </div>
    );
}
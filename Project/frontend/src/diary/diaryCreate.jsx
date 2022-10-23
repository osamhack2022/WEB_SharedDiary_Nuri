import React, { useState } from 'react';
import { useLocation} from 'react-router-dom';
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export {DiaryCreate}

function DiaryCreate(){
    const location = useLocation();
    const note_id = location.state.NoteProps.id
    const token = localStorage.getItem('token');

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onChangeTitle = e => {
        setTitle(e.target.value);
        // console.log(title);
    };
    const onChangeContent = e => {
        setContent(e);
        // console.log(content);
    }

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

    // Quil 설정
    const toolbarOptions = [
        ["link", "image", "video"],
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
    ]; 
    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "align",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "background",
        "color",
        "link",
        "image",
        "video",
        "width",
    ];
    const modules = {
        toolbar: {
          container: toolbarOptions,
        },
    };


    return (
        <div className="DiaryCreate">
            일기장안에서 일기생성
            <p><input type="text" name="title" value={title} onChange={onChangeTitle} placeholder="title"/></p>
            <div className='quill-textarea' style={{padding:"5rem"}}>
                <ReactQuill theme="snow" value={content||''} onChange={onChangeContent} modules={modules} formats={formats}
                    style={{height:"450px"}}
                />
            </div>
            {/* <p><textarea type="text" name="content" onChange={onChange}>{content}</textarea></p> */}
            <button onClick={onSubmit}>button</button>
            
            
        </div>
    );
}
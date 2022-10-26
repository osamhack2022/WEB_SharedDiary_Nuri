import React, { useState } from 'react';
import { useLocation} from 'react-router-dom';
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './diary.css';
export {DiaryCreate}

function DiaryCreate(){
    const location = useLocation();
    const note_id = location.state.NoteProps.id
    const token = localStorage.getItem('token');

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageSrc, setImageSrc] = useState('');

    const onChangeTitle = e => {
        setTitle(e.target.value);
        // console.log(title);
    };
    const onChangeContent = e => {
        setContent(e);
        // console.log(content);
    }
    
    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload =() => {
                setImageSrc(reader.result);
                resolve();
            };
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
            <div className='DiaryCreate-container'>
                <p className='title'><input type="text" name="title" value={title} onChange={onChangeTitle} placeholder="제목을 입력하세요"/></p>
                <div className='cover-input'>
                    {/* <div className='description'>
                        <div className='text'>
                            <p>일기커버이미지</p>
                            <p>오늘을 장식할 <br/>
                            이미지를 등록해주세요!</p>
                        </div>
                        <div className='imageBtn'>
                            <p>
                                <input type="file" onChange={(e) => {
                                    encodeFileToBase64(e.target.files[0]);
                                }} />
                            </p>
                        </div>
                    </div> */}
                    {/* <div className='image-preview'>
                        {imageSrc && <img src={imageSrc} alt="preview-img"/>}
                    </div> */}
                </div>
                <div className='quill-textarea'>
                    <ReactQuill theme="snow" value={content||''} onChange={onChangeContent} modules={modules} formats={formats}/>
                </div>
                <p className='submit'><button onClick={onSubmit}>button</button></p>
            </div>  
        </div>
    );
}
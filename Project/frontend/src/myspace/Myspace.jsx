import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { user } from '../redux/user';
import { useParams } from 'react-router-dom';
import { Profile } from '../account';
import './myspace.css'
export {Myspace};

function Myspace() {

    return (
        <div className="Myspace">
            <div className='Myspace-profile-cp'>
                <Profile/>
            </div>
            <div className='Nuri-list'>
                <h2>당신이 좋아할 누리들</h2>
                <div className='list'>
                    리스트 컴포넌트 만들어 넣기
                </div>
            </div>          
        </div>
    );
}
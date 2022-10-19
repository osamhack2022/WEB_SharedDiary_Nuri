import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { user } from '../redux/user';
import { useParams } from 'react-router-dom';
import { Profile } from '../account';
export {Myspace};

function Myspace() {

    return (
        <div className="Myspace">
            <Profile/>
        </div>
    );
}
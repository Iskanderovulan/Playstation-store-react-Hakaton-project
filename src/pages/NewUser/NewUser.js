import React, {useEffect, useState} from 'react';
import './NewUser.css'
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';

const NewUser = () => {

    const [userPage,setUserPage] = useState([])

    const cartFromLocalStorage = () => {
        let json = JSON.parse(localStorage.getItem('spiderman'))
        setUserPage(json)
    }

    const logOut = () => {
        localStorage.clear();
        window.location.reload();
    }

    useEffect(()=>{
        cartFromLocalStorage()
    },[])

    return (

        <div className={'newuser'}>
            <div className="container">
                <h2>{userPage?.username}</h2>
                <h2>{userPage?.email}</h2>
                <button onClick={logOut}><NavLink exact to={'/'}>Log out</NavLink></button>
            </div>
        </div>
    );
};

export default NewUser;
import React, {useEffect, useState} from 'react';
import './ModalStation.css'
import {NavLink} from 'react-router-dom'


const ModalStation = (props) => {
    const [storage, setStorage] = useState([])

    const cartFromLocalStorage = () => {
        let json = JSON.parse(localStorage.getItem('modal'))
        setStorage(json)
    }

    useEffect(() => {
        cartFromLocalStorage()
    }, [])
    return (
        <div className={'modalStation'}>
            <div className="container">

<div className="modalStation__wrap">
                <img src={storage.img} alt=""/>
</div>


                <div className="modalStation__wrap">
                    <h2>{storage.name}</h2>
                    <h2>{storage.price + ' сом'}</h2>
                </div>
                <div className="modalStation__wrap">
                <NavLink exact to={'/goods'}><button className={''}>Перейти к товарам</button></NavLink>
                </div>
            </div>
        </div>


    );
}

export default ModalStation;
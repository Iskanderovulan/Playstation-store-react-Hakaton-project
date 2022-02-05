import React, {useEffect, useState} from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";
import logoPs5 from '../../img/logo-ps.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {

    const [burger, setBurger] = useState(false);

    const burgerToggle = () => {
        setBurger(!burger);
    };

    const [newUser,setNewUser] = useState([])
    const [isInitialRender, setIsInitialRender] = useState(true)


    const newUserStorage = () => {
        let json = JSON.parse(localStorage.getItem('spiderman'))
            setNewUser(json)
    }

    useEffect(()=>{
        if (isInitialRender) {
            setIsInitialRender(false);
            newUserStorage()
        }

    },[newUser])
    console.log(newUser)


    return (
        <header className={'header'}>
            <div className="container">
                <div className="header__flex">
            <img src={logoPs5} alt=""/>
                    <div className="hamburger"><MenuIcon fontSize={'large'} onClick={burgerToggle}/></div>

                    <ul className={burger ? "show" : "header__first"} >
                <li><NavLink exact to={'/'}>Главная</NavLink></li>
                <li><NavLink exact to={'/goods'}>Товары</NavLink></li>
                <li><NavLink exact to={'/about'}>О нас</NavLink></li>
                <li><NavLink exact to={'/address'}>Адрес</NavLink></li>
                        <li><NavLink exact to={'/ShowGoods'}>Заказы</NavLink></li>
            </ul>
            <ul className={'header__second'}>
                <li><NavLink exact to={'/basket'}> <ShoppingCartIcon fontSize="large"/><p>Корзина</p></NavLink></li>
                <li><NavLink exact to={newUser?.response? '/NewUser': '/login'}><AccountCircleIcon className={'header__enter'} fontSize="large"/><p>{newUser?.response? newUser.username: 'Логин'}</p></NavLink></li>

            </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
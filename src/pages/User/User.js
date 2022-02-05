import React from 'react';
import './User.css'
import {NavLink} from "react-router-dom";

const User = () => {
    return (
   <section className="user">
       <div className="container">
           <div className="user__wrap">
            <div><NavLink activeClassName="selected" exact to={'/login'}>Войти</NavLink></div>
            <div><NavLink activeClassName="selected" exact to={'/register'}>Регистрация</NavLink></div>
           </div>
       </div>
   </section>

    );
};

export default User;
// useEffect(()=>{
//     cartFromLocalStorage()
// },[])
import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";



const Station = (props) => {

    useEffect(()=>{
        localStorage.setItem('station',JSON.stringify(props.cart))
    },[props.cart])

    return (
        <div className="goods__main">
            <div className={'row'}>

                {
                    props.data.games.map((el, id) => {
                        return (
                            <div key={id} className="col-3">
                                <div className={'goods__box'} >
                                    <NavLink exact to='/modal' onClick={() => localStorage.setItem('modal', JSON.stringify(el))} ><img className={'goods'} src={el.img} alt="" /></NavLink>

                                    <div className="goods__wrap">
                                        <p className={'goods__name'}>{el.name}</p>
                                        <p>{el.price + ' сом'}</p>

                                    </div>
                                    <button
                                        disabled={props.disable.indexOf(el.id) !== -1}
                                        onClick={() => {props.addToCart(el, el.id)}}
                                        style={{ color: props.disable.indexOf(el.id) !== -1? 'black': 'white'}}
                                    >
                                        {props.disable.indexOf(el.id) !== -1?'Добавлено':'Купить'}


                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}


export default Station
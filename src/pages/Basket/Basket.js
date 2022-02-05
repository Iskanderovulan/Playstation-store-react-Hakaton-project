import React, {useState, useEffect} from 'react';
import './Basket.css'
import {NavLink} from "react-router-dom";
import SimpleModal from "../../components/Modal/SimpleModal";


const Basket = () => {

    const [isInitialRender, setIsInitialRender] = useState(true)

    const [storage, setStorage] = useState([])
    const [total, setTotal] = useState(0)
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        if (isInitialRender) {
            setIsInitialRender(false);
            cartFromLocalStorage()
        }
        calculateTotal()
        quantityTotal()
    }, [total, quantity, storage, isInitialRender])

    const cartFromLocalStorage = () => {
        // setStorage([...storage.map((el) => el)])
        let json = JSON.parse(localStorage.getItem('station'))
        setStorage(json)
    }


    const removeItem = (id) => {
        setStorage([...storage.filter((el) => el.id !== id)])
        let json = JSON.parse(localStorage.getItem('station'))
        json = json.filter((el) => el.id !== id)
        localStorage.setItem("station", JSON.stringify(json));
        if (json.length === 0) {
            localStorage.removeItem("station");
        }
    }

    const increaseQuantity = (index) => {

        setStorage(stock => stock.map((el, i) => i === index ? {
            ...el,
            quantity: el.quantity + 1,
        } : el));
        let json = JSON.parse(localStorage.getItem('station'))
        json = json.map((el, i) => i === index ? {...el, quantity: el.quantity + 1} : el)
        localStorage.setItem("station", JSON.stringify(json));


    };


    const decreaseQuantity = index => {
        setStorage(stock => stock.map((el, i) => i === index ? {...el, quantity: Math.max(1, el.quantity - 1),} : el));
        let json = JSON.parse(localStorage.getItem('station'))
        json = json.map((el, i) => i === index ? {...el, quantity: Math.max(0, el.quantity - 1),} : el)
        localStorage.setItem("station", JSON.stringify(json));
    };

    const clearCart = (event) => {
        setStorage([])
        localStorage.setItem("station", JSON.stringify([]));
    }

    const calculateTotal = () => {
        let result = storage?.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotal(result)
    }
    const quantityTotal = () => {
        let result = storage?.reduce((total, item) => total + item.quantity, 0);
        setQuantity(result)
    }


    return (


        <div className="basket">
            <div className="container">
                <div className={'basket__space-between'}>
                    <h2>Корзина</h2>
                    <div className={'basket__clear'} onClick={clearCart}>очистить корзину</div>
                </div>
                <div className="row">

                    <div className="col-10">

                        <div className="basket__box">


                            {
                                storage ?
                                    storage?.map((el, id) => {
                                        return (
                                            <div key={id} className="basket__items">
                                                <div className="basket__api">
                                                    <img src={el.img} alt=""/>
                                                    <p className="basket__descr">{el.name}</p>
                                                    <p>{el.price + ' сом'}</p>
                                                </div>
                                                <div className="basket__quantity">
                                                    <p className={'basket__circle'}
                                                       onClick={() => decreaseQuantity(id)}>-</p>
                                                    <p>{el.quantity}</p>
                                                    <p className={'basket__circle'}
                                                       onClick={() => increaseQuantity(id)}>+</p>
                                                </div>
                                                <p><span className={'basket__price'}>{el.price * el.quantity}</span> сом
                                                </p>
                                                <p className={'basket__delete'}
                                                   onClick={() => removeItem(el.id)}>удалить</p>
                                            </div>
                                        )
                                    })
                                    :
                                    <div>
                                        <h2>В корзине пока пусто</h2>
                                        <span className={'basket__toMain'}><NavLink exact
                                                                                    to={'/'}>Перейти на главную</NavLink></span>
                                    </div>
                            }

                        </div>
                    </div>
                    <div className="col-3">
                        <div className="basket__total">
                            <div className="basket__flex">
                                <p className="basket__sum">Итого:</p>
                                <p><span>{total}</span> сом</p>
                            </div>
                            <div className="basket__flex">
                                <p className="basket__quantity">Количество:</p>
                                <p><span>{quantity}</span> шт</p>
                            </div>
                            <SimpleModal storage={storage}>
                            </SimpleModal>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Basket;
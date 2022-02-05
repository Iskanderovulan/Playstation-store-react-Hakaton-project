import React,{useState,useEffect} from 'react';
import './ShowGoods.css'

const ShowGoods = () => {

    const [storage,setStorage] = useState([])

    const cartFromLocalStorage = () => {
        let json = JSON.parse(localStorage.getItem('showGoods'))
        setStorage(json)
    }

    useEffect(()=>{
        cartFromLocalStorage()
    },[])

    return (

        <section className={'showGoods'}>
            <div className="container">
                <h2>Ваши Заказы</h2>
              <div className="row">
                  {
                      storage?
                      storage.map((el, id) => {
                          return (
                              <div key={id} className="col-3">
                                  <div className={'goods__box'} >
                                      <img className={'goods'} src={el.img} alt=""/>
                                      <div className="goods__wrap">
                                          <p className={'goods__name'}>{el.name}</p>
                                          <p>{el.price + ' сом'}</p>
                                      </div>
                                      <p className={'showGoods__quantity'}>Количество: <span>{el.quantity}</span></p>
                                  </div>
                              </div>
                          )
                      })
                          :
                          <h2 className={'showGoods__order'}>Пожалуйста оформите заказ</h2>
                  }
              </div>
            </div>

        </section>
    );
};

export default ShowGoods;
import React,{useState} from 'react';
import './Items.css'
import FullWidthTabs from "./FullWidthTabs/FullWidthTabs";
import {API_Station} from "../../config/Config";
import {NavLink} from "react-router-dom";


const Items = () => {


    // const getGoods = async () =>{
    //     const request = await fetch(API_Station)
    //     const response = await request.json()
    //     console.log(response)
    //     setData(response)
    // }

    const state = {
        station: [
            {id: 1, name: 'Playstaion-3', price: 30000,img:'https://megastore.kg/upload/iblock/6d0/6d02b665b49c041df4d91800cbd8c4f8.jpg',quantity:1},
            {id: 2, name: 'Playstaion-4', price: 40000,img:'https://megastore.kg/upload/iblock/50f/50f1065b9f9bbcaa346cf62d9251e7aa.jpg',quantity:1},
            {id: 3, name: 'Playstaion-5', price: 35000,img:'https://megastore.kg/upload/iblock/100/1007ec80fe9806d14421e934fda7214f.jpg',quantity:1},
            {id: 4, name: 'Playstaion-6', price: 39000,img:'https://megastore.kg/upload/iblock/eeb/eeb6a2d84ba86f953e2924ee3be16452.jpg',quantity:1},
            {id: 5, name: 'Playstaion-7', price: 41000,img:'https://megastore.kg/upload/iblock/766/766afb984b55d9e387da30b43c808e7f.png',quantity:1},
            {id: 6, name: 'Playstaion-8', price: 50000,img:'https://megastore.kg/upload/iblock/20d/20dec433d380de86368649b2e36cc4cb.jpg',quantity:1},
            {id: 7, name: 'Playstaion-9', price: 37000,img:'https://megastore.kg/upload/iblock/f0f/f0fdc0b4cd98a7104bb695540c0ec8bb.png',quantity:1},
            {id: 8, name: 'Playstaion-10', price:35100,img:'https://megastore.kg/upload/iblock/041/04123ee4017030e39b9eb90b22ede635.jpg',quantity:1},
        ],
        joystick: [
            {id: 9, name: 'Pro-max-1', price: 6700,img:'https://megastore.kg/upload/iblock/a8e/a8ef709618f3854139a71b9fc9cd1e62.jpg',quantity:1},
            {id: 10, name: 'high-max-2', price: 7000,img:'https://megastore.kg/upload/iblock/145/145f592cef508104a931097528d32c92.jpeg',quantity:1},
            {id: 11, name: 'def-min-3', price: 4000,img:'https://megastore.kg/upload/iblock/278/278533c60181cf1463438caaa1bda6dd.jpg',quantity:1},
            {id: 12, name: 'def-min-5', price: 7700,img:'https://megastore.kg/upload/iblock/f21/f21e9351bf1278c3a296e1e8dc742c7e.jpg',quantity:1},
            {id: 13, name: 'max-con-2', price: 8800,img:'https://megastore.kg/upload/iblock/306/3062213abedbecdfb8c6058ba8bc0f0e.jpg',quantity:1},
            {id: 14, name: 'lol-yes-4', price: 9000,img:'https://megastore.kg/upload/iblock/a8e/a8ef709618f3854139a71b9fc9cd1e62.jpg',quantity:1},
            {id: 15, name: 'pro-joystick', price: 6200,img:'https://megastore.kg/upload/iblock/8d8/8d837e7b682722b629b3bf58dd1a73c5.jpg',quantity:1},
            {id: 16, name: 'rule-mega-8', price: 5300,img:'https://megastore.kg/upload/iblock/646/646af4646794a9b729e6191617a943cf.jpg',quantity:1},
            {id: 17, name: 'under-cool', price: 6800,img:'https://megastore.kg/upload/iblock/a2e/a2efe469ff2366b1d9a68270909b7b38.png',quantity:1},
            {id: 18, name: 'pro-rap-joy', price: 3000,img:'https://megastore.kg/upload/iblock/a2e/a2efe469ff2366b1d9a68270909b7b38.png',quantity:1},
            {id: 19, name: 'bundle-for-2', price: 4000,img:'https://megastore.kg/upload/iblock/322/3226e9325e3b6c9fe737e2f0d7a63fce.jpg',quantity:1},
        ],
        games: [
            {id: 20, name: 'Cyberpunk', price: 2200,img:'https://megastore.kg/upload/iblock/5d2/5d227dc2139a820bb2c7adf99f54b3fb.jpg',quantity:1},
            {id: 21, name: 'Avengers', price: 3300,img:'https://megastore.kg/upload/iblock/b31/b311d4fa7bed03c650f1a907a6aa88b8.jpg',quantity:1},
            {id: 22, name: 'Last-of-us', price: 4000,img:'https://megastore.kg/upload/iblock/5c5/5c56175ad6dca5956556214424a4c720.jpg',quantity:1},
            {id: 23, name: 'Spider-man', price: 5500,img:'https://megastore.kg/upload/iblock/192/192616bc2ca200f93694931582f0bf8f.png',quantity:1},
            {id: 24, name: 'Doom', price: 3200,img:'https://megastore.kg/upload/iblock/e10/e107b1efa1004c79e49f94d5e6f0ef47.jpg',quantity:1},
            {id: 25, name: 'Fifa', price: 1900,img:'https://megastore.kg/upload/iblock/fcc/fcc3892c05abe21e7c9fdbb5dcd694a2.jpg',quantity:1},
            {id: 26, name: 'Tsushima', price: 5400,img:'https://megastore.kg/upload/iblock/abe/abefdc90b726b049f35b349efefb173b.jpg',quantity:1},
            {id: 27, name: 'Alien', price: 2400,img:'https://megastore.kg/upload/iblock/a2b/a2bbd045ddaa5ff9d6b829f05566048e.png',quantity:1},
            {id: 28, name: 'Apex', price: 5600,img:'https://megastore.kg/upload/iblock/23f/23ff544abb326fea15f246499b313f70.jpg',quantity:1},
            {id: 29, name: 'Batman', price: 3300,img:'https://megastore.kg/upload/iblock/901/901ff4f4b41f90d01b77ad80e63e8fc7.jpg',quantity:1},
            {id: 30, name: 'Battlefield', price: 2800,img:'https://megastore.kg/upload/iblock/07f/07f2600f18682608f990f6617e29800b.jpg',quantity:1},
            {id: 31, name: 'Bloodborne', price: 3100,img:'https://megastore.kg/upload/iblock/e92/e92638d6622b480a7088ad7ef916b96a.jpg',quantity:1},
            {id: 32, name: 'Call of Duty', price: 6300,img:'https://megastore.kg/upload/iblock/819/81928886deca2d154df35d858bd28c72.jpg',quantity:1},
            {id: 33, name: 'DeadPool', price: 4000,img:'https://megastore.kg/upload/iblock/c47/c4737b80f6865c405d57d5dc39b0fc75.jpg',quantity:1},
            {id: 34, name: 'Mortal Kombat', price: 3400,img:'https://megastore.kg/upload/iblock/605/6058c1502ca07e67265c47e10374819b.jpg',quantity:1},
        ],
        total:0

    }
    const[cart,setCart] = useState([])
    const [disable, setDisable] = useState([]);


    const addToCart = (product,id) => {
          setCart([...cart,product])
        setDisable([...disable,id])

    }
    console.log(cart)
    return (
        <section className={'items'}>
            <div className="container">
                <FullWidthTabs disable={disable} cart={cart} data={state} addToCart={addToCart}/>
                <div className="items__button-wrap">
                <NavLink className={'basket__button'} exact to={'/basket'}>Перейти в Корзину: {cart.length}</NavLink>
                </div>
            </div>
        </section>
    );
};

export default Items;
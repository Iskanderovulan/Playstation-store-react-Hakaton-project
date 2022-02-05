import React from 'react';
import './Normalize.css'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Main from "./pages/Main/Main";
import Basket from "./pages/Basket/Basket";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Items from "./components/Items/Items";
import About from "./pages/About/About";
import Address from "./pages/Address/Address";
import Login from "./pages/User/Login/Login";
import Register from "./pages/User/Register/Register";
import ShowGoods from "./pages/ShowGoods/ShowGoods";
import NewUser from "./pages/NewUser/NewUser";
// import Card from "./components/Card/Card";
import Animation from "./components/Animation/Animation";
import ModalStation from "./components/Items/FullWidthTabs/ModalStation/ModalStation";


const App = () => {
    // const[data,setData] = useState([])

    // const requestApi = async () =>{
    //     const request = await fetch('http://192.168.0.151:8888/api/v1/list_tovary/')
    //     const response = await request.json()
    //     console.log(response)
    //     // setData(response.data)
    // }
    // useEffect(() => {
    //         searchGiphyByName()
    // }, [])

    return (
        <>
            {/*<Animation/>*/}
        <div className={'app'}>
            <Header/>
            <Switch>
                <Route exact path={'/'} component = {Main}/>
                <Route exact path={'/basket'} component={Basket}/>
                <Route exact path={'/goods'} component={Items}/>
                <Route exact path={'/about'} component={About}/>
                <Route exact path={'/address'} component={Address}/>
                <Route exact path={'/register'} component={Register}/>
                <Route exact path={'/login'} component={Login}/>
                <Route exact path={'/ShowGoods'} component={ShowGoods}/>
                <Route exact path={'/NewUser'} component={NewUser}/>
                <Route exact path={'/modal'} component={ModalStation}/>
            </Switch>
            <Footer/>
        </div>

        </>
    );
};

export default App;
import React from 'react';
import './Main.css'
// import Header from "../../components/Header/Header";
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";
import Items from "../../components/Items/Items";
import Card from "../../components/Card/Card";
import About from "../About/About";
import Address from "../Address/Address";

// import Footer from "../../components/Footer/Footer";



const Main = () => {
    return (
        <>
        <div>

            <SimpleSlider/>
            <Items/>
            <About/>
            <Card/>
            <Address/>

        </div>
        </>
    );
};

export default Main;
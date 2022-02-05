import React,{Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SimpleSlider.css'
import ps1 from '../../img/ps-1.jpg'
import ps2 from '../../img/ps-2.jpg'
import ps3 from '../../img/ps-3.jpg'


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            arrow:true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <section className="slider-wrap">
            <div className={'container slider'}>
                <h2>PlayStation store</h2>
                <Slider {...settings}>
                    <div>
                        <img src={ps1} alt=""/>
                    </div>
                    <div>
                        <img src={ps2} alt=""/>
                    </div>
                    <div>
                        <img src={ps3} alt=""/>
                    </div>
                </Slider>
            </div>
            </section>
        );
    }
}
import React, {useState, useEffect} from 'react';
import "./Card.css";
// import {FEEDBACK} from "../../config/Config";

const Card = () => {

    // const [feedback, setFeedback] = useState()

    // const getGoods = async () => {
    //     const request = await fetch(FEEDBACK)
    //     const response = await request.json()
    //     console.log(response)
    //     setFeedback(response)
    // }
    //
    // useEffect(() => {
    //     getGoods()
    // }, [])

    const state_feedback = [
        {name:'Sara',title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, natus?',img:'https://i.pinimg.com/236x/85/75/97/8575978855561d4172343d218ca39207.jpg'},
        {name:'Carla',title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, natus?',img:'https://i.pinimg.com/236x/3c/01/66/3c0166356fd6c0330cf1759d20c8612c.jpg'},
        {name:'Isabella',title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, natus?',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-C9EPRbCGaA4AdrGDtW-6VyQpwji_6qQJwWaGuMRc40-0WLwQh_-cZm8syKbFB0xbKE&usqp=CAU'},
        {name:'Bae',title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, natus?',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTQsrQHRinh1XzIt_yOf1itTPMxWZN7n97mkV03c9azhl_6MBv5cTFHykffpTOBmWFso&usqp=CAU'}
    ]



    return (
        <section className="card">
            <div className="container">
                <h2>отзывы</h2>
                <div className="row">
                    {
                        state_feedback ?
                            state_feedback.map((el, id) => {


                                return (


                                    <div key={id} className="col-3">
                                        <div className="comment">
                                            <div className="upper-cont">
                                                <div className="image-comment">
                                                    <img
                                                        src={el.img}
                                                        alt=""/>
                                                </div>
                                                <div className="lower-cont">
                                                    <h2>{el.name}</h2>
                                                    <p>{el.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                            :
                            <h2>На данный момент отзывы отсутсвуют</h2>
                    }

                </div>
            </div>
        </section>
    );
};

export default Card;
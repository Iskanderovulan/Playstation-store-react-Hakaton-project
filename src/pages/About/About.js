import React, {useState} from 'react';
import './About.css'
// import './About.scss'
import joystick from '../../img/joystick.png'
import ModalVideo from 'react-modal-video'


const About = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <section className={'about'}>
            <div className="container">
                <h2>О Нас</h2>
                <div className="row">
                    <div className="col-6">
                        <div className="about__box-1">
                            <img className={'about__spin'} src={joystick} alt=""/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about__box-2">
                            <h2>Best Playstation Shop</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly have suffered believable.
                                <br/>
                                <br/>
                                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of text.</p>
                        </div>
                        <div className="about__list">
                            <div className="about__line">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                 fill="none">
                                <circle cx="9" cy="9" r="9" fill="palevioletred"/>
                                <path d="M13.0909 6.54547L7.46591 12.2727L4.90909 9.66944" stroke="white"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p>There are many variations of passages of Lorem Ipsum</p>
                            </div>
                            <div className="about__line">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                     fill="none">
                                    <circle cx="9" cy="9" r="9" fill="palevioletred"/>
                                    <path d="M13.0909 6.54547L7.46591 12.2727L4.90909 9.66944" stroke="white"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>There are many variations of passages of Lorem Ipsum</p>
                            </div>
                            <div className="about__line">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                     fill="none">
                                    <circle cx="9" cy="9" r="9" fill="palevioletred"/>
                                    <path d="M13.0909 6.54547L7.46591 12.2727L4.90909 9.66944" stroke="white"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>There are many variations of passages of Lorem Ipsum</p>
                            </div>
                            <div className="about__line">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                     fill="none">
                                    <circle cx="9" cy="9" r="9" fill="palevioletred"/>
                                    <path d="M13.0909 6.54547L7.46591 12.2727L4.90909 9.66944" stroke="white"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>There are many variations of passages of Lorem Ipsum</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
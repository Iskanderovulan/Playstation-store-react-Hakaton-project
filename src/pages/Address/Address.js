import React from 'react';
import './Address.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Address = () => {
    return (
        <section className={'address'}>
            <div className="container">
                <h2>Контакты</h2>
                <div className="row">
                    <div className="col-3">
                        <div className="address__box">
                            <div className="address__item">
                                <h3>Режим работы</h3>
                                <p>c 10:00 до 20:00</p>
                                <p>Сб, Вс - выходной</p>
                            </div>
                            <div className="address__item">
                                <h3>Телефон</h3>
                                    <p>+996 (0553) 577-575</p>
                                <p>+996 (0773) 577-575</p>
                            </div>
                            <div className="address__item">
                                <h3>Адрес</h3>
                                <p>г. Бишкек, ItcBootcamp</p>
                            </div>
                            <div className="address__svg">
                                <InstagramIcon/>
                                <TelegramIcon/>
                                <WhatsAppIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 address__map">
                        <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2924.1593782089967!2d74.60167641547244!3d42.86948007915601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skg!4v1628704226997!5m2!1sen!2skg"
    allowFullScreen="" loading="lazy"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Address;
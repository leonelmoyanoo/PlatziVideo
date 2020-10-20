import React from 'react';
/* IMAGES */
import playICON from '../assets/static/play-icon.png';
import plusICON from '../assets/static/plus-icon.png';
/* CSS */
import '../assets/styles/components/CarouselItem.scss';

/* TEXT */
const TITLE = 'Título descriptivo';
const SUBTITLE = '2019 16+ 114 minutos';
const CarouselItem = () => (

    <div className="carousel-item">
        <img className="carousel-item__img"
            src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="" />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={playICON} alt="Play Icon" />
                <img className="carousel-item__details--img" src={plusICON} alt="Plus Icon" />
            </div>
            <p className="carousel-item__details--title">{TITLE}</p>
            <p className="carousel-item__details--subtitle">{SUBTITLE}</p>
        </div>
    </div>
);
export default CarouselItem;
import React from 'react';
/* IMAGES */
import playICON from '../assets/static/play-icon.png';
import plusICON from '../assets/static/plus-icon.png';
/* CSS */
import '../assets/styles/components/CarouselItem.scss';

/* TEXT */
const TITLE = 'Título descriptivo';
const SUBTITLE = '2019 16+ 114 minutos';
const CarouselItem = ({ cover, title, year, contentRating, duration, source }) => (

    <div className="carousel-item">
        <img className="carousel-item__img"
            src={cover}
            alt={title} />
        <div className="carousel-item__details">
            <div>
                <a href={source} target="_blank">
                    <img className="carousel-item__details--img" src={playICON} alt="Play Icon" />
                </a>
                <img className="carousel-item__details--img" src={plusICON} alt="Plus Icon" />
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">
                {
                    `${year} ${contentRating} ${duration} minutes`
                }
            </p>
        </div>
    </div>
);
export default CarouselItem;
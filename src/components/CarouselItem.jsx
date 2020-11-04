import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/* ACTIONS */
import { setFavorite, deleteFavorite } from '../actions';
/* PROPTYPES */
import PropTypes from 'prop-types';
/* IMAGES */
import playICON from '../assets/static/play-icon.png';
import plusICON from '../assets/static/plus-icon.png';
import removeICON from '../assets/static/remove-icon.png';
/* CSS */
import '../assets/styles/components/CarouselItem.scss';

/* TEXT */
const TITLE = 'Título descriptivo';
const SUBTITLE = '2019 16+ 114 minutos';
const CarouselItem = (props) => {
    const { id, cover, title, year, contentRating, duration, source } = props;
    const { isList } = props;

    const handleSetFavorite = () => {
        props.setFavorite({
            id,
            cover,
            title,
            year,
            contentRating,
            duration,
            source
        })
    }

    const handleDeleteFavorite = (itemID) => {
        props.deleteFavorite(itemID)
    }

    return (
        <div className="carousel-item">
            <img className="carousel-item__img"
                src={cover}
                alt={title} />
            <div className="carousel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                        <img
                            className="carousel-item__details--img"
                            src={playICON}
                            alt="Play Icon" />
                    </Link>
                    {
                        isList ?
                            <img
                                className="carousel-item__details--img"
                                src={removeICON}
                                alt="Remove Icon"
                                onClick={() => handleDeleteFavorite(id)} />
                            :
                            <img
                                className="carousel-item__details--img"
                                src={plusICON}
                                alt="Plus Icon"
                                onClick={handleSetFavorite} />
                    }
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">
                    {
                        `${year} ${contentRating} ${duration} minutes`
                    }
                </p>
            </div>
        </div>
    )
};

CarouselItem.propTypes = {
    id: PropTypes.number,
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
    source: PropTypes.string
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem);
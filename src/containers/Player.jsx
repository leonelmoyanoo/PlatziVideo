import React from 'react'
import "../assets/styles/components/Player.scss";

const BACK = "Regresar";

const Player = props => {
    const {id}=props.match.params;
    return (
        <div className="Player">
            <video controls autoplay>
                <source src="" type="video/mp4" />
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()} >
                    {BACK}
                </button>
            </div>
        </div >
    )
};
export default Player;
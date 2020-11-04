import React from 'react'

const BACK = "Regresar";
const Player = props => {
    return (
        <div className="Player">
            <video controls autoplay>
                <source src="" type="video/mp4" />
            </video>
            <div className="Player-black">
                <button type="button">
                    {BACK}
                </button>
            </div>
        </div>
    )
};
export default Player;
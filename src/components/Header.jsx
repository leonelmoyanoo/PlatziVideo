import React from 'react';
/* IMAGES */
import logoIMG from '../assets/static/logo-platzi-video-BW2.png';
import userIMG from '../assets/static/user-icon.png';
/* CSS */
import '../assets/styles/components/Header.scss';
/* TEXT */
const PROFILE = 'Perfil';
const ACCOUNT = 'Cuenta';
const LOG_OUT = 'Cerrar Sesión';


const Header = () => (
    <header className="header">
        <img className="header__img" src={logoIMG} alt="Platzi Video" />
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIMG} alt="Icon" />
                <p>{PROFILE}</p>
            </div>
            <ul>
                <li><a href="/">{ACCOUNT}</a></li>
                <li><a href="/">{LOG_OUT}</a></li>
            </ul>
        </div>
    </header>
);

export default Header
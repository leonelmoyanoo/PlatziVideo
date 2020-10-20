import React from 'react';
/* CSS */
import '../assets/styles/components/Header.scss';
/* TEXT */
const PROFILE = 'Perfil';
const ACCOUNT = 'Cuenta';
const LOG_OUT = 'Cerrar Sesión';


const Header = () => (
    <header className="header">
        <img className="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Platzi Video" />
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src="../assets/user-icon.png" alt="Icon" />
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
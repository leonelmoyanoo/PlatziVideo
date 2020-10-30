import React from 'react';
import { Link } from 'react-router-dom';
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

        <Link to='/'>
            <img className="header__img" src={logoIMG} alt="Platzi Video" />
        </Link>

        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIMG} alt="Icon" />
                <p>{PROFILE}</p>
            </div>
            <ul>
                <li>
                    <Link to="/">
                        {ACCOUNT}
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        {LOG_OUT}
                    </Link>
                </li>
            </ul>
        </div>
    </header>
);

export default Header
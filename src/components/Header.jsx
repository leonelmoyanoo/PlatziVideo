import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
/* GRAVATAR */
import gravatar from '../utils/gravatar';
/* IMAGES */
import logoIMG from '../assets/static/logo-platzi-video-BW2.png';
import userIMG from '../assets/static/user-icon.png';
/* CSS */
import '../assets/styles/components/Header.scss';
/* TEXT */
const PROFILE = 'Perfil';
const ACCOUNT = 'Cuenta';
const LOG_OUT = 'Cerrar Sesión';
const LOG_IN = 'Iniciar Sesión';


const Header = props => {
    const { user } = props;
    /* Verificando si user tiene elementos */
    const hasUser = Object.keys(user).length > 0;
    console.log(hasUser);
    return (
        <header className="header">

            <Link to='/'>
                <img className="header__img" src={logoIMG} alt="Platzi Video" />
            </Link>

            <div className="header__menu">
                <div className="header__menu--profile">
                    {
                        hasUser ?
                            <img
                                src={gravatar(user.email)}
                                alt={user.email}
                            />
                            :
                            <img
                                src={userIMG}
                                alt="Icon" />
                    }
                    <p>{PROFILE}</p>
                </div>
                <ul>
                    <li>
                        <Link to="/">
                            {ACCOUNT}
                        </Link>
                    </li>
                    <li>
                        {
                            hasUser
                            ?
                            <Link to="/">
                                {LOG_OUT}
                            </Link>
                            :
                            <Link to="/login">
                                {LOG_IN}
                            </Link>
                        }
                    </li>
                </ul>
            </div>
        </header>
    )
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Header)
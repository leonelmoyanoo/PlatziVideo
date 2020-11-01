import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
/* GRAVATAR */
import gravatar from '../utils/gravatar';
/* ACTIONS */
import { logoutRequest } from '../actions';
/* PROPTYPES */
import { PropTypes } from 'prop-types';
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
    const handleLogOut = () => {
        props.logoutRequest({});
    }
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
                    {
                        hasUser
                            ?
                            (
                                <>
                                    <li>
                                        <Link to="/">
                                            {user.name}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#logOut"
                                            onClick={handleLogOut}
                                        >
                                            {LOG_OUT}
                                        </Link>
                                    </li>
                                </>
                            )
                            :
                            <li>
                                <Link to="/login">
                                    {LOG_IN}
                                </Link>
                            </li>
                    }
                </ul>
            </div>
        </header>
    )
};
Header.propTypes = {
    user: PropTypes.object
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
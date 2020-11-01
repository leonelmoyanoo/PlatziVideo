import React, { useState } from 'react';
import {connect} from 'react-redux';

import {loginRequest} from '../actions';

import { Link } from 'react-router-dom';

/* PORPTYPES */
import {PropTypes} from 'prop-types';
/* Imagenes */
import GoogleIcon from '../assets/static/google-icon.png';
import TwitterIcon from '../assets/static/twitter-icon.png';
/* CSS */
import '../assets/styles/components/Login.scss';

const Login = props => {
    const [form, setValues] = useState({
        email: '',
    });
    /* AL FORM AGREGO EL EMAIL */
    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event =>{
        event.preventDefault();
        /* Enviar el formulario */
        props.loginRequest(form);
        props.history.push('/');
    }


    return (
        <section className="login">
            <section className="login__container">
                <h2>Inicia sesión</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>
                    <input
                        name="email"
                        className="input"
                        type="text"
                        placeholder="Correo"
                        onChange={handleInput} />
                    <input
                        name="password"
                        className="input"
                        type="password"
                        placeholder="Contraseña"
                        onChange={handleInput} />
                    <button className="button">Iniciar sesión</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input
                                type="checkbox"
                                id="cbox1"
                                defaultValue="first_checkbox" />
                                Recuérdame
                        </label>
                        <Link to="/">
                            Olvidé mi contraseña
                        </Link>
                    </div>
                </form>
                <section className="login__container--social-media">
                    <div><img src={GoogleIcon} /> Inicia sesión con Google</div>
                    <div><img src={TwitterIcon} /> Inicia sesión con Twitter</div>
                </section>
                <p className="login__container--register">No tienes ninguna cuenta
                    <Link to='/Register'>
                        Regístrate
                    </Link>
                </p>
            </section>
        </section>
    )
};

const mapDispatchToProps = {
    loginRequest,

}
export default connect(null,mapDispatchToProps)(Login);
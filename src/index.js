import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux;'
import App from './routes/App'


/* 2 parametros, la app y donde se va a ejecutar */
ReactDOM.render(
<Provider>
    <App/>
</Provider>,
    document.getElementById("app"));
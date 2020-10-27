import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
/* Importar componentes */
import Home from '../containers/Home';
import Login from '../containers/Login';

const App = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
    </BrowserRouter>
);
export default App;
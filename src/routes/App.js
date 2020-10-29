import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* Importar componentes */
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Layout from '../components/Layout';

/* ERROR 404 */
import NotFound from '../containers/NotFound';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />

                <Route component={NotFound}/>
            </Switch>
        </Layout>
    </BrowserRouter>
);
export default App;
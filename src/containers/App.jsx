import React from 'react';
/* COMPONENTS */
import Header from '../components/Header';
import Search from '../components/Search';

/* CSS */
import '../assets/styles/App.scss';

const App = () => (
    <div className="App">
        <Header/>
        <Search/>
    </div>
);
export default App;
import React from 'react'
import Header from './Header';
import Footer from './Footer';
/* CSS */
import '../assets/styles/App.scss'
const Layout = ({children}) =>(
    <div className="App">
        <Header/>
            {children}
        <Footer/>
    </div>
);
export default Layout;
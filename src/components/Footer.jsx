import React from 'react'
/* CSS */
import '../assets/styles/components/Footer.scss'
/* TEXT */
const TERMS = 'Términos de uso';
const PRIVACY = 'Declaración de privacidad';
const HELP = 'Centro de ayuda';
const Footer = () => (
    <footer className="footer">
        <a href="/">{TERMS}</a>
        <a href="/">{PRIVACY}</a>
        <a href="/">{HELP}</a>
    </footer>

);
export default Footer
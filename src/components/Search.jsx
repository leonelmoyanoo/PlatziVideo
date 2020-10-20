import React from 'react';
/* CSS */
import '../assets/styles/components/Search.scss';
/* TEXT */
const MAIN_TITLE = '¿Qué quieres ver hoy?';
const INPUT_PLACEHOLDER = 'Buscar...';

const Search = () => (
    <section className="main">
        <h2 className="main__title">{MAIN_TITLE}</h2>
        <input type="text" className="input" placeholder={INPUT_PLACEHOLDER} />
    </section>
);
export default Search;
import React from 'react';
/* CSS */
import '../assets/styles/components/Search.scss';
/* TEXT */
const main__title = '¿Qué quieres ver hoy?';
const input__placeholder = 'Buscar...';

const Search = () => (
    <section className="main">
        <h2 className="main__title">{main__title}</h2>
        <input type="text" className="input" placeholder={input__placeholder} />
    </section>
);
export default Search;
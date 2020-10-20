import React from 'react';
/* CSS */
import '../assets/styles/components/Categories.scss';
/* TEXT */
const MY_LIST = 'Mi lista';

const Categories = ({ children }) => (
    <div className="categories">
        <h3 className="categories__title">{MY_LIST}</h3>
        {children}
    </div>
);
export default Categories;
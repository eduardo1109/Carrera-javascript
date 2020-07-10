import React, { Children } from 'react';

const Categories = ({children, title}) => (
    <div className="categories">  {/*lo encapsulamos en un div, para pomer mandar una herencia, que puede ser 
    render de otro componente*/}
    <h3 className="categories__title">{title}</h3>
    {children}
    </div>
);

export default Categories;
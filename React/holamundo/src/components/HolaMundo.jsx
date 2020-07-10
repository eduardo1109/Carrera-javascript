import React from 'react';

const HolaMundo = () => {
    const Hello = "Hola Mundo"
    const isTrue = false;
    return(
        <div className = 'Hola Mundo'>
            <h1>{Hello}</h1>
            <h2>Curso Esencial de React</h2>
            <img src="/claseg.jpg" alt="React" />
            {isTrue ? <h4>Esto es verdadero</h4> : <h5>Soy Falso</h5>} 
            {isTrue && <h4>Soy verdadero</h4>} 
           {/* es otra forma de llamar al buleano*/} 
            
        </div>
    )
}




export default HolaMundo;
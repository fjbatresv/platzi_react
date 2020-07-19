import React from 'react';

const HolaMundo = () => {

    const hello = 'Hola mundo';
    const isTrue = true;

    return (
        <div className='HolaMundo'>
            <h1>{hello}</h1>
            <h2>Curso esencial de ReactJS</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="img" />
            {isTrue ? <h4>Es verdadero</h4> : <h5>Es falso</h5>}
            { isTrue && <h4>Es verdadero</h4> }
        </div>
    );
}

export default HolaMundo;
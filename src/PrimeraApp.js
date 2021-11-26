// los componentes se escriben con camelcase
// funtional components FC
// ahora los funtional components son faciles de implementar 
// imr para importar react
import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
const PrimeraApp = ({saludo, subtitulo   }) =>{
    //no imprime boleanos
    //console.log(props);
    //const saludo = 'hola mundo';


    // para hacerlo obligatorio el prompt  per no es conveniente
    // if(!saludo){
    //     throw new Error('el saludo es necesario');
    // }

    // otra manera de hacerlo obligatorio
    return (
        <>
            <h1>{ saludo }</h1>
            <p>{subtitulo}</p>
        </>
    )
}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'soy un subtitulo 2'
}
export default PrimeraApp;
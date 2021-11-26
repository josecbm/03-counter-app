import React from 'react'
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';

import  './index.css'
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#root');


// esto nos permite crear nuestro arbol de componentes por eso no hago en el root 
// ReactDOM.render(<PrimeraApp saludo={"hola mundo"}/> , divRoot)
ReactDOM.render(<CounterApp /> , divRoot)
// standar dejar un espacio en los componentes
import React ,{useState} from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({value = 10}) =>{

    const [counter, setCounter] = useState( value )
    const handleAdd = (e) =>{
        //console.log(e)
        // setCounter(counter+1);
        setCounter((c) =>c+1);
    }
    const handleReset = (e) =>{
        setCounter(0);
    }
    const handleSubtract = (e) =>{
        setCounter((c) =>c-1);
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h1>{counter}</h1>


            {/* <button onClick={ (e) =>{handleAdd(e)}}>+1</button> */}
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </>
    )
}
CounterApp.protoType ={
    value: PropTypes.number
}
export default CounterApp;
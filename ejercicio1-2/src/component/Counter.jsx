import React, {  } from 'react';
import { useCounter } from '../hook/useCounter';

const Counter = () => {

    const{ count, handleDecrement, handleIncrement,handleReset, handleStep} = useCounter(0)
   

    return (
        <div>
            <h2>Contador</h2>
            <p>{count}</p>
            <button onClick={handleIncrement}>Incrementar 1</button>
            <button onClick={handleDecrement}>Decrementar 1</button>
            <button onClick={handleStep}>Incrementar 2</button>
            <button onClick={handleReset}>Resetear</button>
        </div>
    );
}

export default Counter;

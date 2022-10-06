import { useState } from 'react';


const useCounter =(initialValue)=>{
    const [count, setCount] = useState(initialValue);

    const handleIncrement = ()=>{
        setCount( (prevCount)=>prevCount + 1 )
    }
    const handleDecrement = ()=>{
        setCount(( prevCount)=>prevCount -1 )
    }
    const handleReset = ()=>{
        setCount(0)
    }
    const handleStep = ()=>{
        setCount((prevCount)=> prevCount + 2)
    }
    return {count, handleDecrement, handleIncrement, handleReset, handleStep}
}

export {useCounter}
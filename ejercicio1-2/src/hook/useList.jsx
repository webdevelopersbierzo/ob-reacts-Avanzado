
import { useState } from 'react';

const useList = (initialValue = []) => {

    const [value, setValue] = useState(initialValue);
    
    // push new value to list
    const push = (element)=>{
        setValue((oldValue)=>[...oldValue, element]);
    };

    // remove value form list
    const remove = (index)=>{
        setValue((oldValue)=>oldValue.filter((_, i)=> i !==index))
    }
    // clear list
    const clearList = ()=>{
        setValue([])
    }
    //list is Empty ? true /false
    const isEmpty = ()=> value.length === 0;

    // short list's elements
    const sortList = ()=>{
       
        const listSort = value.sort((a,b)=>a-b)
        setValue([...listSort]);
    }
    // Short list's elements inverted
    const invertedList =()=>{
       
        const listInverted = value.sort((a,b)=>b-a);
        setValue([...listInverted])
        
    }
    return {
        value, setValue, push, remove, isEmpty, clearList, sortList, invertedList
    };
}

export default useList;

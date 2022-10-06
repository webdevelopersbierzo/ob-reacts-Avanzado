import React, { useState, useEffect } from 'react';
import useList from '../hook/useList';

const Tasklist = () => {

    const tasks= useList([]);
    const [newTask, setNewTask] = useState('');
      
    
    const handleSubmit = (event) => {
        event.preventDefault();
        tasks.push(newTask);
        setNewTask('');
    };

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };
    const handleClearList = (event) =>{
        event.preventDefault();
        tasks.clearList();  
      
    }
    const sortList = (event)=>{
        event.preventDefault();
        tasks.sortList()
    }
    const invertedList = (event)=>{
        event.preventDefault();
        tasks.invertedList();
    }


    return (
        <div>
            <h2>Task list</h2>
            <form onSubmit={handleSubmit}>
                <input value={newTask} onChange={handleInputChange} placeholder="New task" type='text'></input>
                <button type='submit'>Create task</button>
                <div>
                    <button onClick={handleClearList}>Clear List</button>
                    <button onClick={sortList}>Ordenar lista</button>
                    <button onClick={invertedList}>Invertir lista</button>
                </div>
                
            </form>
            { tasks.isEmpty()
                ? (<p>Task List is Empty</p>)
                : (
                <ul>
                    {tasks.value.map((task, index) => (
                    <li key={index}>
                        <input
                        type="checkbox"
                        onClick={() => tasks.remove(index)}
                        checked={false}
                        />
                        { task }
                    </li>
                            ))}
                </ul>
                )}
        </div>
    );
}

export default Tasklist;

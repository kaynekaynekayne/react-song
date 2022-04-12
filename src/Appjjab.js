import React,{useState} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

const Appjjab=()=>{
    const [text,setText]=useState('');
    const [todos,setTodos]=useState([]);

    return(
        <div className="container">
            <h1>🔎: {text}</h1>
            <Form text={text} setText={setText} todos={todos} setTodos={setTodos}/>
            <TodoList setTodos={setTodos} todos={todos}/>
        </div>
    )
}

export default Appjjab;
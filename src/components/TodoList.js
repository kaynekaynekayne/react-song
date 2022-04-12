import React from 'react';
import Todo from './Todo';

const TodoList=({setTodos,todos})=>{


    return(
        <ul>
            {todos.map(todo=>
                <Todo 
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                />
            )}
        </ul>
    )
}

export default TodoList;
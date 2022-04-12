import React from 'react';

const Todo=({setTodos,todos,todo})=>{

    const handleCheck=()=>{
        setTodos(todos.map(item=>{   
            console.log(item)         
            if(item.id===todo.id){
                return {
                    ...item,
                    completed:!item.completed,
                }
            }  
                return item;
            }
            )
            )
        }

    const handleDelete=()=>{
        setTodos(todos.filter(item=>item.id!==todo.id))
        console.log('------------')
        console.log(todo)
    }

    return(
        <div className="item__container">        
            <li className={`item__name ${todo.completed}`}>
                {todo.text}
            </li>
            <button class="buttons">
                <button onClick={handleCheck} className="item__handle check">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={handleDelete} className="item__handle trash">
                    <i className="fas fa-trash"></i>
                </button>
            </button>
        </div>
    )
}

export default Todo;
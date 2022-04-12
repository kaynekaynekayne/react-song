import React from 'react';

const Form=({text,setText,todos,setTodos})=>{

    const handleChange=(e)=>{
        console.log(e.target.value)
        setText(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setTodos([...todos,{
                 text:text,
                 completed:false,
                 id:Math.random()*1000,
                 count:0
        }])
        setText('');

    }

    return(
        <div>
            <form>
                <input value={text} onChange={handleChange} placeholder="search"/>
                <button onClick={handleSubmit} type="submit">+</button>
            </form>
        </div>
    )
}

export default Form;
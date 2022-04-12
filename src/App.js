import React,{useState} from 'react';
import './App.css';

function App() {
  const [counter,setCounter]=useState(0);
  const [toggle,setToggle]=useState(false);

  const handleIncrement=()=>{
    setCounter(prev=>prev+1)
  }

  const toggler=()=>{
    setToggle(prev=>!prev)
  }
  return (
    <div>
      <h1>{`counter: ${counter}`}</h1>
      <h2>{toggle ? "trueeeeee" : ""}</h2>
      <button onClick={handleIncrement}>Click +</button>
      <button onClick={toggler}>Toggle</button>
    </div>
  );
}

export default App;

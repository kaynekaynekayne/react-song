import React,{useRef} from 'react';

const SongInput=({input,setInput,playlists,setPlaylists})=>{

    const inputRef=useRef('');
    
    const handleChange=(e)=>{
        setInput(e.target.value);
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(input===''){
            return;
        }
        setPlaylists([...playlists,{
            title:inputRef.current.value, //얘가 input과 playlist를 이어주는거지
            count:0,
            id:Math.random()*1000,
        }]);
        //[{title: , count:0, id:xxx}]
        inputRef.current.value='';
    }

    return(
        <>       
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} onChange={handleChange}></input>
                <button>
                    <i className="fas fa-check"></i>
                </button>
            </form>
            <span>{input}</span>
        </>
    )
}

export default SongInput;
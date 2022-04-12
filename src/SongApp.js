import React,{useState} from 'react';
import SongNav from './components/SongNav';
import Songs from './components/Songs';
import Song from './components/Song';
import SongInput from './components/SongInput';
import './SongApp.css';

const SongApp=()=>{

    const [input,setInput]=useState('');
    const [playlists,setPlaylists]=useState([]);

   console.log(playlists)
   /*  
        1. playlists 라는 빈 배열 []을 만듦
        2. setPlaylists를 사용해서 [...playlists]로 배열을 다 넣을 것임
        
        setPlaylists([...playlists,{
            title:input, 📌얘가 input과 playlist를 이어주는거지
            count:0,
            id:Math.random()*1000,
        }]);

        4. (App.js에서)자동적으로 바뀐 playlists를 Songs.js 로 넘겨줌
        5. playlists.map(playlist=><Song playlist={playlist} />)
        6. Song.js에서 playlist.title 등 쓰고 싶은걸 뽑아 쓴다

   
   */
    
    return(
        <div className="container">
            <SongNav
                playlists={playlists}
            />
            <SongInput 
                input={input}
                setInput={setInput}
                playlists={playlists}
                setPlaylists={setPlaylists}
            />
            <Songs 
                playlists={playlists}
                setPlaylists={setPlaylists}
            />
            
        </div>
    )
}

export default SongApp;
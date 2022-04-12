import React,{useState} from 'react';

const Song=({playlist,playlists,setPlaylists})=>{

    const handleIncrease=()=>{
        setPlaylists(playlists.map(song=>{

            if(playlist.id===song.id){
                return{
                    ...song,
                    count:song.count+1
                }
            }
            return song;
        }
        ))
    }

    const handleDecrease=()=>{
        setPlaylists(
            playlists.map(song=>{
                if(song.id===playlist.id){
                    return {
                        ...song,
                        count:(song.count > 0 ? song.count-1 : 0)
                    }
                }
                return song;
            })
        )
    }

    const handleDelete=()=>{
        setPlaylists(
            playlists.filter(song=>song.id!==playlist.id)
        )
    }

    return (
        <li className="about__song">
            <div className="about__title">
                <h1 className="song__title">{playlist.title}</h1>
                <span className="song__count">{playlist.count}</span>
            </div>
            <button onClick={handleIncrease} className="song__handle">
                <i className="fas fa-plus"></i>
            </button>
            <button onClick={handleDecrease} className="song__handle">
                <i className="fas fa-minus"></i>
            </button>
            <button onClick={handleDelete} className="song__handle">
                <i className="fas fa-trash"></i>
            </button>
        </li>
    );
}

export default Song;
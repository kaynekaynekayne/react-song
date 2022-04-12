import React from 'react';
import Song from './Song';
import SongNav from './SongNav';

const Songs=({playlists,setPlaylists})=>{
    
    return (
        <ul style={{'listStyle':'none'}}>
            {playlists.map(playlist=>        
                <Song
                    key={playlist.id}
                    playlist={playlist}
                    playlists={playlists}
                    setPlaylists={setPlaylists}
                />
            )}
        </ul>
    );
}

export default Songs;
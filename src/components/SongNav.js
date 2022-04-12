import React from 'react';

const SongNav=({playlists})=> {
    
    return (
        <header>
            <h1>Sing along </h1>
            <span className="songs__count">{playlists.length}</span>
        </header>
    );
}

export default SongNav;
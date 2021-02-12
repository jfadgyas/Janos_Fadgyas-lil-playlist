import React from 'react';

const ListHead = (props) => {
    return (
        <header>
                <button onClick={()=>props.sortSongs('song', false)}>song up</button>
                <p>Song</p>
                <button onClick={()=>props.sortSongs('song', true)}>song down</button>
                <button onClick={()=>props.sortSongs('artist', false)}>artist up</button>
                <p>Artist</p>
                <button onClick={()=>props.sortSongs('artist', true)}>artist down</button>
                <p>Genre</p>
                <button onClick={()=>props.sortSongs('rating', false)}>rating up</button>
                <p>Rating</p>
                <button onClick={()=>props.sortSongs('rating', true)}>rating down</button>
        </header>  
    )
}

export default ListHead;
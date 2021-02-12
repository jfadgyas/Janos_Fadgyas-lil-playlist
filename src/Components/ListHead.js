import React from 'react';
import {sortSongs} from '../Actions';
import {useDispatch} from 'react-redux';

const ListHead = () => {
    const dispatch = useDispatch()

    return (
        <header>
            <button onClick={()=>dispatch(sortSongs('song', false))}>song up</button>
            <p>Song</p>
            <button onClick={()=>dispatch(sortSongs('song', true))}>song down</button>
            <button onClick={()=>dispatch(sortSongs('artist', false))}>artist up</button>
            <p>Artist</p>
            <button onClick={()=>dispatch(sortSongs('artist', true))}>artist down</button>
            <p>Genre</p>
            <button onClick={()=>dispatch(sortSongs('rating', false))}>rating up</button>
            <p>Rating</p>
            <button onClick={()=>dispatch(sortSongs('rating', true))}>rating down</button>           
        </header>  
    )
}

export default ListHead;
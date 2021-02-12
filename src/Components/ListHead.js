import React from 'react';
import {sortSongs} from '../Actions';
import {useDispatch} from 'react-redux';

const ListHead = () => {
    const dispatch = useDispatch()

    return (
        <header className='list-head'>
            <div className='list-head__wrapper'>
                <button className='sort sort--az pointer' onClick={()=>dispatch(sortSongs('song', false))}></button>
                <p>Song</p>
                <button className='sort sort--za pointer' onClick={()=>dispatch(sortSongs('song', true))}></button>

            </div>
            <div  className='list-head__wrapper'>
                <button className='sort sort--az pointer' onClick={()=>dispatch(sortSongs('artist', false))}></button>
                <p>Artist</p>
                <button className='sort sort--za pointer' onClick={()=>dispatch(sortSongs('artist', true))}></button>

            </div>
            <p>Genre</p>
            <div  className='list-head__wrapper'>
                <button className='sort sort--19 pointer' onClick={()=>dispatch(sortSongs('rating', false))}></button>
                <p>Rating</p>
                <button className='sort sort--91 pointer' onClick={()=>dispatch(sortSongs('rating', true))}></button>           

            </div>
        </header>  
    )
}

export default ListHead;
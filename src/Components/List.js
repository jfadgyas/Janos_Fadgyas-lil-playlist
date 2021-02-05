import React from 'react';
import ListItem from './ListItem'

const List = (songs) => {
    const songList = songs.allSongs.map((item, index) => 
        <ListItem key={index} {...item}/>)
    
    return (
        <ul>
            {songList}
        </ul>
    )
}

export default List;
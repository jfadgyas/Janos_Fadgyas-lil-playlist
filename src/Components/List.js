import React from 'react';
import ListItem from './ListItem'

const List = (props) => {
    const songList = props.allSongs.map((item, index) => 
        <ListItem key={index} id={index} {...item} deleteSong={props.deleteSong}/>)
    
    return (
        <ul>
            {songList}
        </ul>
    )
}

export default List;
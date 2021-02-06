import React from 'react';

const ListItem = (props) => {
    return (
        <li id={props.id}>
            <span>{props.song}</span>
            <span>{props.artist}</span>
            <span>{props.genre}</span>
            <span>{props.rating}</span>
            <button onClick={props.deleteSong}>Delete</button>
        </li>
    )
}

export default ListItem;
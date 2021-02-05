import React from 'react';

const ListItem = (props) => {
    return (
        <li>
            <span>{props.song}</span>
            <span>{props.artist}</span>
            <span>{props.genre}</span>
            <span>{props.rating}</span>
        </li>
    )
}

export default ListItem;
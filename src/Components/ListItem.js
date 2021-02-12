import React from 'react';
import {deleteSong} from '../Actions';
import {useDispatch} from 'react-redux';

const ListItem = (props) => {
    const dispatch = useDispatch()

    return (
        <li id={props.id}>
            <span>{props.song}</span>
            <span>{props.artist}</span>
            <span>{props.genre}</span>
            <span>{props.rating}</span>
            <button onClick={()=>dispatch(deleteSong(props.id))}>Delete</button>
        </li>
    )
}

export default ListItem;
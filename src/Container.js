import React from 'react';
import List from './Components/List';
import ListHead from './Components/ListHead';
import NewSong from './Components/NewSong';
import FilterSong from './Components/FilterSong';
import {useSelector} from 'react-redux';

const Container = () => {
    const songs = useSelector(state => state.songs)

    return (
        <main>
                <NewSong />
                <FilterSong />
                <ListHead />
                <List {...songs}/>
            </main>
        )
}

export default Container;
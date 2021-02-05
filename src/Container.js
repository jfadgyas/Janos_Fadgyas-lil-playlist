import React, {useState} from 'react';
import List from './Components/List'
import NewSong from './Components/NewSong'

const Container = () => {
    const [songs, setSongs] = useState({
        allSongs: [
            {
                song: 'fade to black',
                artist: 'Metallica',
                genre: 'rock',
                rating: 5
            },
            {
                song: 'touch me',
                artist: 'krtm',
                genre: 'electronic',
                rating: 5
            },
            {
                song: 'fly',
                artist: 'ludovico einaudi',
                genre: 'other',
                rating: 4
            },
        ]
    })

    const addSong = newSong => setSongs({allSongs: [...songs.allSongs].concat(newSong)})

    return (
        <div>
            <NewSong addSong={addSong}/>
            <List {...songs}/>
        </div>
    )
}

export default Container;
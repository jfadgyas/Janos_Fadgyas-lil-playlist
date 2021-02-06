import React, {useState} from 'react';
import List from './Components/List'
import ListHead from './Components/ListHead'
import NewSong from './Components/NewSong'

const Container = () => {
    const [songs, setSongs] = useState({
        allSongs: [
            {
                song: 'fade to black',
                artist: 'Metallica',
                genre: 'rock',
                rating: '5'
            },
            {
                song: 'touch me',
                artist: 'krtm',
                genre: 'electronic',
                rating: '5'
            },
            {
                song: 'fly',
                artist: 'ludovico einaudi',
                genre: 'other',
                rating: '4'
            },
        ]
    })

    const addSong = newSong => setSongs({allSongs: [...songs.allSongs].concat(newSong)})

    const sortSongs = (fieldName, reverse) => {
        let sortedSongs = songs.allSongs.sort((item1, item2) => {
            if (item1[fieldName].toLowerCase()>item2[fieldName].toLowerCase()){
                return 1
            }
            if (item1.song<item2.song){
                return -1
            }
            return 0
        })
        reverse && sortedSongs.reverse()
        setSongs({allSongs: sortedSongs}) 
    }

    return (
        <main>
            <NewSong addSong={addSong}/>
            <ListHead sortSongs={sortSongs}/>              
            <List {...songs}/>

        </main>
    )
}

export default Container;
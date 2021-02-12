import React, {useEffect, useState, useRef} from 'react';
import List from './Components/List'
import ListHead from './Components/ListHead'
import NewSong from './Components/NewSong'
import FilterSong from './Components/FilterSong'

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
    const [genres, setGenres] = useState()
    const newGenreList = useRef(true)
    const prevSongs = useRef(songs.allSongs)

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

    const deleteSong = (e) => {
        const id = parseInt(e.target.parentNode.id)
        const filteredSongs = songs.allSongs.filter((item, index) => index !== id)
        setSongs({allSongs: filteredSongs})
    }

    useEffect(() => {
        if (newGenreList.current){
            const genreItems = Array.from(new Set(songs.allSongs.map(item => item.genre)))
            const genres = genreItems.map((item,index) => <option key={index} value={item}>{item}</option>)
            setGenres(genres)
            prevSongs.current = songs.allSongs
        }
        newGenreList.current = true
    }, [songs])

    const filterSong = (filters) => {
        newGenreList.current = false
        let filterTempSongs = [...prevSongs.current]
        const filteredSongs = filterTempSongs.filter(item => {
            if (filters.genre && filters.rating){
                return item.genre === filters.genre && item.rating === filters.rating
            }
            if (filters.genre && !filters.rating){
                return item.genre === filters.genre
            }
            if (!filters.genre && filters.rating){
                return item.rating === filters.rating
            }
            return item
        })
        setSongs({allSongs: filteredSongs})
    }

    return (
        <main>
            <NewSong addSong={addSong}/>
            <FilterSong genres={genres} filterSong={filterSong} />            
            <ListHead sortSongs={sortSongs}/>
            <List {...songs} deleteSong={deleteSong}/>
        </main>
    )
}

export default Container;
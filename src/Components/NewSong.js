import React, {useState} from 'react';

const NewSong = (props) => {
    const [newSong, setNewSong] = useState({
        song: '',
        artist: '',
        genre: '',
        rating: ''
    })

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        if (name === 'newsong'){
            //if empty dont send?
            props.addSong(newSong)
            return setNewSong({
                song: '',
                artist: '',
                genre: '',
                rating: ''
            })
        }
        setNewSong(Object.assign({...newSong}, {[name]: value}))
    }

    return (
        <form name='newsong' onSubmit={handleChange}>
            <input
                type='text'
                name='song'
                value={newSong.song}
                placeholder='Enter song name'
                onChange={handleChange}/>
            <input
                type='text'
                name='artist'
                value={newSong.artist}
                placeholder='Artist'
                onChange={handleChange}/>
            <input
                type='text'
                name='genre'
                value={newSong.genre}
                placeholder='Gender'
                onChange={handleChange}/>
            <input
                type='number'
                min='1'
                max='5'
                name='rating'
                value={newSong.rating}
                placeholder='Rating (1-5)'
                onChange={handleChange}/>
            <button>Add song</button>
        </form>
    )
}

export default NewSong;
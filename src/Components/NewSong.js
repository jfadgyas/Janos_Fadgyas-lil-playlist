import React, {useState} from 'react';

const NewSong = (props) => {
    const [newSong, setNewSong] = useState({
        song: '',
        artist: '',
        genre: '',
        rating: '1'
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
                rating: '1'
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
            <label>Rating: </label>
            <select
                name='rating'
                placeholder='Rating'
                value={newSong.rating}
                onChange={handleChange}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
            </select>
            <button>Add song</button>
        </form>
    )
}

export default NewSong;
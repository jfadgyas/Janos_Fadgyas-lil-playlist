const initialState = {
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
}

let prevSongs = {allSongs: []}

const songReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADDSONG':
            return {allSongs: [...state.allSongs].concat(action.payload)}
        case 'DELETESONG':
            const filteredSongs = state.allSongs.filter((item, index) => index !== action.payload)
            return {allSongs: filteredSongs}
        case 'SORTSONGS':
            let sortedSongs = state.allSongs.sort((item1, item2) => {
            if (item1[action.payload.fieldName].toLowerCase()>item2[action.payload.fieldName].toLowerCase()){
                return 1
            }
            if (item1.song<item2.song){
                return -1
            }
            return 0
            })
            action.payload.reverse && sortedSongs.reverse()
            return {allSongs: sortedSongs}
        case 'FILTERSONG':
            if (prevSongs.allSongs.length === 0){
                prevSongs = state
            }
            let filterTempSongs = [...prevSongs.allSongs]
            const filterSongs = filterTempSongs.filter(item => {
                if (action.payload.genre && action.payload.rating){
                    return item.genre === action.payload.genre && item.rating === action.payload.rating
                }
                if (action.payload.genre && !action.payload.rating){
                    return item.genre === action.payload.genre
                }
                if (!action.payload.genre && action.payload.rating){
                    return item.rating === action.payload.rating
                }
                return item
            })
            return {allSongs: filterSongs}
        default: return state
    }
}

export default songReducer;
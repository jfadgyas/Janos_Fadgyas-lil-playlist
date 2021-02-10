export const addSong = newSong => {
    return {
        type: 'ADDSONG',
        payload: newSong
    }
}

export const sortSongs = (fieldName, reverse) => {
    return {
        type: 'SORTSONGS',
        payload: {fieldName, reverse}
    }
}

export const deleteSong = id => {
    return {
        type: 'DELETESONG',
        payload: id
    }
}

export const filterSong = filters => {
    return {
        type: 'FILTERSONG',
        payload: filters
    }
}
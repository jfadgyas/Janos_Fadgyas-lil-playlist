import React, {useState} from 'react';

const FilterSong = (props) => {
    const [filters, setFilters] = useState({
        genre: false,
        rating: false
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        let newValue = !value ? false : value
        setFilters({...filters, [name]: newValue})
        props.filterSong({...filters, [name]: newValue})
    }

    return (
        <section>
            <select
                name='genre'
                value={filters.genre}
                onChange={handleChange}>
                    <option default value=''>All</option>
                    {props.genres}
            </select>
            <select
                name='rating'
                value={filters.rating}
                onChange={handleChange}>
                    <option default value=''>All</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
            </select>
        </section>
    )
}

export default FilterSong;
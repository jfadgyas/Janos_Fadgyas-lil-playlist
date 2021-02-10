import songReducer from './songs';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    songs: songReducer
})

export default allReducers;
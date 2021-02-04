import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './Actions';


const App = () => {
    const counter = useSelector(state => state.counter)
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment(2))}>+</button>
            <button onClick={() => dispatch(decrement(0.5))}>-</button>
            {isLoggedIn && <h3>Secret info</h3>}
        </div>
    )
}

export default App;
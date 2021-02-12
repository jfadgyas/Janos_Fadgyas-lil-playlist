import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    
    return (
        <header>
            <h1>Playlist</h1>
            <nav>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/About'>
                        <li>About</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;
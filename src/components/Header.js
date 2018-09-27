import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header>
        <nav>
            Navbar
            <ul>
                <li><Link to='/'>Board</Link></li>
                <li><Link to='/scores'>Scores</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header
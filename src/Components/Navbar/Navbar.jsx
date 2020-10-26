
import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return(
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to='/' className='navbar-brand'>El Calc</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav ml-auto mr-4">
                <li className="nav-item">
                    <Link to='/' className="nav-link">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to='/about' className="nav-link">Acerca</Link>
                </li>
            </ul>
        </nav>
    )
}
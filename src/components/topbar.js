import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function topbar() {
    return (



        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container'>
                <Link className="navbar-brand" href="#">Navbar</Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                        <li className="nav-item">
                            <NavLink to='/' className='nav-link'>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/login' className='nav-link'>
                                Sign in
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/register' className='nav-link'>
                                Sign up
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}

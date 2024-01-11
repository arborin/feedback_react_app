import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* <Link className="navbar-brand">Navbar</Link> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item active">
                            <Link className="nav-link">Home
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">About</Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        )
    }
}

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <header className="navbar navbar-expand-md navbar-light bg-success">
                <a className="navbar-brand" href="/">Mon jolie site</a>
                <button className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-2">
                            <NavLink exact to="/" className="nav-link text-white" activeClassName="text-muted">Home</NavLink>
                        </li>
                        <li className="nav-item ml-2">
                            <NavLink to="/about" className="nav-link text-white " activeClassName="text-muted">About</NavLink>
                        </li>
                        <li className="nav-item ml-2">
                            <NavLink to="/discover" className="nav-link text-white" activeClassName="text-muted">Discover</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
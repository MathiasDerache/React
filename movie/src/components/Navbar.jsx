import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div>
                        <ul className="nav">
                            <li className="items">
                                <NavLink exact to ="/" className="nav-link" activeClassName="text-muted">Accueil</NavLink>
                            </li>

                            <li className="items">
                            <NavLink exact to ="/favoris" className="nav-link" activeClassName="text-muted">Favoris</NavLink>
                            </li>
                        </ul>
            </div>
        )
    }
}

export default Navbar

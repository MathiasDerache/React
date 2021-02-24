import React, { Component } from 'react'

export class Recherche extends Component {
    render() {
        return (
                <React.Fragment>
                    <div className="input-group">
                        <input type="search" className="form-control rounded search" placeholder="Search a movie ..." aria-label="Search"
                            aria-describedby="search-addon" />
                              <button type="button" className="btn btn-outline">Search</button>
                    </div>
                </React.Fragment>
        )
    }
}

export default Recherche

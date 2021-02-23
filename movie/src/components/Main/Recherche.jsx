import React, { Component } from 'react'

export class Recherche extends Component {
    render() {
        return (
                <React.Fragment>
                    <div className="input-group">
                        <input type="search" className="form-control rounded search" placeholder="Recherche ..." aria-label="Search"
                            aria-describedby="search-addon" />
                              <button type="button" className="btn btn-outline">Recherche</button>
                    </div>
                </React.Fragment>
        )
    }
}

export default Recherche

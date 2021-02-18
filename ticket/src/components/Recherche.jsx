import React from 'react'

export class Recherche extends React.Component {
    render() {
        return (
            <div className="recherche">
                <div className="row">
                <input type="text" placeholder="Search..." className=" search col-lg-8"/>
                </div>
                <div>
                    <input type="checkbox" name="show" className="check"></input>
                    <label htmlFor="show" className="label">Only show products in stock</label>
                </div>
            </div>
        )
    }
}

export default Recherche

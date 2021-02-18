import React from 'react'
import Detail from './Detail'

export class Categorie extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="category">
                    {this.props.category}
                </div>
                    <Detail 
                        name={this.props.name} 
                        price={this.props.price} 
                        stocked={this.props.stocked}
                    />
            </React.Fragment>
        )
    }
}

export default Categorie

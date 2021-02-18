import React from 'react'
import Categorie from './Categorie'

export class Contenu extends React.Component {

    state = {
        products : [
                {category: "Sporting Goods", price: "$49.99",   stocked: true,  name: "Football"},
                {category: "Sporting Goods", price: "$9.99",    stocked: true,  name: "Baseball"},
                {category: "Sporting Goods", price: "$29.99",   stocked: false, name: "Basketball"},
                {category: "Electronics", price: "$99.99",  stocked: true,  name: "iPod Touch"},
                {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                {category: "Electronics", price: "$199.99", stocked: true,  name: "Nexus 7"}
            ]
        }

    render() {
        return (
            <div className="row">
                <p className="col-lg-6 contenu">Name</p>
                <p className="col-lg-6 contenu">Price</p>
                {this.state.products.map((product, index) => (
                    <Categorie key={index}
                        category={product.category}
                        price={product.price}
                        stocked={product.stocked}
                        name={product.name}
                    />
                ))}
            </div>
        )
    }
}

export default Contenu

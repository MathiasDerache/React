import React, { Component } from 'react'

export class Film extends Component {


    state = {
        show : false,
    }

    addFav = () => {
     localStorage.setItem('fav', JSON.stringify(this.props.value))
    }

    montrerDescription = () => {
        this.setState({
            show : !this.state.show
        })
    }

    cacherDescription = () => {
        this.setState({
            show : !this.state.show
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="film" onMouseEnter={this.montrerDescription} onMouseLeave={this.cacherDescription}>
                    {this.state.show ? (
                        <div id='description'>
                        <button className="fav" onClick={this.addFav}><i className="fas fa-heart"></i></button>
                            {this.props.description}
                        </div>
                    ) : null }

                    <div className="filmImage">
                        <img src={this.props.image} alt=""  />
                    </div>
                    <div className="filmTitle">
                    {this.props.title}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Film

import React, { Component } from 'react'
import '../Main/Main.css'

export class Favoris extends Component {


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

        let fav = localStorage.getItem('fav');
        fav = JSON.parse(fav);
        console.log(fav.title);

        const image = 'https://image.tmdb.org/t/p/w500' + fav.poster_path

        return (
            <React.Fragment>
                <div className="films">
                    <div className="film" onMouseEnter={this.montrerDescription} onMouseLeave={this.cacherDescription}>
                    {this.state.show ? (
                            <div id='description'>
                            <button className="fav"><i className="fas fa-times"></i></button>
                                {fav.overview}
                            </div>
                        ) : null }
                        <div className="filmImage">
                            <img src={image} alt=""  />
                        </div>
                        <div className="filmTitle">
                        {fav.title}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Favoris

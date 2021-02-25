import React, { Component } from 'react'

export class Detail extends Component {

    constructor(props){
        super(props)
        this.state = {
            array : []
        }
    }

    componentDidMount(){
        let array = JSON.parse(localStorage.getItem('film')) || []
        this.setState({
            array : array
        })
    }

    render() {
        console.log(this.state.array);
        return (
            <React.Fragment>
                <div className="poster">
                   <img src={"https://image.tmdb.org/t/p/w500" + this.state.array.poster_path} alt="poster"/>
                </div>
                <div className="informations">
                    {this.state.array.title}
                    {this.state.array.overview}
                    {this.state.array.release_date}
                </div>
            </React.Fragment>
        )
    }
}

export default Detail

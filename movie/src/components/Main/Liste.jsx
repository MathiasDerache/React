import React, { Component } from 'react'
import Film from './Film'
import { apiMovie } from './../../api/apiMovie';

export class Liste extends Component {
    
    state = {
        isLoaded : false
    }

    componentDidMount(){
        apiMovie.get("/discover/movie")
             .then(response => {
                 if(response.status === 200){
                 this.setState({
                    values: response.data.results,
                    isLoaded: true})
                    console.log(response.data.results);
                }
             })
             .catch(error => console.log(error))
    }

    render() {
        if(!this.state.isLoaded) return <h1>Please Wait...</h1>
        return (
            <div className="films">
                {this.state.values.map((value) => 
                    <Film
                    key={value.id}
                    title={value.title}
                    image={"https://image.tmdb.org/t/p/w500" + value.poster_path}
                    description={value.overview}
                    id={value.id}
                    value={value}
                    />
                )}
            </div>
        )
    }
}

export default Liste

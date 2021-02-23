import React, { Component } from 'react'
import Liste from './Liste'
import Recherche from './Recherche'
import './Main.css'

export class Main extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="container search">
                        <Recherche/>
                    </div>

                <Liste/>
                </div>
            </>
        )
    }
}

export default Main

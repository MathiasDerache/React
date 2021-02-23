import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import { Main } from './Main/Main';
import { Favoris } from './Favoris/Favoris';
import { Perdu } from './Perdu';

export class Router extends Component {
    render() {
        return (
                <BrowserRouter>
                    <Navbar/>
                    <Switch>
                        <Route  exact path='/' component={Main}/>
                        <Route  path='/favoris' component={Favoris}/>
                        <Route component={Perdu} />
                    </Switch>
                </BrowserRouter>
        )
    }
}

export default Router

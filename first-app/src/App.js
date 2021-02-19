import React from 'react'
import { createBrowserHistory} from 'history'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './components/test-routing/Home';
import { about } from './components/test-routing/About';
import { Discover } from './components/test-routing/Discover';
import Error from './components/test-routing/Error';
import NavBar from './components/test-routing/NavBar';

const history = createBrowserHistory()
class App extends React.Component {



  render(){
    return(
      <BrowserRouter>
        <NavBar/>
        <Switch history={history}>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={about} />
        <Route path='/discover' component={Discover} />
        <Route component={Error} />
        </Switch>
      </BrowserRouter>
    )
  } 
}

export default App
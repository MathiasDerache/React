import './App.css';
import './css/Log.css'
import React from 'react'
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';


class App extends React.Component {

  state = {
      isLogged : false,
    }
  

  handleLog = () => {
    this.setState({
      isLogged : !this.state.isLogged
    })
  }

  render() {
    const isLogged = this.state.isLogged

    return (
      <div>
          {isLogged ? <Logout onChangeLog = {this.handleLog}/>
           : <Login onChangeLog = {this.handleLog}/> } 
      </div>
    );
  }
}

export default App;

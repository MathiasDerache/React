import './App.css';
import React from 'react'
import Contenu from './components/Contenu';
import Recherche from './components/Recherche';

class App extends React.Component {

  render() {
    return (
      <div className="App container">
        <Recherche/>
        <Contenu/>
      </div>
    );
  }
}

export default App;

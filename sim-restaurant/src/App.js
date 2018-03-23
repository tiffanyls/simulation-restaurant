import React, { Component } from 'react';
import './App.css';
import Authview from './components/authview/authview';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div>
          <Authview />
        </div>

      </div>
    );
  }
}

export default App;

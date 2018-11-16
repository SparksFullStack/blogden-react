import React, { Component } from 'react';
import './App.css';

import NavHeader from './components/NavHeader';
import Home from './components/Homepage/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <Home />
      </div>
    );
  }
}

export default App;

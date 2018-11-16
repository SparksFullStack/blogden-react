import React, { Component } from 'react';
import './App.css';

import NavHeader from './components/NavHeader';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <Header />
      </div>
    );
  }
}

export default App;

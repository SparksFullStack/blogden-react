import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import NavHeader from './components/NavHeader';
import Home from './components/Homepage/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <Route path="/" component={Home} />
      </div>
    );
  }
}

export default App;

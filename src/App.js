import React, { Component } from 'react';
import './App.css';

import NavHeader from './components/NavHeader';
import Header from './components/Header';
import Actions from './components/Actions';
import Posts from './components/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <Header />
        <Actions />
        <Posts />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import NavHeader from './components/NavHeader';
import Header from './components/Header';
import Actions from './components/Actions';
import Posts from './components/Posts';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <Header />
        <Actions />
        <Posts />
        <Footer />
      </div>
    );
  }
}

export default App;

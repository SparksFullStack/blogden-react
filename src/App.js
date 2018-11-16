import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import Home from './components/Homepage/Home';
import Posts from './components/Posts/Posts';
import Categories from './components/Categories/Categories';
import Users from './components/Users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <Route path="/" exact component={Home} />
        <Route path="/posts" component={Posts} />
        <Route path="/categories" component={Categories} />
        <Route path="/users" component={Users} />
        <Footer />
      </div>
    );
  }
}

export default App;

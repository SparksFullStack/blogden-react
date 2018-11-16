import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import Home from './components/Homepage/Home';
import Posts from './components/Posts/Posts';
import Categories from './components/Categories/Categories';
import Users from './components/Users/Users';
import Details from './components/Details/Details';
import Settings from './components/Settings/Settings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <Route path="/" exact component={Home} />
        <Route path="/posts" component={Posts} />
        <Route path="/categories" component={Categories} />
        <Route path="/users" component={Users} />
        <Route path='/details' component={Details} />
        <Route path="/settings" component={Settings} />
        <Footer />
      </div>
    );
  }
}

export default App;

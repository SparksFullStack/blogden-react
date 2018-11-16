import React, { Component } from 'react'

import Actions from './Actions';
import Footer from './Footer';
import Header from './Header';
import Posts from './Posts';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Actions />
        <Posts />
        <Footer />
      </div>
    )
  }
}

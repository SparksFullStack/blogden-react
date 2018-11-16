import React, { Component } from 'react'


import Actions from './Actions';
import Header from './Header';
import Posts from './Posts';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Actions />
        <Posts />
      </div>
    )
  }
}

import React, { Component } from 'react'
import Header from './Header';

import Search from './Search';
import PostsTable from './PostsTable';

export default class Posts extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <PostsTable />
      </div>
    )
  }
}

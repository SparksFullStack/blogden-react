import React, { Component } from 'react'

import Header from './Header';
import Search from './Search';
import UsersTable from './UsersTable';

export default class Users extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <UsersTable />
      </div>
    )
  }
}

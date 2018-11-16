import React, { Component } from 'react'

import Header from './Header';
import Search from './Search';
import CategoriesTable from './CategoriesTable';

export default class Categories extends Component {
  render() {
    return (
      <div>
          <Header />
          <Search />
          <CategoriesTable />
      </div>
    )
  }
}

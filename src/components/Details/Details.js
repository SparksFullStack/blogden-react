import React, { Component } from 'react'

import Header from './Header';
import Actions from './Actions';
import DetailsTable from './DetailsTable';

export default class Details extends Component {
  render() {
    return (
      <div>
        <Header />
        <Actions />
        <DetailsTable />
      </div>
    )
  }
}

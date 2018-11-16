import React, { Component } from 'react'

import Header from './Header';
import Actions from './Actions';
import SettingsTable from './SettingsTable';

export default class Settings extends Component {
  render() {
    return (
      <div>
        <Header />
        <Actions />
        <SettingsTable />
      </div>
    )
  }
}

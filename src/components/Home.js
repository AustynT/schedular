import React, { Component } from 'react';
import Library from './library/library'
import Schedule from './schedule/schedule'


export default class Home extends Component {
  render() {
    return (
      <div class="home">
        <Library />
        <Schedule />
      </div>
    );
  }
}

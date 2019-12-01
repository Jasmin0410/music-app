import React, { Component } from 'react';
import { FiHeadphones, FiSearch } from "react-icons/fi";


export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-title">
          <FiHeadphones />&nbsp;
          <span>Music</span>
        </div>
        <div className="header-searchbox">
          <div className="searchbox">
            <input placeholder="Search......" style={{ flex: 5 }} />
            <div className="searchButton"><FiSearch /></div>
          </div>
          <div style={{ color: '#b9b7b7'}}>About Me</div>
        </div>

      </div>

    )
  }
}
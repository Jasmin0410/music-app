import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { FiHeadphones } from "react-icons/fi";


export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-title">
          <FiHeadphones />&nbsp;
            <Link to="/"><span>Music</span></Link>
        </div>

        <div className="header-link">
          <ul>
            <li><Link to="/chart">排行榜</Link></li>
            {/* <li><Link to="/playerlist">播放清單</Link></li> */}
          </ul>
        </div>
      </div>

    )
  }
}
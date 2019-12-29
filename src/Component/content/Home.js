import React, { Component } from 'react';
import { FiSearch } from "react-icons/fi";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  render() {
    const Search = (data) => {
      return (
        <a href={`/search/:${this.state.searchValue}`}>
          <div className="search-button">
            <FiSearch />搜尋
          </div>
        </a>
      )
    }

    return (
      <div className="home-page">
        <h1>找尋，屬於你的音樂</h1>
        <div className="searchbox">
          <input
            placeholder="Search......"
            value={this.state.searchValue}
            onChange={(e) => { console.log(e.target.value); this.setState({ searchValue: e.target.value }) }}
          />
          <Search />
        </div>
      </div>
    )
  }
}

export default Home;
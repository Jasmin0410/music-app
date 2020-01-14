import React, { Component } from 'react';
import { Route } from "react-router-dom"

import Home from './content/Home';
import ChartList from './content/ChartList';
import SongList from './content/SongList';
import SearchResult from './content/SearchResult';

export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path='/' component={Home} />
        <Route exact path="/chart" component={ChartList} />
        <Route path="/chart/:chartId" component={SongList} />
        <Route path="/search/:searchValue" component={SearchResult} />
      </React.Fragment>
    )
  }
}

export default Content;
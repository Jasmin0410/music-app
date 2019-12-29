import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chart/:chartId" component={SongList} />
        <Route path="/chart" component={ChartList} />
        <Route path="/search/:searchValue" component={SearchResult} />
      </Switch>
    )
  }
}

export default Content;
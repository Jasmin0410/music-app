import React, { Component } from 'react';
import { FiSearch } from "react-icons/fi";
import { Loading } from '../common/Loading';

import * as process from '../../env';


export class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: this.props.match.params.searchValue,
      searchResultAlbums: [],
      searchResultArtists: [],
      nodata: false,
    };
  }

  componentDidMount() {
    fetch(`https://api.kkbox.com/v1.1/search?q=${this.state.searchValue}&territory=TW&limit=50`, {
      headers: {
        Authorization: `Bearer ${process.REACT_APP_CLIENT_TOKEN}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.albums.data.length === 0 && data.artists.data.length === 0) {
          this.setState({
            nodata: true,
          })
          return
        };

        this.setState({
          searchResultAlbums: data.albums.data,
          searchResultArtists: data.artists.data,
          nodata: false
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const searchValue = this.props.match.params.searchValue;
    const { searchResultAlbums, searchResultArtists, nodata } = this.state;

    if (nodata) {
      return <div className="content"><p>no data</p></div>
    }

    if (searchResultAlbums.length === 0 || searchResultArtists.length === 0) {
      return <Loading />
    }



    const renderAlbums = searchResultAlbums.map(albums =>
      <a className="result-item" href={albums.url} target="_blank" key={albums.id}>
        <img src={albums.images[0].url} />
        <div>
          <p>{albums.name}</p><br />
          <p>{albums.artist.name}</p>
        </div>
      </a>
    )

    const renderArtists = searchResultArtists.map(artist =>
      <a className="result-item" href={artist.url} target="_blank" key={artist.id}>
        <img src={artist.images[0].url} />
        <p>{artist.name}</p>
      </a>
    )

    return (
      <div className="content search-result">
        <div className="content-title">關於{searchValue}</div>
        <div className="result">
          <h2>Artist</h2>
          {renderArtists}
        </div>

        <div className="result">
          <h2>Albums</h2>
          {renderAlbums}
        </div>
      </div>
    )
  }
}

export default SearchResult;
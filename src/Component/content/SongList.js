import React, { Component } from 'react';
import { MdPlayCircleFilled, MdPauseCircleOutline } from "react-icons/md";

import { getKKBoxToken } from '../common/GetToken';
import { Loading } from '../common/Loading';
import * as process from '../../env';

class SongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: '',
      player: '',
      playing: ''
    };

    this.clickSong = this.clickSong.bind(this);
  }

  componentDidMount() {
    const chartId = this.props.match.params.chartId;
    getKKBoxToken()
      .then(result => {
        return result['access_token']
      })
      .then(token => {
        fetch(`https://api.kkbox.com/v1.1/charts/${chartId}?territory=TW`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => { return res.json() })
          .then(data => {
            this.setState({ songs: data.tracks.data, });
            this.clickSong(data.tracks.data[0].name, data.tracks.data[0].id);
          })
      })
      .catch(err => {
        console.log(err);
      })


    // fetch(`https://api.kkbox.com/v1.1/charts/${chartId}?territory=TW`, {
    //   headers: {
    //     Authorization: `Bearer ${process.REACT_APP_CLIENT_TOKEN}`
    //   }
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ songs: data.tracks.data, });
    //     this.clickSong(data.tracks.data[0].name, data.tracks.data[0].id);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  }

  clickSong(songName, songId) {
    const youtubeApiKey = process.REACT_APP_YOUTUBE_API_KRY;

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${youtubeApiKey}&q=${songName}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ player: data.items[0].id.videoId, playing: `${songId}` })
      })
      .catch(err => console.log(err))

  }


  render() {
    if (this.state.songs === '') {
      return <Loading />
    }

    let songs = this.state.songs.slice(0, 20);
    const chartName = this.props.location.state.chartName;

    const renderSong = songs.map(song => {
      const artist = song.album.artist;
      const songStatus = this.state.playing === song.id;

      return (
        <div
          className={`song-item ${songStatus ? 'playing' : ''}`}
          key={song.id}
          onClick={() => this.clickSong(song.name, song.id)}
        >
          <div className="song-spec">
            <div className="song-name">{song.name}</div>
            <div className="song-actor">{artist.name}</div>
          </div>
          <div className="song-status">
            {songStatus ? <MdPauseCircleOutline /> : <MdPlayCircleFilled />}
          </div>
        </div>
      )
    }
    );

    return (
      <div className="content">
        <h2>{chartName}</h2>

        <div style={{ width: '100%' }}>
          {/*youtube player */}
          <iframe
            title={this.state.player}
            className="songplayer"
            src={"https://www.youtube.com/embed/" + this.state.player + "?autoplay=1&enablejsapi=1"}
            frameBorder="0"
            allow="autoplay"
          />

          {/*song list */}
          <div className="songlist">
            {renderSong}
          </div>
        </div>
      </div>
    )
  }
}


export default SongList;
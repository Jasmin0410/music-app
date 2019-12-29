import React, { Component } from 'react';
import Chart from './Chart'
import { Loading } from '../common/Loading';
import * as process from '../../env';

class ChartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charts: ''
    };
  }

  componentDidMount() {
    fetch('https://api.kkbox.com/v1.1/charts?territory=TW', {
      headers: {
        Authorization: `Bearer ${process.REACT_APP_CLIENT_TOKEN}`
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ charts: data.data })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    let charts = this.state.charts.slice(0, 18);
    if (charts === '') {
      return <Loading />
    }

    const renderChart = charts.map(chartItem =>
      <Chart key={Object.values(chartItem)[0]} chartInfo={Object.values(chartItem)} />
    );

    return (
      <div className="content">
        <h2>排行榜</h2>
        <div className="content-part">
          {renderChart}
        </div>
      </div>

    )
  }
}

export default ChartList;
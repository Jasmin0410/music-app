import React, { Component } from 'react';
import Chart from './Chart'
import { Loading } from '../common/Loading';
import { getKKBoxToken } from '../common/GetToken';

class ChartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charts: '',
      token: ''
    };
  }

  componentDidMount() {
    getKKBoxToken()
      .then(result => {
        return result['access_token']
      })
      .then(token => {
        fetch('https://api.kkbox.com/v1.1/charts?territory=TW', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => { return res.json() })
          .then(data => {
            this.setState({ charts: data.data })
          })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    let charts = this.state.charts.slice(0, 18);
    if (charts === '' || charts === undefined) {
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
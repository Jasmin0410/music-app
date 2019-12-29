import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Chart extends Component {
  render() {
    const chartInfo = this.props.chartInfo;
    return (
      <Link
        to={{ pathname: `/chart/${chartInfo[0]}`, state: { chartName: chartInfo[1] } }}
      >
        <div className="chart">
          <img src={chartInfo[4][0].url} alt={chartInfo[1]} />
          <p>{chartInfo[1]}</p>
        </div>
      </Link>
    )
  }
}


export default Chart;
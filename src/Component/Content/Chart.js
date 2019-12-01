import React, { Component } from 'react';

export class Chart extends Component {

  render() {
    const chartInfo = this.props.chartInfo;
    console.log(chartInfo);
    return (
      <div className="chart">
        <img src={chartInfo[4][0].url} alt={chartInfo[1]} />
        <p>{chartInfo[1]}</p>
      </div>
    )
  }
}


export default Chart;
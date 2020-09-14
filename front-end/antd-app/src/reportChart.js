import React, {Component} from "react";
import axios from 'axios'
import {
    Chart,
    Interval,
    Tooltip,
    Axis,
    Coordinate,
    Interaction
} from "bizcharts";

class ReportClock extends Component {
  state={
    pieData:[],
  }
  componentDidMount() {
    axios.get(process.env.PUBLIC_URL+'/chart.json')
    .then(response=>{
      this.setState({
        pieData: response.data.data
      })
    })
    .catch(function(error){
        console.log(error)
    })
  }

  render() {
    const cols = {
      percent: {
        formatter: val => {
          val = val * 100 + '%';
          return val;
        },
      },
    };

    return (
      <Chart height={400} data={this.state.pieData} scale={cols} autoFit>
        <Coordinate type="theta" radius={0.75} />
        <Tooltip showTitle={false} />
        <Axis visible={false} />
        <Interval
          position="percent"
          adjust="stack"
          color="item"
          style={{
            lineWidth: 1,
            stroke: '#fff',
          }}
          label={['count', {
            content: (data) => {
              return `${data.item}: ${data.percent * 100}%`;
            },
          }]}
        />
        <Interaction type='element-single-selected' />
      </Chart>
    );
  }
}

export default ReportClock;
import React from 'react';
import { Progress } from 'antd';

const styleProgress = {
  position: 'absolute',
  top: '360px',
  left: 0,
  background: '#001529',
  width: '200px',
  paddingLeft: '39px',
  paddingBottom: '20px',
  paddingTop: '5px'
};

const barSytle = {
  position: 'absolute',
  top: '280px',
  left: 0,
  background: '#477d80',
  width: '200px',
  paddingBottom: '30px',
  paddingTop: '0px',
};


const pstyle = {
  color: '#fff',
  position: 'absolute',
  top: '310px',
  left: 0,
  background: '#001529',
  width: '200px',
  paddingLeft: '50px',
  paddingBottom: '10px',
  paddingTop: '20px',
};

class ProgressBudget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avaliable: '',
      percent: ''
    }
  }
  render() {
    return (
      <>
        <p style={barSytle}></p>
        <p style={pstyle}>Avaliable: {this.props.avaliable}</p>
        <Progress
          style={styleProgress}
          type="circle"
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
          percent={this.props.percent}
        />

      </>
    )
  }
}
export default ProgressBudget;
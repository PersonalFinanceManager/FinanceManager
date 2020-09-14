import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import ProgressBudget from './progress'
import ListExpenses from './listExpenses'
import ReportButton from './report'
import axios from 'axios'
import {
  ShopOutlined,
  PayCircleOutlined,
  AppstoreOutlined,
  CreditCardOutlined,
  DollarOutlined,
} from '@ant-design/icons';

const { Content, Footer, Sider } = Layout;
const slideHeight = {
    height: '280px'
}
const pstyle = {
    color: '#fff',
    textAlign: 'center',
    fontSize: '18px'
}

class SiderDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      lists: {},
      progressData: {
        avaliable: '',
        percent: ''
      }
    };
  }

  

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  componentDidMount() {
    axios.get(process.env.PUBLIC_URL+'/Overview.json')
    .then(response=>{
        this.setState({
            lists: response.data.list[0],
        })
        // this.setState(progressData.avaliable,response.data.list[0].avaliable)
        // this.setState(progressData.percent,response.data.list[0].percent)
    })
    .catch(function(error){
        console.log(error)
    })
  }


  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={slideHeight}>
          <div className="logo" />
          <p style={pstyle}>Finance Management</p>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="2" icon={<ShopOutlined />}>
            Expenses &nbsp;&nbsp;&nbsp;&nbsp;{ this.state.lists.expenses }
            </Menu.Item> 
            <Menu.Item key="2" icon={<AppstoreOutlined />}>
            Bills &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ this.state.lists.bills }
            </Menu.Item> 
            <Menu.Item key="3" icon={<PayCircleOutlined />}>
            Income &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; { this.state.lists.income }
            </Menu.Item> 
            <Menu.Item key="4" icon={<CreditCardOutlined />}>
            Budget &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; { this.state.lists.budget }
            </Menu.Item> 
            <Menu.Item key="5" icon={<DollarOutlined />}>
            Account &nbsp;&nbsp;&nbsp;&nbsp;{ this.state.lists.account }
            </Menu.Item> 
          </Menu>
        </Sider>
        <ProgressBudget avaliable = {this.state.lists.avaliable} percent = {this.state.lists.percent}/>
        <ReportButton />
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px'}}>
            <Breadcrumb style={{textAlign:'right', background:'#001529', color:'#fff' }}>
    <Breadcrumb.Item>UserID: { this.state.lists.userid }</Breadcrumb.Item>
              <Breadcrumb.Item> </Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 480 }}>
              <ListExpenses/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
// ReactDOM.render(<SiderDemo />, mountNode);
import React, {Component} from 'react';
import {Collapse} from 'antd';
import axios from 'axios'

const { Panel } = Collapse;

class ReportList extends Component {
    state={
        lists:[],
    }
    componentDidMount() {
        axios.get(process.env.PUBLIC_URL+'/demo.json')
        .then(response=>{
            this.setState({
                lists: response.data.lists
            })
        })
        .catch(function(error){
            console.log(error)
        })
    }
   
    render(){
      const listItems = this.state.lists.map((item,index) =>
      <div>
        <h3>{item.Maintitle}</h3>
      <Collapse key={index} defaultActiveKey={[index]}>  
        {
            item.sub.map((subItem,i)=>{
                return (
                    <Panel header={subItem.title} key={i}>
                        {subItem.sum}
                    </Panel>
                )
            })
        }
      </Collapse>
      </div>
        );
        return(
            <div className="">
                {listItems}
            </div>
        )      
    } 
}

export default ReportList;
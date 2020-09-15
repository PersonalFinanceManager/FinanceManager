import React from 'react';
import { Table } from 'antd';
import axios from 'axios'

class ListExpenses extends React.Component {
    state = {
        data: []
    }
    columns = [
        {
            title: 'Item',
            dataIndex: 'item',
    
        },
    
        {
            title: 'Expense',
            dataIndex: 'expense',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.expense.substr(1) - b.expense.substr(1),
        },
    
        {
            title: 'Date',
            dataIndex: 'date',
            filters: [
                {
                    text: '2020/01',
                    value: '2020/01',
                },
                {
                    text: '2020/02',
                    value: '2020/02',
                },
                {
                    text: '2020/03',
                    value: '2020/03',
                },
                {
                    text: '2020/04',
                    value: '2020/04',
                },
                {
                    text: '2020/05',
                    value: '2020/05',
                },
                {
                    text: '2020/06',
                    value: '2020/06',
                },
                {
                    text: '2020/07',
                    value: '2020/07',
                },
                {
                    text: '2020/08',
                    value: '2020/08',
                },
            ],
            filterMultiple: true,
            onFilter: (value, record) => record.date.indexOf(value) === 0,
            sorter: (a, b) => Date.parse(a.date) - Date.parse(b.date),
        },
    
        {
            title: 'Classification',
            dataIndex: 'classification',
            filters: [
                {
                    text: 'Home/Rent',
                    value: 'Home/Rent',
                },
                {
                    text: 'Utilities',
                    value: 'Utilities',
                },
                {
                    text: 'Food/Groceries',
                    value: 'Food/Groceries',
                },
                {
                    text: 'Departmental',
                    value: 'Departmental',
                },
                {
                    text: 'Entertainment',
                    value: 'Entertainment',
                },
                {
                    text: 'Insurance/Medical',
                    value: 'Insurance/Medical',
                },
                {
                    text: 'Misc/One-time',
                    value: 'Misc/One-time',
                },
            ],
            filterMultiple: false,
            onFilter: (value, record) =>
                record.classification.indexOf(value) === 0,
        }
    ]

    componentDidMount() {
        //axios.get(process.env.PUBLIC_URL+'/listExpense.json')
        axios.get('/api/Transcation')
        .then(response=>{
            this.setState({
                data: response.data.list
            })
        })
        .catch(function(error){
            console.log(error)
        })
    }
    render() {
        return(
        <Table columns={this.columns} dataSource={this.state.data} />
        )
    }
}

export default ListExpenses;

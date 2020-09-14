import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'antd';
import { PieChartOutlined } from '@ant-design/icons';
import ReportClock from './reportChart'
import ReportList from './reportList'

const styleButtonBox = {
    position: 'absolute',
    top: '505px',
    left: '0',
    width: '200px',
    height: '234px',
    paddingTop: '30px',
    background: '#001529',
    textAlign: 'center'
}

const ReportButton = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div style={styleButtonBox}>
                <Button type="primary" icon={<PieChartOutlined />} onClick={() => setVisible(true)}>Reports</Button>
            </div>
            <Modal
                title="Reports Detail"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
            >
                <Row gutter={16}>
                    <Col className="gutter-row" span={12}>
                      <ReportList />
                    </Col>
                    <Col className="gutter-row" span={12}>
                       <ReportClock />
                    </Col>
                </Row>
            </Modal>
        </>
    )
}

export default ReportButton;
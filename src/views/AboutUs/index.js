import React, { Component } from 'react'
import Map from './Map'
import {Layout} from 'antd'
import Teams1 from '../../Home/Teams1';
import {  Teams10DataSource } from '../../Home/data.source';

export default class AboutUs extends Component {
    render() {
        return (
            <Layout>
                <Teams1
                    id="Teams1_0"
                    key="Teams1_0"
                    dataSource={Teams10DataSource}
                />
                <Map/>
            </Layout>
        )
    }
}

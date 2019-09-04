import React, { Component, createRef } from 'react'
import Banner from '../../Home/Banner1';
import Content3 from '../../Home/Content3';
import { enquireScreen } from 'enquire-js';
import echarts from "echarts"
import {  
    Banner10DataSource,
    Content30DataSource,
    // Banner2DataSource,
    // Banner3DataSource
} from '../../Home/data.source';
import{
  Row,
  Col,
  Card,
} from 'antd'
import rightSiderImg1 from './homePageRightSide1.jpg'
import rightSiderImg2 from './homePageRightSide2.jpg'

let isMobile;
  enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

const chartData = [
  ['ageGrop','2017','2018','2019'],
  ['age 50-54',2630, 716, 1797],
  ['age 55-59',2707, 698, 1891],
  ['age 60-64',2455, 662, 1739],
  ['age 65-69',2165, 523, 1397],
  ['age 70-74',1918, 440, 1287],
  ['age 75-79',1800, 374, 1065],
  ['age 80-84',1860, 295, 1088],
  ['age 85+',3059, 388, 1616]
]

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isMobile,
          show: !location.port,
        };
        this.fluAmountChart = createRef()
      }

      initFluChart = () => {
        this.fluChart = echarts.init(this.fluAmountChart.current)
        const option = {
          title:{
            text: "Influenza cases For different Group in Recent years"
          },
          legend: {},
          tooltip: {},
          dataset: {
              dimensions:['ageGrop','2017','2018','2019'],
              source: chartData
          },
          xAxis: {type: 'category'},
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
              {type: 'bar'},
              {type: 'bar'},
              {type: 'bar'}
          ]
      };
        this.fluChart.setOption(option)
      }  

    componentDidMount() {
        enquireScreen((b) => {
          this.setState({ isMobile: !!b });
        });

        if (location.port) {
          setTimeout(() => {
          this.setState({
            show: true,
          });
        }, 500);
      }
      this.initFluChart()
    }

    render() {
        return (
            <div>
              <Row>
                <Col md={24} lg={12}>
                <Banner
                    id="Banner1_0"
                    key="Banner1_0"
                    dataSource={Banner10DataSource}
                    isMobile={this.state.isMobile}
                />
                </Col> 

                <Col md={12} lg={6}>
                  <Card 
                    style={{height:600}}
                    cover={<img  src={rightSiderImg1} alt="example"/>}
                  >
                  </Card>
                </Col>
                <Col md={12} lg={6}>
                <Card 
                    style={{height:600}}
                    cover={<img  src={rightSiderImg2} alt="example"/>}
                  >
                  </Card>
                </Col>
              </Row> 

              <Col md={12} lg={24}>
                <Card 
                    title="" 
                    bordered={true}  
                >
                    <div ref={this.fluAmountChart} style={{height:'350px'}}/>
                </Card>
              </Col>
              <Row>
                <Col md={24} lg={24}>
                <Content3
                    id="Content3_0"
                    key="Content3_0"
                    dataSource={Content30DataSource}
                    isMobile={this.state.isMobile}
                />
                </Col>
                </Row> 
            </div>
        )
    }
}

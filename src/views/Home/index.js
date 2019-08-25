import React, { Component } from 'react'
import Banner from '../../Home/Banner1';
import Content3 from '../../Home/Content3';
import { enquireScreen } from 'enquire-js';
import {  
    Banner10DataSource,
    Content30DataSource,
} from '../../Home/data.source';

let isMobile;
  enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isMobile,
          show: !location.port,
        };
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
    }

    render() {
        return (
            <div>
                <Banner
                    id="Banner1_0"
                    key="Banner1_0"
                    dataSource={Banner10DataSource}
                    isMobile={this.state.isMobile}
                />
                <Content3
                    id="Content3_0"
                    key="Content3_0"
                    dataSource={Content30DataSource}
                    isMobile={this.state.isMobile}
                />
            </div>
        )
    }
}

import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import {Layout} from 'antd'
import { enquireScreen } from 'enquire-js';
import '../../Home/less/antMotionStyle.less';
import Nav from "../../Home/Nav3"
import Footer from '../../Home/Footer0';
import {
  Nav30DataSource,
  Footer00DataSource,
} from '../../Home/data.source';
const { Content} = Layout

let isMobile;
  enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;



class Frame extends Component {

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
      // console.log(this.props)
        return (
            <Layout style={{minHeight:"100%"}}>
                <Nav
                  id="Nav3_0"
                  key="Nav3_0"
                  dataSource={Nav30DataSource}
                  isMobile={this.state.isMobile}
                />
                <Layout>
                    <Content>                    
                        {this.props.children}
                    </Content>
                </Layout>
                <Footer
                  id="Footer0_0"
                  key="Footer0_0"
                  dataSource={Footer00DataSource}
                  isMobile={this.state.isMobile}
                />
            </Layout>
        )
    }
}
export default withRouter(Frame)
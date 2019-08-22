import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import {Layout, Menu} from 'antd'
import TweenOne from 'rc-tween-one';
import logo from './logo.png';
import { enquireScreen } from 'enquire-js';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import '../../Home/less/antMotionStyle.less';



const { Content} = Layout


const dataSource = {
    wrapper: { className: 'header0 home-page-wrapper' },
    page: { className: 'home-page' },
    logo: {
      className: 'header0-logo',
      children: logo,
    },
    Menu: {
      className: 'header0-menu',
      children: [
        { name: 'item0', a: { children: 'Home', href: '' } },
        { name: 'item1', a: { children: 'Vaccinations', href: '' } },
        { name: 'item2', a: { children: 'recommondations', href: '' } },
        { name: 'item3', a: { children: 'AboutUs', href: '' } },
      ],
    },
    mobileMenu: { className: 'header0-mobile-menu' },
  };

  const footerDataSource = {
    wrapper: { className: 'home-page-wrapper footer0-wrapper' },
    OverPack: { className: 'home-page footer0', playScale: 0.05 },
    copyright: {
      className: 'copyright',
      children: (
        <>
          <span>
            ©2019 Codename Anti-virus All Rights
            Reserved
          </span>
        </>
      ),
    },
  };

class Frame extends Component {

    constructor(props) {
        super(props);
        this.state = {
          phoneOpen: false,
          menuHeight: 0,
          isMobile : false,
        };
        this.menu = React.createRef();
      }

    onMenuClick = ({key}) =>{
        this.props.history.push(key)
    }

    componentDidMount() {
        // 适配手机屏幕;
        enquireScreen((b) => {
          this.setState({ isMobile: !!b });
        });
      }

    phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
        phoneOpen,
        menuHeight: phoneOpen ? this.menu.current.dom.scrollHeight : 0,
    })
    }  
    
    render() {
        const {  phoneOpen, menuHeight, isMobile } = this.state;
    
        return (
            <Layout style={{minHeight:"100%"}}>
                <TweenOne
                    component="header"
                    animation={{ opacity: 0, type: 'from' }}
                    {...dataSource.wrapper}
                    {...this.props}
                >
                    <div
                    {...dataSource.page}
                    className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
                    >
                    <TweenOne
                        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
                        {...dataSource.logo}
                    >
                        <img height="50px" src={dataSource.logo.children} alt="img" />
                    </TweenOne>
                    {isMobile && (
                        <div
                        {...dataSource.mobileMenu}
                        onClick={() => {
                            this.phoneClick();
                        }}
                        >
                        <em />
                        <em />
                        <em />
                        </div>
                    )}
                    <TweenOne
                        {...dataSource.Menu}
                        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
                        ref={this.menu} // {(c) => { this.menu = c; }}
                        style={isMobile ? { height: menuHeight } : null}
                    >
                        <Menu
                        mode={isMobile ? 'inline' : 'horizontal'}
                        defaultSelectedKeys={['0']}
                        theme={isMobile ? 'dark' : 'default'}
                        onClick={this.onMenuClick}
                        >
                        {
                            this.props.menus.map( item => {
                                return (
                                    <Menu.Item key={item.pathname} >
                                    {item.title}
                                    </Menu.Item>
                                )
                            }
                            )
                        }
                        </Menu>
                    </TweenOne>
                    </div>
                </TweenOne>
                <Layout style={{ padding: '16px' }}>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 700,
                        }}
                    >
                        {this.props.children}
                    </Content>
                </Layout>
                <div {...this.props} {...footerDataSource.wrapper}>
                    <OverPack {...footerDataSource.OverPack}>
                    <TweenOne
                        animation={{ y: '+=30', opacity: 0, type: 'from' }}
                        key="footer"
                        {...footerDataSource.copyright}
                    >
                        {footerDataSource.copyright.children}
                    </TweenOne>
                    </OverPack>
                </div>
            </Layout>
        )
    }
}
export default withRouter(Frame)
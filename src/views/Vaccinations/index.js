import React, { Component } from 'react'
import {Layout, Anchor,Affix, Divider, Typography,Col, Row, Card} from 'antd'
import { enquireScreen } from 'enquire-js';
import vaccine1 from './vaccine1.jpg'
import vaccine2 from './vaccine2.jpg'


const {  Link } = Anchor
const {Content,Sider} = Layout
const {Title,Paragraph} = Typography



let isMobile;
  enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Vaccination extends Component {

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
        if(isMobile){
            return(
                <Layout style={{ padding: '8px' }}>
                <Content style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}>
                    <div>
                    <div id="influenza">
                        <Title>What is influenza?</Title>
                        <Paragraph>
                        Influenza (flu) is a potentially life threatening illness. It is a contagious disease of the
                        respiratory tract caused by viruses of influenza. Each year, influenza causes serious
                        infection and death around the globe, usually in the winter months (seasonal
                        influenza).<br/><br/>
                        Influenza can lead to complications and for some people - the elderly, people with
                        poor immune systems and people with pre-existing respiratory, cardiac and
                        endocrine disease—influenza can be a significant disease and cause death. It can
                        also cause the death of healthy adults and children.
                        The best way to prevent the flu is by getting a flu vaccine each year.
                        </Paragraph>
                    </div>
                    <Divider/>
                    <div id="vaccineWorks">
                        <Title >How do vaccines work?</Title>
                        <Paragraph>
                            Our immune system is made up of special cells and chemicals (called antibodies) that fight infection.
                            We gain immunity against diseases either naturally (by catching an illness), or through immunisation.<br/><br/>
                            Vaccines are made up of a modified version of a disease-causing germ or toxin (known as ‘antigens’). 
                            They are usually given by injection or a small drink that contains the vaccine. <br/><br/>
                            The immune system responds to the weakened, partial or dead germ or inactivated toxin (antigen) as 
                            if it was a fully-fledged germ and makes antibodies to destroy it. These antibodies are made without us catching the illness.
                        </Paragraph>
                    </div>
                    <Divider />
                    <div id="importance">
                        <Title>A Flu Vaccine is the Best Protection Against Flu</Title>
                        <Paragraph>
                        The best way to protect against flu and its potentially serious complications is with a CDC recommends that everyone 6 months of age and older get a seasonal flu vaccine each year by the end of October. However, as long as flu viruses are circulating, vaccination should continue throughout flu season, even in January or later. <br/><br/>

                        Flu vaccination is especially important for people 65 years and older because they are at high risk of developing serious complications from flu. Flu vaccines are updated each season as needed to keep up with changing viruses. Also, immunity wanes over a year so annual vaccination is needed to ensure the best possible protection against influenza. A flu vaccine protects against the flu viruses that research indicates will be most common during the upcoming season. (See Vaccine Virus Selection for this season’s exact vaccine composition.) The 2018-2019 flu vaccine has been updated from last season’s vaccine to better match circulating viruses. Immunity from vaccination sets in after about two weeks. <br/><br/>

                        Older people with weaker immune systems often have a lower protective immune response after flu vaccination compared to younger, healthier people. This can make them more susceptible to the flu. Although immune responses may be lower in the elderly, vaccine effectiveness has been similar in most flu seasons among older adults and those with chronic health conditions compared to younger, healthy adults. Despite the fact that older adults have weaker immune responses to vaccine flu vaccines, there are many reasons why people in that age group should be vaccinated each year.<br/><br/>
                        </Paragraph>
                    </div>
                        <Title>
                        Types of Flu Shots for People 65 and Older
                        </Title>
                        <Paragraph>
                        People 65 years and older should get a flu shot and not a nasal spray vaccine. They can get any flu vaccine approved for use in that age group with no preference for any one vaccine over another. There are regular flu shots that are approved for use in people 65 and older and there also are two vaccines designed specifically for people 65 and older:
                        </Paragraph>
                        
                        <Row gutter={16}>
                            <Col span={24}>
                            <Card 
                                title="High dose vaccine" 
                                cover={<img alt="example" src= {vaccine1} />}
                            >
                                The “high dose vaccine” contains 4 times the amount of antigen as a regular flu shot. It is associated with a stronger immune response following vaccination (higher antibody production). Results from a clinical trial of more than 30,000 participants showed that adults 65 years and older who received the high dose vaccine had 24% fewer influenza infections as compared to those who received the standard dose flu vaccine. The high dose vaccine has been approved for use in the United States since 2009.
                            </Card>
                            </Col>
                            <Col span={24}>
                            <Card 
                                title="Adjuvanted flu vaccine" 
                                cover={<img alt="example" src= {vaccine2} />}
                            >
                                The adjuvanted flu vaccine, Fluad, is made with MF59 adjuvant&nbsp;an additive that creates a stronger immune response to vaccination. In a Canadian observational study of 282 people aged 65 years and older conducted during the 2011-12 season, Fluad was 63% more effective than regular-dose unadjuvanted flu shots. There are no randomized studies comparing Fluad with Fluzone High-Dose. This vaccine was available for the first time in the United States during the 2016-2017 season.                                    
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
            )
        }else{
            return (
                <Layout>
                    <Sider style={{backgroundColor:'#fff'}}>
                        <Affix style={{position: "fixed", top: "100px", width: "160px", marginLeft:'20px', height: "94px"}}>
                            <Anchor >
                                <Link href="#influenza" title="What is influenza?" />
                                <Link href="#vaccineWorks" title="How do vaccines work?" />
                                <Link href="#importance" title="Best Protection against Flu" />
                                <Link href="#fluShotType" title="Types of Flu Shots">
                                    <Link href="#type1" title="High dose vaccine" />
                                    <Link href="#type2" title="Adjuvanted flu vaccine" />
                                </Link>
                            </Anchor>
                        </Affix>
                    </Sider>
                    <Layout style={{ padding: '8px' }}>
                        <Content style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}>
                            <div>
                                <div id="influenza">
                                    <Title>What is influenza?</Title>
                                    <Paragraph>
                                    Influenza (flu) is a potentially life threatening illness. It is a contagious disease of the
                                    respiratory tract caused by viruses of influenza. Each year, influenza causes serious
                                    infection and death around the globe, usually in the winter months (seasonal
                                    influenza).<br/><br/>
                                    Influenza can lead to complications and for some people - the elderly, people with
                                    poor immune systems and people with pre-existing respiratory, cardiac and
                                    endocrine disease—influenza can be a significant disease and cause death. It can
                                    also cause the death of healthy adults and children.
                                    The best way to prevent the flu is by getting a flu vaccine each year.
                                    </Paragraph>
                                </div>
                                <Divider/>
                                <div id="vaccineWorks">
                                    <Title >How do vaccines work?</Title>
                                    <Paragraph>
                                        Our immune system is made up of special cells and chemicals (called antibodies) that fight infection.
                                        We gain immunity against diseases either naturally (by catching an illness), or through immunisation.<br/><br/>
                                        Vaccines are made up of a modified version of a disease-causing germ or toxin (known as ‘antigens’). 
                                        They are usually given by injection or a small drink that contains the vaccine. <br/><br/>
                                        The immune system responds to the weakened, partial or dead germ or inactivated toxin (antigen) as 
                                        if it was a fully-fledged germ and makes antibodies to destroy it. These antibodies are made without us catching the illness.
                                    </Paragraph>
                                </div>
                                <Divider />
                                <div id="importance">
                                    <Title>A Flu Vaccine is the Best Protection Against Flu</Title>
                                    <Paragraph>
                                    The best way to protect against flu and its potentially serious complications is with a CDC recommends that everyone 6 months of age and older get a seasonal flu vaccine each year by the end of October. However, as long as flu viruses are circulating, vaccination should continue throughout flu season, even in January or later. <br/><br/>

                                    Flu vaccination is especially important for people 65 years and older because they are at high risk of developing serious complications from flu. Flu vaccines are updated each season as needed to keep up with changing viruses. Also, immunity wanes over a year so annual vaccination is needed to ensure the best possible protection against influenza. A flu vaccine protects against the flu viruses that research indicates will be most common during the upcoming season. (See Vaccine Virus Selection for this season’s exact vaccine composition.) The 2018-2019 flu vaccine has been updated from last season’s vaccine to better match circulating viruses. Immunity from vaccination sets in after about two weeks. <br/><br/>

                                    Older people with weaker immune systems often have a lower protective immune response after flu vaccination compared to younger, healthier people. This can make them more susceptible to the flu. Although immune responses may be lower in the elderly, vaccine effectiveness has been similar in most flu seasons among older adults and those with chronic health conditions compared to younger, healthy adults. Despite the fact that older adults have weaker immune responses to vaccine flu vaccines, there are many reasons why people in that age group should be vaccinated each year.<br/><br/>
                                    </Paragraph>
                                </div>
                                
                                <Divider dashed />
                                <div id="fluShotType">
                                    <Title>
                                    Types of Flu Shots for People 65 and Older
                                    </Title>
                                    <Paragraph>
                                    People 65 years and older should get a flu shot and not a nasal spray vaccine. They can get any flu vaccine approved for use in that age group with no preference for any one vaccine over another. There are regular flu shots that are approved for use in people 65 and older and there also are two vaccines designed specifically for people 65 and older:
                                    </Paragraph>
                                </div>                                
                                <Row gutter={16}>
                                    <div id="type1">
                                        <Col span={12}>
                                        <Card 
                                            title="High dose vaccine" 
                                            cover={<img alt="example" src= {vaccine1} />}
                                        >
                                            The “high dose vaccine” contains 4 times the amount of antigen as a regular flu shot. It is associated with a stronger immune response following vaccination (higher antibody production). Results from a clinical trial of more than 30,000 participants showed that adults 65 years and older who received the high dose vaccine had 24% fewer influenza infections as compared to those who received the standard dose flu vaccine. The high dose vaccine has been approved for use in the United States since 2009.
                                        </Card>
                                        </Col>
                                    </div>
                                    <div id="type2">
                                    <Col span={12}>
                                    <Card 
                                        title="Adjuvanted flu vaccine" 
                                        cover={<img alt="example" src= {vaccine2} />}
                                    >
                                        The adjuvanted flu vaccine, Fluad, is made with MF59 adjuvant&nbsp;an additive that creates a stronger immune response to vaccination. In a Canadian observational study of 282 people aged 65 years and older conducted during the 2011-12 season, Fluad was 63% more effective than regular-dose unadjuvanted flu shots. There are no randomized studies comparing Fluad with Fluzone High-Dose. This vaccine was available for the first time in the United States during the 2016-2017 season.                                    
                                        </Card>
                                    </Col>
                                    </div>
                                </Row>
                                
                            </div>
                        </Content>
                    </Layout>

                </Layout>
            )
        }
        
    }
}

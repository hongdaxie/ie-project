import React, { Component, createRef } from 'react'
import {Layout, Typography,Col, Row, Card, Radio, Form, Button, Modal,Collapse, Checkbox} from 'antd'
import { enquireScreen } from 'enquire-js';
import echarts from "echarts"
import vaccine1 from './vaccine1.jpg'
import vaccine2 from './vaccine2.jpg'



const {Content} = Layout
const {Paragraph} = Typography
const { Panel } = Collapse;


const chartData = [
    // {date: "May-20", value: 1149},
    {date: "May-22", value: 1649},
    {date: "May-27", value: 1788},
    {date: "Jun-01", value: 1280},
    {date: "Jun-07", value: 1802},
    {date: "Jun-15", value: 1918},
    {date: "Jun-22", value: 2811},
    {date: "Jun-29", value: 2106},
    {date: "Jul-06", value: 2762},
    {date: "Jul-13", value: 3648},
    {date: "Jul-20", value: 3265},
    {date: "Jul-27", value: 2813},
    {date: "Aug-03", value: 2592},
    {date: "Aug-10", value: 2312},
    {date: "Aug-17", value: 2941},
    {date: "Aug-24", value: 2751},
]

let isMobile;
  enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

class Vaccination extends Component {

    constructor(props) {
        super(props);
        this.fluAmountChart = createRef()
        this.state = {
          isMobile,
          show: !location.port,
          radioValue: 1,
          radioValue1: 1,
          vaccineAdviceVisible: false,
          suggestion: "",
          checkedValue: [],
          answerVisible: false,
          answer:""
        };
      }

      initFluChart = () => {
        this.fluChart = echarts.init(this.fluAmountChart.current)
        const option = {
            title: {
                text: 'Recent influenza cases in Victoria 2019'
            },
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            
                    type : 'shadow'        
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                data: chartData.map(item => item.date),
                axisTick: {
                    alignWithLabel: true
                }
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: chartData.map(item => item.value),
                type: 'bar',
                areaStyle: {},
                name: "Number of cases"
            }],
            dataZoom : [
                {
                    type: 'slider',
                    show: true,
                    start: 10,
                    end: 100,
                    handleSize: 8
                },
                {
                    type: 'inside',
                    start: 94,
                    end: 100
                },
                {
                    type: 'slider',
                    show: true,
                    yAxisIndex: 0,
                    filterMode: 'empty',
                    width: 12,
                    height: '70%',
                    handleSize: 8,
                    showDataShadow: false,
                    left: '93%'
                }
            ]

        }
        this.fluChart.setOption(option)
      }

      onChange = e => {
        this.setState({
            radioValue: e.target.value,
        });
      };

      onChange1 = e => {
        this.setState({
            radioValue1: e.target.value,
        });
      }

      onCheckboxChange = e => {
        // console.log(e)
        this.setState({
            checkedValue: e
        })
      }

    handleSubmit = ()=>{
        // console.log(this.state.radioValue)
        // console.log(this.state.radioValue1)
        if(this.state.radioValue === 2 && this.state.radioValue1 === 2){
            this.setState({
                vaccineAdviceVisible: true,
                suggestion: "Please go to clinic to get a flu vaccine!"
            })
        }else{
            this.setState({
                vaccineAdviceVisible: true,
                suggestion: "You do not need flu vaccine in this year."
            })
        } 
    }  


    handleSubmit1 = e => {
        e.preventDefault()
        // console.log(this.state.checkedValue)
        // console.log()
        if((this.state.checkedValue.includes("A"))&&(this.state.checkedValue.includes("B"))
        &&(this.state.checkedValue.includes("C"))&&(this.state.checkedValue.includes("D"))&& 
        this.state.checkedValue.length === 4){
            this.setState({
                answerVisible: true,
                // answer: "Your answer is correct!"
                answer: "yes"
            })
        }else{
            this.setState({
                answerVisible: true,
                answer: "no"
            })
        }
    }

    
      handleOk = e => {
        // console.log(e);
        this.setState({
            vaccineAdviceVisible: false,
        });
      };

      handleOk1 = e => {
        // console.log(e);
        this.setState({
            answerVisible: false,
        });
      };
    
      handleCancel = e => {
        // console.log(e);
        this.setState({
            vaccineAdviceVisible: false,
        });
      };

      handleCancel1 = e => {
        // console.log(e);
        this.setState({
            answerVisible: false,
        });
      };

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
      
    //   this.initViz() 
    }

    // initViz() {  
    //     let vizUrl = 'https://public.tableau.com/profile/himan94#!/vizhome/Victoriainfluenzamap/Sheet1';  
    //     vizUrl = vizUrl + "&output=embed"
    //     const vizContainer = this.vizContainer;  
    //     let viz = new window.tableau.Viz(vizContainer, vizUrl)  
    //   } 

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 24 },
          };

            return (
                <>
                <Layout>
                    {/* <Sider style={{backgroundColor:'#fff'}}>
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
                    </Sider> */}
                    <Layout style={{ padding: '8px' }}>
                        <Content style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}>
                        <div>
                            <Row gutter={16}>
                                <div >
                                    <Col md={24} lg={12}>
                                    <Card 
                                        title="Do I need to have flu vaccination now?" 
                                    >
                                    <div>
                                    <Form {...formItemLayout} >
                                        <Form.Item>
                                            When was the last time you received the vaccinations for influenza/flu?<br />
                                            <Radio.Group onChange={this.onChange} value={this.state.radioValue}>
                                                <Radio value={1}>Less than 3 months</Radio><br/>
                                                <Radio value={2}>More than 3 months</Radio>
                                                {/** not sure */}
                                            </Radio.Group>
                                            <br />
                                            Did you get the vaccine in April this year?<br />
                                            <Radio.Group onChange={this.onChange1} value={this.state.radioValue1}>
                                                <Radio value={1}>Yes</Radio>
                                                <Radio value={2}>No</Radio><br/>
                                            </Radio.Group>
                                        </Form.Item>
                                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleSubmit}>
                                            Submit
                                        </Button>
                                    </Form>
                                    </div>
                                    </Card>
                                    <Modal
                                        title="Suggestion"
                                        visible={this.state.vaccineAdviceVisible}
                                        onOk={this.handleOk}
                                        onCancel={this.handleCancel}
                                    >
                                        <p>{this.state.suggestion}</p>
                                    </Modal>
                                    </Col>
                                    <Col md={24} lg={12}>
                                    <Card 
                                        title="Which category do you believe is most prone to Influenza/Flu?" 
                                    >
                                        <Form {...formItemLayout} >
                                            <Form.Item>
                                            {getFieldDecorator('checkbox-group', {
                                                initialValue: [],
                                            })(
                                                <Checkbox.Group style={{ width: '100%' }} onChange={this.onCheckboxChange}>
                                                <Row>
                                                    <Col>
                                                    You can choose more than one option. <br /><br />
                                                    </Col>
                                                    <Col span={24}>
                                                    <Checkbox value="A">
                                                    Those with chronic respiratory conditions
                                                    </Checkbox>
                                                    </Col>
                                                    <br /><br />
                                                    <Col span={24}>
                                                    <Checkbox value="B">
                                                    Pregnant women (especially 2nd and 3rd trimester)
                                                    </Checkbox>
                                                    </Col>
                                                    <br /><br />
                                                    <Col span={24}>
                                                    <Checkbox value="C">
                                                    Aboriginal and Torres Strait Islander people
                                                    </Checkbox>
                                                    </Col>
                                                    <br /><br />
                                                    <Col span={24}>
                                                    <Checkbox value="D">
                                                    People aged 65 years or older
                                                    </Checkbox>
                                                    </Col>
                                                    <br /><br />
                                                    <Col span={24}>
                                                    <Checkbox value="E">
                                                    Young adults
                                                    </Checkbox>
                                                    </Col>
                                                </Row>
                                                </Checkbox.Group>,
                                            )}
                                            </Form.Item>
                                            <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleSubmit1}>
                                            Submit
                                        </Button>
                                        </Form>
                                    </Card>
                                    <Modal
                                        title="Answer"
                                        visible={this.state.answerVisible}
                                        onOk={this.handleOk1}
                                        onCancel={this.handleCancel1}
                                    >
                                        
                                        {this.state.answer === "yes" 
                                        ? 
                                        <p style={{color:"green"}}>Your answer is correct!</p>
                                        :
                                        <div>
                                        <p style={{color: "red"}} >Sorry, your answer is not correct.</p>
                                        <p><b>The correct answer is:</b></p>
                                        <p>1.Those with chronic respiratory conditions</p>
                                        <p>2.Pregnant women (especially 2nd and 3rd trimester</p>
                                        <p>3.Aboriginal and Torres Strait Islander people</p>
                                        <p>4.People aged 65 years or older</p>
                                        </div>
                                        }
                                    </Modal>
                                    </Col>
                                </div>
                                <div>
                                <Col md={12} lg={24}>
                                <Card 
                                    // title="Recent flu cases" 
                                    bordered={true}  
                                >
                                    <div ref={this.fluAmountChart} style={{height:'350px'}}/>
                                </Card>
                                </Col>
                            </div>
                            </Row>
                            
                            
                        </div>          
                            <div style={{marginTop:"20px"}}>
                            <Collapse 
                            // defaultActiveKey={['1']} 
                            >
                                <Panel header="What is influenza?" key="1">
                                <div id="influenza">
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
                                </Panel>
                                <Panel header="How do vaccines work?" key="2">
                                <div id="vaccineWorks">
                                    <Paragraph>
                                        Our immune system is made up of special cells and chemicals (called antibodies) that fight infection.
                                        We gain immunity against diseases either naturally (by catching an illness), or through immunisation.<br/><br/>
                                        Vaccines are made up of a modified version of a disease-causing germ or toxin (known as ‘antigens’). 
                                        They are usually given by injection or a small drink that contains the vaccine. <br/><br/>
                                        The immune system responds to the weakened, partial or dead germ or inactivated toxin (antigen) as 
                                        if it was a fully-fledged germ and makes antibodies to destroy it. These antibodies are made without us catching the illness.
                                    </Paragraph>
                                </div>
                                </Panel>
                                <Panel header="A Flu Vaccine is the Best Protection Against Flu" key="3">
                                <div id="importance">
                                    <Paragraph>
                                    The best way to protect against flu and its potentially serious complications is with a CDC recommends that everyone 6 months of age and older get a seasonal flu vaccine each year by the end of October. However, as long as flu viruses are circulating, vaccination should continue throughout flu season, even in January or later. <br/><br/>

                                    Flu vaccination is especially important for people 65 years and older because they are at high risk of developing serious complications from flu. Flu vaccines are updated each season as needed to keep up with changing viruses. Also, immunity wanes over a year so annual vaccination is needed to ensure the best possible protection against influenza. A flu vaccine protects against the flu viruses that research indicates will be most common during the upcoming season. (See Vaccine Virus Selection for this season’s exact vaccine composition.) The 2018-2019 flu vaccine has been updated from last season’s vaccine to better match circulating viruses. Immunity from vaccination sets in after about two weeks. <br/><br/>

                                    Older people with weaker immune systems often have a lower protective immune response after flu vaccination compared to younger, healthier people. This can make them more susceptible to the flu. Although immune responses may be lower in the elderly, vaccine effectiveness has been similar in most flu seasons among older adults and those with chronic health conditions compared to younger, healthy adults. Despite the fact that older adults have weaker immune responses to vaccine flu vaccines, there are many reasons why people in that age group should be vaccinated each year.<br/><br/>
                                    </Paragraph>
                                </div>
                                </Panel>
                                <Panel header="Types of Flu Shots for People 65 and Older" key="4">
                                <div id="fluShotType">
                                    <Paragraph>
                                    People 65 years and older should get a flu shot and not a nasal spray vaccine. They can get any flu vaccine approved for use in that age group with no preference for any one vaccine over another. There are regular flu shots that are approved for use in people 65 and older and there also are two vaccines designed specifically for people 65 and older:
                                    </Paragraph>
                                </div>                                
                                <Row gutter={16}>
                                    <div id="type1">
                                        <Col md={24} lg={12}>
                                        <Card 
                                            title="High dose vaccine" 
                                            cover={<img alt="example" src= {vaccine1} />}
                                        >
                                            The “high dose vaccine” contains 4 times the amount of antigen as a regular flu shot. It is associated with a stronger immune response following vaccination (higher antibody production). Results from a clinical trial of more than 30,000 participants showed that adults 65 years and older who received the high dose vaccine had 24% fewer influenza infections as compared to those who received the standard dose flu vaccine. The high dose vaccine has been approved for use in the United States since 2009.
                                        </Card>
                                        </Col>
                                    </div>
                                    <div id="type2">
                                    <Col md={24} lg={12}>
                                    <Card 
                                        title="Adjuvanted flu vaccine" 
                                        cover={<img alt="example" src= {vaccine2} />}
                                    >
                                        The adjuvanted flu vaccine, Fluad, is made with MF59 adjuvant&nbsp;an additive that creates a stronger immune response to vaccination. In a Canadian observational study of 282 people aged 65 years and older conducted during the 2011-12 season, Fluad was 63% more effective than regular-dose unadjuvanted flu shots. There are no randomized studies comparing Fluad with Fluzone High-Dose. This vaccine was available for the first time in the United States during the 2016-2017 season.                                    
                                        </Card>
                                    </Col>
                                    </div>
                                </Row>
                                </Panel>
                            </Collapse>
                            </div>
                            
                        </Content>
                    </Layout>

                </Layout>
                {/* <div ref={(div) => { this.vizContainer = div }}></div> */}
                </>
            )
        // }
        
    }
}


export default Form.create()(Vaccination)
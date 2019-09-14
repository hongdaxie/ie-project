import React, { Component } from 'react'
import { Input, Col ,Row, Card, Icon, Spin, List,Tag, message} from 'antd';
import { getHospitalsBySuburb, getHospitalImageURL } from '../../requests'


const { Search } = Input;


export default class Vaccination extends Component {

    constructor(){
        super()
        this.state={
            isSearching: false
        }
    }


    searchHandle = (value, event) => {
        this.setState({
            isSearching: true
        })

        let respData
        getHospitalsBySuburb(value)
            .then(resp => {
                respData = resp.data
            })
            .then(()=>{
                const data = respData.map(item => {
                    let imageURL = "1"
                    getHospitalImageURL(item.name)
                        .then(imageResp =>{
                            // console.log(imageResp)
                            imageURL = imageResp.data.items[0].link
                        }
                        )
                        .catch(err => {
                            message.error("Goolge search error" + err)
                        })
                        .finally(()=> {
                            item.image = imageURL
                        })
                    console.log(item)
                    return item
                })
                
                this.setState({
                    dataSource: data
                })
                console.log(this.state.dataSource)
            })
            .catch(err => {
            // deal with error
            })
            .finally(() => {
            this.setState({
                isSearching: false
                })
            })

            
    }

    // createColumns = (columesKeys) => {
    //     console.log(columesKeys)
    // }

    render() {
        return (
            <Spin spinning= {this.state.isSearching}>
            <div>
                
                <Col span={12} offset={6}>
                    <Card
                        bordered = {false}
                        style = {{marginTop:'8px'}}
                        title = "Find the near hospitals or clinic!"
                    >
                    <Row >
                    <Search 
                        prefix={<Icon type="search" />}
                        placeholder="input search text" 
                        size="large"
                        onSearch={this.searchHandle} 
                        enterButton  = "Search"
                    />
                    {/* <div style={{align:'left', border:'1px solid #A5ACB2'}}>aaaaa</div>  */}
                    </Row> 
                    
                    </Card>  
                </Col>

                <Col span={12} offset={6} style={{marginTop:'16px'}}>
                <List
                    grid={{column: 1}}
                    dataSource = {this.state.dataSource}
                    renderItem = {
                        item => (
                            <List.Item>
                                <Card 
                                    hoverable
                                >
                                {/* <Meta 
                                    style={{textAlign: 'center',margin:'8px'}}
                                    title = {item.name}   
                                /> */}
                                <Card.Grid  
                                    style={{width:'25%', margin:'8px', border:'0px'}}
                                    hoverable="false"
                                >
                                    {item.image?"111":"222"}
                                <img src={item.image}  alt={item.name} />
                                </Card.Grid>
                                <p style={{margin:'8px', fontSize:'16px', fontWeight:'bold'}}>
                                {item.name}
                                </p>
                                <p>
                                    <Tag color={item.type === "private"?"#87d068":"#108ee9"}>{item.type}</Tag>
                                </p>
                                <p style={{margin:'8px'}}>
                                    {item.streetNumber} {item.roadName} {item.roadType}, {item.suburb} {item.postcode}, {item.state}
                                </p>
                                </Card>
                            </List.Item>
                        )
                    }
                >
                </List>
                </Col>
            </div>
            </Spin>
        )
    }
}

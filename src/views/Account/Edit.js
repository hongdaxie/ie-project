import React, { Component } from 'react'
import { getGrandparentById, updateGrandparent } from '../../requests'
import { Form, Input, Tooltip, Icon, Col, Button, Card, message, Spin, Switch } from 'antd'
import { withRouter } from 'react-router-dom'


class Edit extends Component {
    constructor(){
        super()
        this.state= {
            isLoading: false,
            isUpdating: false
        }
    }

    getItemData = ()=>{
        this.setState({
            isLoading: true
        })
        getGrandparentById(this.props.match.params.id)
            .then(resp => {
                if(resp.data){
                    console.log(resp.data)
                    // console.log(this.props.form)
                    this.props.form.setFieldsValue({
                        email: resp.data.email,
                        name: resp.data.name,
                        relationship: resp.data.relationship,
                        receiveNotification: resp.data.receiveNotification
                    })
                }
            })
            .finally(()=>{
                this.setState({
                    isLoading: false
                })
            })
    }

    handleSubmit = (e) =>{
        // console.log(e)
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.setState({
                    isUpdating: true
                })
                const user = {id: this.props.location.state.userid}
                values.userid = user
                values.id = this.props.match.params.id
                const newGrandparentInfo = JSON.stringify(values)
                updateGrandparent(newGrandparentInfo)
                    .then(resp => {
                        if(resp.data){
                            message.success("You have updated successfully!")
                            this.props.history.push({
                                pathname: `/account`,
                            })
                        }else{
                            message.error("Failed to update!")
                        }
                    })
                    .finally(()=>{
                        this.setState({
                            isUpdating: false
                        })
                    })
            }
        })
    }

    componentDidMount(){
        this.getItemData()
    }

    render() {
        // console.log(this.props.match.params.id)
        // console.log(this.props.location.state.userid)
        // console.log(this.props)
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
            };
        const tailFormItemLayout = {
        wrapperCol: {
            xs: {
            span: 24,
            offset: 0,
            },
            sm: {
            span: 16,
            offset: 8,
            },
            },
        };

        return (
            <div>
                <Col lg={{span:12, offset:6}} md = {{span: 22, offset:1}} style={{marginTop:"24px", marginBottom:"24px"}}>
                <Card 
                    style={{maxWidth: "500px", margin: "auto"}}
                >
                    <div style={{textAlign:"center", fontWeight:"bold", fontSize: "24px", marginBottom:"20px"}}>Update your grandparent information</div>
                    <Spin spinning={this.state.isLoading}>
                <Form {...formItemLayout} onSubmit={this.handleSubmit} >
                    <Form.Item label="E-mail" >
                    {getFieldDecorator('email', {
                        rules: [
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                        ],
                    })(<Input disabled = {this.state.isUpdating} />)}
                    </Form.Item>
                    <Form.Item
                    label='name'
                    >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input name!', whitespace: true }],
                    })(<Input disabled = {this.state.isUpdating}/>)}
                    </Form.Item>
                    <Form.Item
                    label={
                        <span>
                        Relationship&nbsp;
                        <Tooltip title="What`s the relationship with he/she?">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                        </span>
                    }
                    >
                    {getFieldDecorator('relationship', {
                        rules: [{ required: true, message: 'Please input relationship!', whitespace: true }],
                    })(<Input disabled = {this.state.isUpdating}/>)}
                    </Form.Item>
                    <Form.Item label="Receive notification">
                    {getFieldDecorator('receiveNotification', { valuePropName: 'checked' })(<Switch />)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" loading={this.state.isUpdating}>
                        Update
                    </Button>
                    </Form.Item>
                </Form>
                </Spin>
                </Card>
            </Col>
            </div>
        )
    }
}

export default Form.create({ name: 'editGrandparent' })(withRouter(Edit)) 
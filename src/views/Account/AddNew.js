import React, { Component } from 'react'
import { Form, Input, Tooltip, Icon, Col, Button, Card, message,Switch } from 'antd'
import { addNewGrandparent } from '../../requests'
import { withRouter } from 'react-router-dom'

class AddNew extends Component {
    constructor(){
        super()
        this.state= {
            isLoading: false
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            // console.log('Received values of form: ', values)
            values.receiveNotification = values.receiveNotification? values.receiveNotification : false
            const user =  {id: this.props.match.params.id}
            values.userid = user
            const parentInfo =  JSON.stringify(values)
            this.setState({
                isLoading: true
            })
            addNewGrandparent(parentInfo)
                .then(resp=>{
                    // console.log(resp)
                    if(resp.data){
                        message.success("You have added successfully!")
                        this.props.history.push({
                            pathname: `/account`,
                        })
                    }else{
                        message.error("Failed to add!")
                    }
                })
                .finally(()=>{
                    this.setState({
                        isLoading: false
                    })
                })
            }
        });
    };

    render() {
        // console.log(this.props.match.params.id)
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
                    <div style={{textAlign:"center", fontWeight:"bold", fontSize: "24px", marginBottom:"20px"}}>Add new</div>
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
                    })(<Input disabled = {this.state.isLoading} />)}
                    </Form.Item>
                    <Form.Item
                    label='name'
                    >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input name!', whitespace: true }],
                    })(<Input disabled = {this.state.isLoading}/>)}
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
                    })(<Input disabled = {this.state.isLoading}/>)}
                    </Form.Item>
                    <Form.Item label="Receive notification">
                    {getFieldDecorator('receiveNotification', { valuePropName: 'checked' })(<Switch />)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" loading={this.state.isLoading}>
                        Add
                    </Button>
                    </Form.Item>
                </Form>
                </Card>
            </Col>
            </div>
        )
    }
}

export default Form.create({ name: 'newGrandparent' })(withRouter(AddNew))
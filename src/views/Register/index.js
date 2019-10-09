import React, { Component } from 'react'
import { Form, Input, Tooltip, Icon, Col, Button, Card, } from 'antd'
import {connect} from 'react-redux'
import { register } from '../../actions/register'
import { Redirect } from 'react-router-dom'

// const { MonthPicker } = DatePicker
class Register extends Component {

    constructor(){
        super()
        this.state = {
            confirmDirty: false,
            // suburbList: []
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            // const date = values['month-picker'].format("YYYY-MM")
            // values["month-picker"] = date
            console.log('Received values of form: ', values);
            this.props.register(values)
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      };
    
    compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
    } else {
        callback();
    }
    };

    validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
    }
    callback();
    };

    // validateAge = (rule, value, callback) => {
    //     if(value < 7 || value > 99){
    //         callback("Age group should be between 8 and 98!")
    //     }else{
    //         callback()
    //     }
    // }

    // componentDidMount(){
    //     getSuburbList()
    //         .then(resp => {
    //             let respData = resp.data
    //             // console.log(respData)
    //             respData = respData.map((item) => {
    //                 return item.trim()
    //             })
    //             this.setState({
    //                 suburbList : respData
    //             })
    //         })
    //         .catch(err => {
    //         // deal with error
    //             message.error(err)
    //         })
    //         .finally(() => {
    //             // console.log()
    //         }) 
    // }

    render() {
        const { getFieldDecorator } = this.props.form;
        // const { autoCompleteResult } = this.state;

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
        // const config = {
        //     rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        // };

        return (
            this.props.isLogin
            ?
            <Redirect to="./Account"/>
            :
            <Col lg={{span:12, offset:6}} md = {{span: 22, offset:1}} style={{marginTop:"24px", marginBottom:"24px"}}>
                <Card style={{maxWidth: "500px", margin: "auto"}}>
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
                    })(<Input disabled = {this.props.isLoading} />)}
                    </Form.Item>
                    <Form.Item label="Password" hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            validator: this.validateToNextPassword,
                        },
                        ],
                    })(<Input.Password disabled = {this.props.isLoading} />)}
                    </Form.Item>
                    <Form.Item label="Confirm Password" hasFeedback>
                    {getFieldDecorator('confirm', {
                        rules: [
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        {
                            validator: this.compareToFirstPassword,
                        },
                        ],
                    })(<Input.Password onBlur={this.handleConfirmBlur}  disabled = {this.props.isLoading} />)}
                    </Form.Item>
                    <Form.Item
                    label={
                        <span>
                        Nickname&nbsp;
                        <Tooltip title="What do you want others to call you?">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                        </span>
                    }
                    >
                    {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    })(<Input disabled = {this.props.isLoading}/>)}
                    </Form.Item>
                    {/* <Form.Item
                    label={
                        <span>
                        Age&nbsp;
                        </span>
                    }
                    >
                    {getFieldDecorator('age', {
                        rules: [{ required: true, message: 'Please input your age!'}, {validator: this.validateAge}],
                    })(<InputNumber />)}
                    </Form.Item>
                    <Form.Item 
                        label={
                            <span>
                            Vaccination record&nbsp;
                            <Tooltip title="When was the last tiem that the person took the flu shot?">
                            <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>
                        }
                    >
                        {getFieldDecorator('month-picker', config)(<MonthPicker />)}
                    </Form.Item>
                    <Form.Item 
                    label={
                        <span>
                        Current Region&nbsp;
                        <Tooltip title="In which region are you currently living in?(Such as: Monash, WhiteHorse)">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                        </span>
                    }
                    >
                        {getFieldDecorator('region', {
                            rules: [{ required: true, message: 'Please input region!' }],
                        })(
                            <AutoComplete
                            dataSource={this.state.suburbList}
                            filterOption={(inputValue, option) =>
                                option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                              }
                            placeholder="region"
                            >
                            <Input />
                            </AutoComplete>,
                        )}
                    </Form.Item> */}
                    <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" loading={this.props.isLoading}>
                        Register
                    </Button>
                    </Form.Item>
                </Form>
                </Card>
            </Col>
        )
    }
}


const mapStateToProps = state => ({
    isLogin: state.user.isLogin,
    isLoading: state.user.isLoading
})
export default connect(mapStateToProps, {register})(Form.create({ name: 'register' })(Register))



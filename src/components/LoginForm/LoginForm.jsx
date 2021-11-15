import React from 'react';
import { ButtonTemplate} from "../Button/ButtonTemplate"
import { Block} from "../InputBlock/Block";
import {changeColorAction} from "../../redux/actions/changeColorAction"
import { Form, Input, Button, Checkbox } from 'antd';
import { NavLink } from 'react-router-dom';
export const LoginForm = () => {


 
    // const dispatch = useDispatch()

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
    return (
        <div className="container_registry" >
            <h2>LOG TO YOUR ACCOUNT</h2>


          <Block className="block">


        
                <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
      
      </Form.Item>

      <ButtonTemplate 
                htmlType="submit"
                actionBtn= {changeColorAction}
                className="registryBtn" type="primary">
                SUBMIT
                </ButtonTemplate>
    </Form>

    <NavLink className="navReg" to="/registration">Login</NavLink>
           </Block>
      </div>
    )
}







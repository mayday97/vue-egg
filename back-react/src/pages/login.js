/*
 * @Author: xiaoyu
 * @Date: 2020-10-19 09:46:57
 * @LastEditTime: 2020-10-19 15:45:04
 */
import React from "react";
import "@/style/login.scss";
import { Form, Input, Button, Checkbox } from "antd";
import { useHistory } from "react-router-dom";
import { apiLogin } from "@/server/api";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 18,
  },
};

//登录表单模块
function LoginForm() {
  const history = useHistory();
  const onFinish = async (values) => {
    console.log("Success:", values);
    const res = await apiLogin({ account: "xy", password: "123456" });
    history.push("/home");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}

export default function login() {
  return (
    <div className="login">
      <div className="login-form-wrap">
        <h2 className="login-title">欢迎登录</h2>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}

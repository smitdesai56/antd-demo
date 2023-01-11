import React from "react";
import { Image, Form, Input, Button } from "antd";
import styles from "./styles.module.scss";

export const LoginForm = () => {
  const onFinish = (value) => {
    console.log("value", value);
  };
  return (
    <div className={styles.loginContainer}>
      <div className={styles.imgContainer}>
        <Image src="/assets/images/nature-2.jpg" preview={false} alt="Nature" />
      </div>
      <div className={styles.formContainer}>
        <h1>Logo</h1>
        <h2>Login to continue</h2>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { type: "email", message: "The input is not valid E-mail!" },
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input placeholder="Email" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%", marginTop: "1rem" }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

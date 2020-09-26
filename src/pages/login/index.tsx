import React from 'react';
import style from './index.styl?';
// import { useDispatch } from 'react-redux';
// import { LoginParam } from '@/@types/user';
import { Store } from 'rc-field-form/lib/interface';
import { Form, Input, Button, Checkbox } from 'antd';
// import { userLogin } from '@/models/distributed/user';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login: React.FC = () => {

    // const dis = useDispatch();

    async function onFinish(values: Store) {
        // dis(userLogin(values as LoginParam));
    };

    return (
        <div className={style.layout}>
            <Form onFinish={onFinish} name="login">
                <Form.Item
                    name="userName"
                    rules={[{ required: true, message: '请输入正确的登录账号' }]}>
                    <Input prefix={<UserOutlined />} size="large" placeholder='请输入账号' />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入有效的登录密码' }]}>
                    <Input.Password
                        prefix={<LockOutlined />}
                        size="large"
                        placeholder='请输入密码'
                        visibilityToggle={false} />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>记住密码</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large">登录</Button>
                </Form.Item>
            </Form>
        </div>
    );

};

export default Login;
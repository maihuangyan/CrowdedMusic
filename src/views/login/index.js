import React, { useState, useEffect } from 'react'
import {
    Box,
    Grid,
} from "@mui/material"
import {
    Form,
    Input,
    Button,
} from 'antd'
import ImgSrc from "assets/images/WechatIMG1575.jpg"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { getUser } from 'store/actions/user';
import { useDispatch , useSelector} from 'react-redux';

export default function Login() {

    const [form] = Form.useForm();
    const [clientReady, setClientReady] = useState(false);

    const dispatch = useDispatch()

    const client  = useSelector(state=>state.users)
    console.log(client)

    // To disable submit button at the beginning.
    useEffect(() => {
        setClientReady(true);
    }, []);
    const onFinish = (values) => {
        console.log('Finish:', values);
        dispatch(getUser({...values,token:new Date()}))
    };
    return (
        <Box sx={{ p: 3, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Box>
                <img src={ImgSrc} alt="" />
            </Box>
            <Box sx={{width: "100%"}}>
                <Form
                    name="login"
                    className="login-form"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="login-form-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="login-form-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        Forgot password?
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            LOGIN
                        </Button>
                    </Form.Item>
                </Form>
            </Box>
        </Box>
    )
}

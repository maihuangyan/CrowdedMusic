import React, { useState, useEffect } from 'react'
import {
    Box,
    Grid,
    Typography,
    Link,
} from "@mui/material"
import {
    Form,
    Input,
    Button,
    Checkbox,
} from 'antd'
import ImgSrc from "assets/images/login.png"
import { getUser } from 'store/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { IconSquareRotated, IconBell, IconMail, IconLock } from "@tabler/icons-react"
import { GooglesIcon, FaceBookIcon, TwitterIcon } from 'assets/icons';

export default function Login() {

    // const [form] = Form.useForm();
    const [clientReady, setClientReady] = useState(false);

    const dispatch = useDispatch()

    // const client  = useSelector(state=>state.users)
    // console.log(client)

    // To disable submit button at the beginning.
    useEffect(() => {
        setClientReady(true);
    }, []);
    const onFinish = (values) => {
        console.log('Finish:', values);
        dispatch(getUser({ ...values, token: new Date() }))
    };
    return (
        <Box sx={{ width: "calc(100vw)", height: "calc(100vh)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ width: "90%", height: { sm: "90%", xs: "90%", md: "80%" }, p: 3, boxShadow: "0 0 40px rgba(0, 0, 0, 0.1)", borderRadius: "8px", background: "#f9f9f9", overflowY: { xs: "auto", sm: "auto", md: "visible" } }}>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item>
                        <IconSquareRotated size={20} spacing={2} color='#4096ff' />
                    </Grid>
                    <Grid item>
                        <Typography variant='h3' color="#4096ff">ghostlamp</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ height: "100%" }}>
                    <Grid item sm={12} md={6} xs={12} container >
                        <img style={{ width: "100%", height: "90%" }} src={ImgSrc} alt="" />
                    </Grid>
                    <Grid item sm={12} md={6} xs={12}>
                        <Box sx={{ p: 6 }}>
                            <Typography variant='h1' color="#000"  >Welcome Back :)</Typography>
                            <Typography variant='body2' sx={{ mt: 2, mb: 5 }}>
                                To keep connected with us pleas login  with your personal information by email address and password
                                <Typography variant='span' sx={{ mb: -2, verticalAlign: "sub" }}>
                                    <IconBell size={20} spacing={1} color='orange' />
                                </Typography>

                            </Typography>
                            <Form
                                name="login"
                                className="login-form"
                                onFinish={onFinish}
                                initialValues={{
                                    remember: true,
                                }}
                            >
                                <Form.Item
                                    name="email_address"
                                    className="login-form-item"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Email Address!',
                                        },
                                    ]}
                                >
                                    <Input prefix={<IconMail size={30} stroke={1} />} placeholder="Email Address" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    className="login-form-item"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Password!',
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={<IconLock size={30} stroke={1} color='#585858' />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Grid container spacing={2} sx={{ pl: 1, pr: 1 }}>
                                        <Grid item xs={6} sm={6} md={6}>
                                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                                <Checkbox>
                                                    <Typography variant='body2'>Remember me</Typography>
                                                </Checkbox>
                                            </Form.Item>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} container justifyContent="end">
                                            <Typography variant='body2'>Forgot password</Typography>
                                        </Grid>
                                    </Grid>
                                </Form.Item>

                                <Form.Item>
                                    <Box sx={{ mb: 5 }}>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            Login Now
                                        </Button>
                                        <Button className="login-form-button">
                                            Create Account
                                        </Button>
                                    </Box>
                                    <Typography variant='body2'>Or you can join with</Typography>
                                </Form.Item>

                                <Form.Item>
                                    <Box sx={{ display: "flex" }}>
                                        <Link href="https://www.google.com" sx={{ pt: "4px" }}>
                                            <GooglesIcon />
                                        </Link>
                                        <Link href="https://www.facebook.com" sx={{ ml: 3, mr: 3 }}>
                                            <FaceBookIcon />
                                        </Link>
                                        <Link href="https://www.twitter.com">
                                            <TwitterIcon />
                                        </Link>
                                    </Box>
                                </Form.Item>
                            </Form>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

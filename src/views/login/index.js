import React, { useState, useEffect } from 'react'
import {
    Box,
    Grid,
    Typography,
} from "@mui/material"
import {
    Form,
    Input,
    Button,
    message,
} from 'antd'
import { getUser } from 'store/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { IconArrowNarrowRight, IconMail, IconLock } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"

import { NavLink } from 'react-router-dom';
import useJwt from "utils/jwt/useJwt";
import imgUrl from "assets/images/login/cover-1.png"

export default function Login() {

    const [clientReady, setClientReady] = useState(false);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        setClientReady(true);
    }, []);
    const onFinish = (values) => {
        useJwt
            .login({ email: values.email, password: values.password })
            .then(async (res) => {
                if (res.status === 200) {
                    const userData = res.data.data;
                    console.log('User:', userData)
                    message.success("Login successful", 3)
                    setTimeout(() => {
                        dispatch(getUser(userData))
                        navigate("/")
                    }, 2000)
                }
                else {
                    console.log(res.err)
                    message.error("Login failed Please login again", 3)
                }
            })
            .catch((err) => {
                console.log(err)
            });
    };
    return (
        <Grid container spacing={2} sx={{
            height: { sm: "auto", xs: "auto", md: "calc(100vh)" }, m: 0, backgroundColor: "#fff"
            , "&>.MuiGrid-item": { pt: 0 },
        }} justifyContent="center">
            <Grid item sm={12} xs={12} md={5} container justifyContent="center" alignItems="center" flexDirection="column" sx={{ mt: 4 }}>
                <Typography variant='h1'>Sign in</Typography>
                <Typography variant='body3'>Don’t have an account?
                    <NavLink style={{ color: "#3f51b5", marginLeft: "8px", cursor: "pointer" }} to='/signUp'>Sign up<IconArrowNarrowRight size={20} stroke={2} style={{ verticalAlign: "sub" }} /> </NavLink></Typography>
                <Form
                    name="login"
                    className="login-form"
                    onFinish={onFinish}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        name="email"
                        className="login-form-item"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your E-mail/Username!',
                            },
                        ]}
                    >

                        <Input prefix={<IconMail size={30} stroke={1} />} placeholder="E-mail/Username *" />
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
                            placeholder="Password *"
                        />
                    </Form.Item>

                    <Typography variant='body5'>Fields that are marked with * sign are required.</Typography>

                    <Form.Item>
                        <Box sx={{ mt: 5, mb: 5 }}>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                SUBMIT
                            </Button>
                        </Box>
                    </Form.Item>

                </Form>

                <Typography variant='body4'>Forgot your password?
                    <NavLink style={{ color: "#3f51b5", marginLeft: "8px", cursor: "pointer" }} to='/reset'>Reset Password<IconArrowNarrowRight size={20} stroke={2} style={{ verticalAlign: "middle" }} /> </NavLink></Typography>
            </Grid>
            <Grid item sm={6} xs={6} md={5} sx={{
                display: { sm: "none", xs: "none", md: "block", },
            }}>
                <Box sx={{
                    width: "50vw", height: "100%",
                }}>
                    <Box sx={{
                        width: "100%",
                        height: "100%",
                        clipPath: "polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)",
                        shapeOutside: "polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)",
                        background: `url(${imgUrl}) no-repeat  center`,
                        backgroundSize: { md: "auto", lg: "auto", xl: "100%", },
                    }}>
                    </Box>
                </Box>
            </Grid>
        </Grid >
    )
}

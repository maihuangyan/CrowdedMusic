import React from 'react'
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
    message,
} from 'antd'
import ImgSrc from "assets/images/login.png"
import { getUser } from 'store/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { IconSquareRotated, IconMail, IconLock } from "@tabler/icons-react"
import { NavLink } from 'react-router-dom';
import useJwt from "utils/jwt/useJwt";
import { useNavigate } from 'react-router-dom';


export default function Forget() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onFinish = (values) => {
        console.log('Finish:', values);
        useJwt
            .forget({ email: values.email })
            .then(async (res) => {
                if (res.status === 200) {
                    const userData = res;
                    console.log('User:', userData)
                    message.success("Sign up successful, please login", 3)
                    setTimeout(() => {
                        navigate("/login")
                    }, 3000)
                }
                else {
                    console.log(res.err)
                    message.error("Sign up failed, please try again", 3)
                }
            })
            .catch((err) => {
                console.log(err)
            });

    };
    return (
        <Box sx={{ width: "calc(100vw)", height: "calc(100vh)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ width: "90%", height: { sm: "90%", xs: "90%", md: "80%" }, p: 3, boxShadow: "0 0 40px rgba(0, 0, 0, 0.1)", borderRadius: "8px", background: "#f9f9f9", overflowY: { xs: "auto", sm: "auto", md: "visible" } }}>
                <Grid container spacing={2}>
                    <Grid item sx={{ width: "50px", height: "50px" }}>
                        <img src={require("assets/ic_logo_light_gray.png")} alt='' />
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ height: "100%" }}>
                    <Grid item sm={12} md={6} xs={12} container >
                        <img style={{ width: "100%", height: "80%" }} src={require("assets/logo_shadow.png")} alt="" />
                    </Grid>
                    <Grid item sm={12} md={6} xs={12}>
                        <Box sx={{ p: 6 }}>
                            <Typography variant='h1' color="#000" sx={{ mt: 2, mb: 5 }} >Forget Password :)</Typography>
                            <Form
                                name="login"
                                className="login-form"
                                onFinish={onFinish}
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

                                <Form.Item>
                                    <Box sx={{ mt: 5 }}>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            Confirm
                                        </Button>
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
import React, { useEffect, useState, useMemo } from 'react'
import {
    Box,
    Grid,
    Button,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    List,
    Drawer,
    Typography,
} from '@mui/material'
import { Menu, Modal, Input, Upload } from "antd"
import logoImg from "assets/logo_shadow.png"
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { styled } from "@mui/material/styles";
import items from './meunItem'
import { IconMenu2, IconChevronDown, IconMusic } from "@tabler/icons-react";
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from 'store/actions/user';
import headerUrl from "assets/img/parallax/header.jpg"
import useJwt from "utils/jwt/useJwt"

const CircleButton = styled(Button)(({ theme }) => ({
    borderRadius: "6px",
    width: "160px",
    height: "50px",
    fontWeight: "bold",
    backgroundColor: "#F8F8F8",
    fontSize: "12px",
    color: "#dd4377",
    "&:hover": {
        color: "#000",
        backgroundColor: "#F8F8F8",
    },
}));

const CircleButton1 = styled(Button)(({ theme }) => ({
    borderRadius: "40px",
    width: "160px",
    height: "40px",
    fontWeight: "bold",
    backgroundColor: "#00ae52",
    fontSize: "14px",
    color: "#fff",
    "&:hover": {
        color: "#000",
        backgroundColor: "#F8F8F8",
    },
}));

export default function NavMenu({ showButton }) {

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const user_id = useSelector((state) => state.users.user.id)

    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        navigate(e.keyPath[0])
    };

    useEffect(() => {
        setCurrent(location.pathname.split("/")[1]);
    }, [location.pathname])


    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(true)
    }

    const handleCloseMenu = () => {
        setShowMenu(false)
    }

    const [root, setRoot] = useState(document.documentElement.clientWidth)
    useEffect(() => {
        window.onresize = (e) => {
            setRoot(e.currentTarget.innerWidth)
            if (e.currentTarget.innerWidth < 990) {
                setShowMenu(false)
            }
        }
    }, [root])

    const activeMenu = useMemo(() => {
        if (location.pathname.split("/")[1].split("_").length > 1) {
            return location.pathname.split("/")[1].split("_").join(" ")
        } else {
            return location.pathname.split("/")[1]
        }
    }, [location.pathname])

    const tabsMenu = (text) => {
        navigate(`/${text.path}`)
    }

    const list = () => (
        <Box
            sx={{ width: "90vw" }}
            role="presentation"
            onClick={() => handleCloseMenu()}
            onKeyDown={() => handleCloseMenu()}
        >
            <List>
                {items.map((item, index) => {
                    // const active = activeMenu == item.toLowerCase()
                    let isShow = item.children[0].children.length > 1 ? true : false
                    return <ListItem key={item.key} disablePadding sx={{
                        position: "relative", flexWrap: "wrap", height: "50px", overflow: "hidden", transition: "0.5s",
                        "&:hover": {
                            height: isShow ? "240px" : "50px",
                            transition: "0.5s",
                            overflow: isShow ? "auto" : "hidden",
                        }
                    }}>
                        <ListItemButton onClick={() => tabsMenu(item)} sx={{ justifyContent: "space-between", width: "100%" }}>
                            <Typography >{item.label}</Typography>
                            {isShow && <IconChevronDown size={25} stroke={2} />}
                        </ListItemButton>

                        <List sx={{ width: "100%", transition: "0.5s" }}>
                            {item.children[0].children.map((ele, index) => <ListItem key={ele.key} disablePadding sx={{ position: "relative" }}>
                                <ListItemButton onClick={() => tabsMenu(ele)} sx={{ justifyContent: "space-between" }}>
                                    <Typography > - {ele.label}</Typography>
                                    {
                                        ele.children ? <IconChevronDown size={25} stroke={2} /> : ""
                                    }
                                </ListItemButton>
                            </ListItem>
                            )}
                        </List>
                    </ListItem>
                })}
            </List>
        </Box >
    );

    const isChangeNav = useMemo(() => {
        return ["/", "/homepage", "/trendings/trending"].some((item) => item == location.pathname)
    }, [location.pathname])

    const homeNav = {
        position: "fixed",
        top: {
            sm: "120px",
            xs: "120px",
            md: "80px"
        },
        width: "100%",
        zIndex: 10,
        background: showButton ? "#222" : "transparent",
    }

    const nav = {
        position: "fixed",
        top: {
            sm: "120px",
            xs: "120px",
            md: "80px"
        },
        zIndex: 10,
        width: "100%",
        transition: "0.3s",
        pt: showButton ? "0" : "10px",
        pb: showButton ? "0" : "10px",
        "&::before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${headerUrl})`,
        }
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [payListName, setPayListName] = useState("");
    const [description, setDescription] = useState("");
    const [payListImg, setPayListImg] = useState(null);
    const [uploadFiles, setUploadFiles] = useState(null);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        if (payListName) {

            useJwt
                .createPlayList({ user_id, name: payListName, image: uploadFiles })
                .then(async (res) => {
                    if (res.status === 200) {
                        console.log(res, "6666");
                        setIsModalOpen(false);
                        setPayListName("")
                        setDescription("")
                        setPayListImg(null);
                        setUploadFiles(null)
                    } else {
                        console.log(res.err)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })


        }
        console.log(payListImg, uploadFiles)
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        setPayListName("")
        setDescription("")
        setPayListImg(null);
        setUploadFiles(null)
    };

    const changePayListName = (e) => {
        setPayListName(e.target.value)
        console.log(e.target.value)
    }
    const changeDescription = (e) => {
        setDescription(e.target.value)
        console.log(e.target.value)
    }

    const props = {
        name: 'file',
        headers: {
            authorization: 'authorization-text',
        },
        beforeUpload: {
            function() {
                return false;
            }
        },
        showUploadList: false,
        maxCount: 1,
        style: { border: "none" },
        onChange(file) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setUploadFiles(file.file)
                setPayListImg(fileReader.result)
            }
            fileReader.readAsDataURL(file.file);
        },
    };

    return (
        <Box sx={isChangeNav ? homeNav : nav}>
            <Grid container>
                <Grid item xs={2} sm={2} md={2} sx={{ p: "10px 30px" }}>
                    <NavLink to="/homepage">
                        <img style={{ minWidth: "120px", maxHeight: "80px" }} className='logo' src={logoImg} alt="" />
                    </NavLink>
                </Grid>
                <Grid item xs={8} sm={8} md={8} container justifyContent="center" alignItems="center">
                    <Box sx={{ width: "100%", display: { xs: "none", sm: "none", md: "flex" }, justifyContent: "center", alignItems: "center" }}>
                        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} selectable={true} />
                    </Box>
                    <Box sx={{ display: { xs: "block", sm: "block", md: "none" }, cursor: "pointer", zIndex: 100 }}>
                        <IconMenu2 color='#fff' size={40} stroke={2} onClick={() => handleShowMenu()} />
                    </Box>
                </Grid>
                <Grid item xs={2} sm={2} md={2} container justifyContent="center" alignItems="center" sx={{ p: "10px 10px" }}>
                    <CircleButton onClick={() => showModal()}>CREATE PLAYLIST</CircleButton>
                </Grid>
            </Grid>

            <Drawer
                anchor="left"
                open={showMenu}
                onClose={() => handleCloseMenu()}
                sx={{ display: { xs: "block", sm: "block", md: "none" } }}
            >
                {list()}
            </Drawer>

            <Modal open={isModalOpen} onCancel={handleCancel} className='playList' centered>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography sx={{ fontSize: "24px", color: "#fff" }}>create playList</Typography>
                    <Grid container sx={{ p: { xs: "20px 0", md: "50px 0" } }}>
                        <Grid item xs={12} md={4}>
                            <Upload {...props}>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", height: { xs: "150px", md: "100%" }, background: "#3b3b3b", borderRadius: "8px" }}>
                                    {
                                        payListImg ? <Box sx={{
                                            background: `url(${payListImg}) no-repeat center center`,
                                            backgroundSize: { xs: "100% 100%", sm: "30% 100%", md: "100% 100%" },
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "4px",
                                        }}></Box> : <>
                                            <IconMusic size={100} stroke={1} color='#fff' />
                                            <Typography sx={{ color: "#b7b7b7", fontSize: "24px", pb: "10px", }}>Change Image</Typography>
                                        </>
                                    }
                                </Box>
                            </Upload>
                        </Grid>
                        <Grid item xs={12} md={8} sx={{ pl: { xs: "0", md: "20px" } }}>
                            <Typography sx={{ color: "#b7b7b7", fontSize: "16px", mb: "10px", mt: { xs: "10px", md: 0 } }}>PlayList</Typography>
                            <Input placeholder='My PlayList' onChange={changePayListName} value={payListName} />
                            <Typography sx={{ color: "#b7b7b7", fontSize: "16px", mb: "10px", mt: "20px" }}>Description</Typography>
                            <Input.TextArea onChange={changeDescription} value={description} />
                        </Grid>
                    </Grid>

                    <Box>
                        <CircleButton1 onClick={() => handleOk()}>
                            CREATE
                        </CircleButton1>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

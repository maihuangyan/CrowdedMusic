import React, { useState, useMemo } from 'react'
import {
    Box,
    Grid,
    Typography,
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
} from '@mui/material'
import { IconSearch, IconMenu2, IconMail } from "@tabler/icons-react";
import { useNavigate, useLocation } from "react-router-dom";
import ClientAvatar from 'ui-component/ClientAvatar';
import imgSrc from "assets/images/WechatIMG1575.jpg"

export default function Header() {

    const navigate = useNavigate()
    const location = useLocation()

    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(true)
    }

    const handleCloseMenu = () => {
        setShowMenu(false)
    }

    const activeMenu = useMemo(() => {
        if (location.pathname.split("/")[1].split("_").length > 1) {
            return location.pathname.split("/")[1].split("_").join(" ")
        } else {

            return location.pathname.split("/")[1]
        }
    }, [location.pathname])

    const tabsMenu = (text) => {
        const handleText = text.toLowerCase().split(" ")
        if (handleText.length > 1) {
            navigate(`/${handleText.join("_")}`)
        } else {
            navigate(`/${text.toLowerCase()}`)
        }
    }

    const list = () => (
        <Box
            sx={{ width: "70vw", color: "#000" }}
            role="presentation"
            onClick={() => handleCloseMenu()}
            onKeyDown={() => handleCloseMenu()}
        >
            <Box sx={{display:"flex",justifyContent:"center", alignItems:"center",p:12 , background:`url(${imgSrc}) center no-repeat`, backgroundSize:"100% 100%"}}>
                <ClientAvatar src={imgSrc} size={80} name={"aaa"} />
            </Box>
            <List>
                {['Home', 'Music', 'Podcast', 'Messages'].map((text, index) => {
                    const active = activeMenu == text.toLowerCase()
                    return <ListItem key={text} disablePadding>
                        <ListItemButton sx={{ background: active ? "#f1f1f1" : "auto", color: active ? "#8b008b" : "#000" }} onClick={() => tabsMenu(text)}>
                            <ListItemIcon>
                                <IconMail color={active ? "#8b008b" : "#000"} />
                            </ListItemIcon>
                            <Typography>{text}</Typography>
                        </ListItemButton>
                    </ListItem>
                })}
            </List>
            <Divider />
            <List>
                {['Settings', 'Artist Portal', 'Sign Out'].map((text, index) => {
                    const active = activeMenu == text.toLowerCase()
                    return <ListItem key={text} disablePadding>
                        <ListItemButton sx={{ background: active ? "#f1f1f1" : "auto", color: active ? "#8b008b" : "#000" }} onClick={() => tabsMenu(text)}>
                            <ListItemIcon>
                                <IconMenu2 color={active ? "#8b008b" : "#000"} />
                            </ListItemIcon>
                            <Typography>{text}</Typography>
                        </ListItemButton>
                    </ListItem>
                })}
            </List>
        </Box>
    );

    return (
        <Box sx={{ p: 2, pt: 3, pb: 1, background: "#8b008b" }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6} sm={6}>
                    <IconMenu2 color='#fff' size={25} stroke={2} onClick={() => handleShowMenu()} />
                </Grid>
                <Grid item xs={6} md={6} sm={6} justifyContent="flex-end" container>
                    <IconSearch color='#fff' size={25} stroke={2} />
                </Grid>
            </Grid>
            <Drawer
                anchor="left"
                open={showMenu}
                onClose={() => handleCloseMenu()}
                sx={{
                    ".MuiDrawer-paper": {
                        backgroundColor: "#fff"
                    }
                }}
            >
                {list()}
            </Drawer>
        </Box>
    )
}

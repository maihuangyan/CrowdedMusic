import React, { useState, useEffect, useContext } from 'react'
import {
    Box,
    Grid,
    Typography,
    FormControl,
    Divider,
    Link,
    Menu,
    MenuItem,
    ListItemText,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Button,
    Alert
} from '@mui/material'
import { IconSearch, IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";
import { useNavigate, useLocation } from "react-router-dom";
import ClientAvatar from 'ui-component/ClientAvatar';
import imgSrc from "assets/images/WechatIMG1575.jpg"
import { clearUser } from 'store/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { FaceBookIcon1, TwitterIcon1, GooglesIcon1, YouToBeIcon, ShoppingIcon, SearchIcon } from 'assets/icons';
import { styled, useTheme } from "@mui/material/styles";
import useJwt from "utils/jwt/useJwt";
import { LoaderContext } from "utils/context/ProgressLoader"


const CircleButton2 = styled(Button)(({ theme }) => ({
    borderRadius: "50% !important",
    minWidth: "35px",
    height: "35px",
    color: theme.palette.primary.light,
    backgroundColor: "#222",
    "&:hover": {
        backgroundColor: "#fff",
        color: theme.palette.common.black,
    },
}));

const tabHeader = ["Artists", "Videos", "Songs", "Albums"]

export default function Header() {

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const token = useSelector(state => state.users.user.token)
    const showToast = useContext(LoaderContext).showToast

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [navSearch, setNavSearch] = useState(false)
    const [query, setQuery] = useState("");
    const handleSearch = (e) => {
        console.log(e.target.value, "handleSearch")
        setQuery(e.target.value)
    }

    const [tabSearchIndex, setTabSearchIndex] = useState(0)
    const [songSearch, setSongSearch] = useState([])

    const changeTab = (tab) => {
        setTabSearchIndex(tab)
    }

    useEffect(() => {
        useJwt
            .searchAll({ search_text: query })
            .then((res) => {
                if (res.data.status == 1) {
                    let songsArr = []
                    songsArr.push(res.data.data.artists)
                    songsArr.push([])
                    songsArr.push(res.data.data.songs)
                    songsArr.push(res.data.data.albums)
                    // console.log(songsArr)

                    setSongSearch(songsArr)
                }
                else {
                    if (token) {
                        showToast("error", "Login expired Please log in again")
                        setTimeout(() => {
                            navigate("/login")
                        }, 2000)
                    }
                    console.log(res.data.ResponseCode)
                }
            })
            .catch((err) => console.log(err));

        if (query == "") {
            setSongSearch([])
        }
    }, [query])

    const toSearchPage = (data) => {

    }

    return (
        <Box sx={{ p: 3, pl: 5, pr: 5, background: "#222", position: "fixed", left: 0, top: 0, zIndex: 100, width: "100%", height: { xs: "120px", md: "80px" } }}>
            <Box sx={{ background: "#212121", position: "absolute", top: 0, left: navSearch ? 0 : "100%", zIndex: 100, width: "100%", height: "90%", transition: "0.5s", display: "flex", justifyContent: "center", alignItems: "center", }}>
                <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", p: " 0 40px", width: "100%" }}>
                    <FormControl fullWidth variant="outlined" sx={{ mr: "10px" }}>
                        <OutlinedInput
                            placeholder="Search Songs"
                            sx={{
                                "& input": {
                                    color: "#fff !important",
                                    height: "auto !important",
                                }
                            }}
                            value={query}
                            onChange={handleSearch}
                            endAdornment={
                                <InputAdornment position="end" onClick={() => {
                                    if (songSearch.length) {
                                        console.log("6666")
                                        navigate("/searchPage", { state: { data: songSearch, query } })
                                        setQuery("")
                                    }
                                }}>
                                    <IconButton aria-label="search icon" edge="end">
                                        <IconSearch size={25} stroke={1} />
                                    </IconButton>
                                </InputAdornment>
                            }
                            onKeyDown={(e) => {
                                if (e.key == "Enter" && songSearch.length) {
                                    console.log("6666")
                                    navigate("/searchPage", { state: { data: songSearch, query } })
                                    setQuery("")
                                }
                            }}
                        />
                    </FormControl>

                    <CircleButton2 onClick={() => (setNavSearch(false))}>
                        <IconX size={25} stroke={2} />
                    </CircleButton2>
                </Box>
                <Box sx={{ display: query ? "block" : "none", position: "absolute", top: "80px", left: "0", zIndex: 90, width: "100vw", height: "100vh", background: "#1a1a1a", opacity: 0.1 }} onClick={() => (setQuery(""), setSongSearch([]))}></Box>

                <Box sx={{ display: query ? "block" : "none", position: "absolute", top: { xs: "80px", md: "62px" }, left: { xs: "0", md: "40px" }, zIndex: 100, width: { xs: "100%", md: "90vw" }, height: { xs: "48vh", md: "68vh" }, background: "rgba(0,0,0,0.9)", opacity: 0.9, overflowY: "auto" }}>

                    <Box sx={{ display: "flex", justifyContent: { xs: "space-between", sm: "start" }, }}>
                        {
                            tabHeader.map((item, index) => <Typography key={index} sx={{
                                height: "56px", width: "25%", fontSize: "14px", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", borderTop: tabSearchIndex == index ? "3px solid rgba(255,0,0,.2)" : "3px solid rgba(0,0,0,1)", background: tabSearchIndex == index ? "rgba(0,0,0,1)" : "rgba(0,0,0,.5)", transition: "0.2s",
                                "&:hover": {
                                    color: "#2b2b2b",
                                    transition: "0.2s",
                                }
                            }} onClick={(() => changeTab(index))} color={tabSearchIndex == index ? "#dd4377" : "#74777b"}>
                                {item}
                            </Typography>)
                        }
                    </Box>
                    <Box sx={{ position: "relative" }}>
                        {
                            songSearch.length && songSearch.map((item, index) => <Box key={index} sx={{
                                position: "absolute", width: "100%", display: tabSearchIndex == index ? "block" : "none", opacity: 1, color: "#fff",
                            }}>
                                {
                                    item.map((ele, i) => <Grid container flexWrap="nowrap" key={i} alignItems="center" sx={{
                                        "&:hover": {
                                            background: "rgba(255,255,255,.09)",
                                            color: "#ada1a1"
                                        }, cursor: "pointer",
                                    }} onClick={() => toSearchPage(ele)}>
                                        <Grid item sx={{ width: "55px" }}>
                                            {/* {
                                            item.map((ele, i) => <img
                                                src={index == 0 ? ele.avatarURL : (index == 1 ? "" : (index == 2 ? ele.album_art : ele.artist_avatar_url))} alt='' key={i} width={55} />)
                                        } */}
                                            <img src={"https://media.navahang.me/2018/12/75x75/Hoorosh-Band-Ashegham-Kardi.jpg"} alt='' width={55} />
                                        </Grid>
                                        <Grid item sx={{ pl: "5px", height: "100%", }} xs={10.5} sm={11} md={11} xl={11.5}>
                                            <Box>
                                                <Typography sx={{ fontSize: "14px" }}>
                                                    {ele.title}
                                                </Typography>
                                                <Typography sx={{ fontSize: "18px", lineHeight: "20px" }}>
                                                    {index == 0 ? ele.name : ele.artistName}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>)
                                }

                            </Box>)
                        }
                    </Box>
                </Box>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={12} container sx={{ mt: "5px", justifyContent: { xs: "center", sm: "center", md: "flex-start" } }}>
                    <Typography fontSize={12} color="#b2b2b2" sx={{ lineHeight: "24px" }}>FOLLOW US:</Typography>
                    <Link href="https://www.facebook.com" sx={{ ml: 2, "& span:hover path": { fill: "#507cbe", transition: "0.5s" } }}>
                        <FaceBookIcon1 />
                    </Link>
                    <Link href="https://www.tuitter.com" sx={{ ml: 2, "& span:hover path": { fill: "#00abef", transition: "0.5s" } }}>
                        <TwitterIcon1 />
                    </Link>
                    <Link href="https://www.youtobe.com" sx={{ ml: 2, "& span:hover path": { fill: "#d12121", transition: "0.5s" } }}>
                        <YouToBeIcon />
                    </Link>
                    <Link href="https://www.google.com" sx={{
                        ml: 2, "& span:hover path": { fill: "#d93e2d", transition: "0.5s" }
                    }}>
                        <GooglesIcon1 />
                    </Link>
                </Grid>
                <Grid item xs={12} md={6} sm={12} container sx={{ justifyContent: { xs: "center", sm: "center", md: "flex-end" } }}>
                    <Box sx={{
                        display: "flex", alignItems: "center", cursor: 'pointer', "&:hover p": {
                            color: "#dd4377",
                            transition: "0.5s",
                        },
                        "&:hover svg": {
                            transition: "0.5s",
                            stroke: "#dd4377"
                        }
                    }} onClick={(e) => handleClick(e)}>
                        <Typography fontSize={12} color="#b2b2b2" sx={{ transition: "0.5s" }}>YOUR ACCOUNT</Typography>
                        <Box sx={{ border: "1px solid #b2b2b2", ml: 1, mr: 1 }}>
                            <IconChevronDown style={{ verticalAlign: "middle", transition: "0.5s" }} color='#fff' size={20} stroke={2} />
                        </Box>
                    </Box>

                    {
                        token ? <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <MenuItem sx={{ minWidth: "150px" }} onClick={() => (navigate("/my_playLst"), setAnchorEl(null))}>
                                <ListItemText>
                                    <Typography sx={{ fontSize: "16px" }}>My PlayLists</Typography>
                                </ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={() => navigate("/reset")}>
                                <ListItemText>
                                    <Typography sx={{ fontSize: "16px" }}>Reset Password</Typography>
                                </ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={() => dispatch(clearUser())}>
                                <ListItemText>
                                    <Typography sx={{ fontSize: "16px" }}>Login out</Typography>
                                </ListItemText>
                            </MenuItem>
                        </Menu> : <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >

                            <MenuItem sx={{ minWidth: "150px" }} onClick={() => navigate("/login")}>
                                <ListItemText>
                                    <Typography sx={{ fontSize: "16px" }}>SING IN</Typography>
                                </ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={() => navigate("/singUp")}>
                                <ListItemText>
                                    <Typography sx={{ fontSize: "16px" }}>SING UP</Typography>
                                </ListItemText>
                            </MenuItem>
                        </Menu>
                    }

                    <Box sx={{
                        display: "flex", alignItems: "center", cursor: 'pointer', "&:hover p": {
                            color: "#dd4377",
                            transition: "0.5s",
                        },
                        "&:hover path": {
                            transition: "0.5s",
                            fill: "#dd4377"
                        }
                    }}>
                        <Box sx={{ ml: 1 }}>
                            <ShoppingIcon style={{ verticalAlign: "revert-layer" }} />
                        </Box>
                        <Typography fontSize={15} color="#b2b2b2" sx={{ transition: "0.5s", ml: "5px", mr: 3 }}>$1385.00</Typography>

                    </Box>

                    <Box sx={{ cursor: "pointer", "& span:hover path": { fill: "#d93e2d", transition: "0.5s" } }} onClick={() => (setNavSearch(true), setQuery(""), setSongSearch([]))}>
                        <SearchIcon style={{ marginTop: "4px", verticalAlign: "middle" }} />
                    </Box>
                </Grid>
            </Grid>

        </Box >
    )
}

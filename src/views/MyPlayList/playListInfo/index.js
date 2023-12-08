import React, { useEffect, useState } from 'react'
import {
    Box,
    Grid,
    Typography,
    Menu,
    MenuItem,
    ListItemText,
    Divider,
    Button,
    OutlinedInput,
    InputAdornment,
    IconButton,
    FormControl,
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableHead,
} from "@mui/material"
import { Switch } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import useJwt from "utils/jwt/useJwt";
import { useLocation, useNavigate } from 'react-router-dom';
import imgUrl from "assets/images/login/cover-1.png"
import { styled } from "@mui/material/styles";
import { IconDotsCircleHorizontal, IconSearch, IconHeart, IconClockHour3, IconCalendar, IconPlayerPlay, IconDots, IconChevronRight } from "@tabler/icons-react"
import { formatSongsDate } from "utils/common"
import { addPlayList } from 'store/actions/playList';

const CircleButton1 = styled(Button)(({ theme }) => ({
    borderRadius: "40px",
    width: "160px",
    height: "40px",
    fontWeight: "bold",
    backgroundColor: "#00ae52",
    fontSize: "18px",
    marginRight: "10px",
    color: "#fff",
    "&:hover": {
        color: "#000",
        backgroundColor: "#F8F8F8",
    },
}));

export default function PlayLst() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const { data } = location.state
    const [query, setQuery] = useState("");
    const [playlistSwitch, setPlaylistSwitch] = useState(false)
    const [songs, setSongs] = useState({})

    const handleSearch = (e) => {
        console.log(e.target.value, "handleSearch")
        setQuery(e.target.value)

    }

    const switchChange = (checked) => {
        console.log(`switch to ${checked}`);
        setPlaylistSwitch(checked)
    };

    useEffect(() => {
        setSongs(data)
    }, [location])

    useEffect(() => {
        if (songs?.songs) {
            if (songs.songs?.song) {
                let filterTitle = data.songs.filter(item => item.song.title.toLowerCase()
                    .includes(query.toLowerCase()))
                let filterArtist = data.songs.filter(item => item.song.artistName.toLowerCase()
                    .includes(query.toLowerCase()))
                let filterAlbum = data.songs.filter(item => item.song.albumName.toLowerCase()
                    .includes(query.toLowerCase()))
                let filterSongs = filterTitle.concat(filterArtist.concat(filterAlbum))

                setSongs({ ...songs, songs: filterSongs })
            } else {

                if (query) {
                    let filterTitle = data.songs.filter(item => item.title.toLowerCase()
                        .includes(query.toLowerCase()))
                    let filterArtist = data.songs.filter(item => item.artistName.toLowerCase()
                        .includes(query.toLowerCase()))
                    let filterAlbum = data.songs.filter(item => item.albumName.toLowerCase()
                        .includes(query.toLowerCase()))
                    let filterSongs = filterTitle.concat(filterArtist.concat(filterAlbum))

                    setSongs({ ...songs, songs: filterSongs })
                    console.log(songs)
                } else {
                    setSongs(data)
                }

            }

        }
    }, [query])


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box sx={{ background: "#222", p: "30px" }}>
            <Grid container flexWrap="nowrap">
                <Grid item>
                    <Box sx={{ width: { xs: "200px", md: "300px" }, height: { xs: "200px", md: "300px" } }}>
                        <img src={songs.remoteAvatarPath} style={{ width: "100%", height: "100%" }} alt='' />
                    </Box>
                </Grid>
                <Grid item container flexDirection="column" justifyContent="end">
                    <Box sx={{ color: "#fff", pl: { xs: "10px", md: "30px" } }}>
                        <Typography sx={{ fontSize: { xs: "20px", md: "30px" } }}>PLAYLIST</Typography>
                        <Typography sx={{ fontSize: { xs: "30px", md: "60px" } }}>My Create PlayList</Typography>
                        <Typography sx={{
                            fontSize: "18px", mb: { xs: "10px", md: "30px" }, textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            width: { xs: "200px", sm: "auto" },
                        }}>Create By topleftbooking - 4 songs, 15 min</Typography>
                        <Grid container>
                            <Grid item xs={12} sm={6} container alignItems="center">
                                <CircleButton1 onClick={() => console.log("666")}>
                                    PLAY
                                </CircleButton1>
                                <IconDotsCircleHorizontal size={50} stroke={1} color='#fff' />
                            </Grid>
                            <Grid item xs={12} sm={6} justifyContent="end" container flexDirection="column">
                                <Typography sx={{ fontSize: "18px", color: "#7b7b7b", textAlign: "end" }}>FOLLOWERS</Typography>
                                <Typography sx={{ fontSize: "18px", color: "#7b7b7b", textAlign: "end" }}>{data.user.followers_count}</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ mt: "30px" }}>
                <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: "20px" }}>
                    <Grid item xs={6} sm={5} md={5} xl={5}>
                        <FormControl fullWidth variant="outlined">
                            <OutlinedInput
                                placeholder="Filter"
                                sx={{
                                    "& input": {
                                        color: "#fff !important",
                                        height: "auto !important",
                                        pl: "20px !important"
                                    }
                                }}
                                value={query}
                                onChange={handleSearch}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <IconButton aria-label="search icon" edge="end">
                                            <IconSearch size={25} stroke={1} />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item container xs={6} sm={5} md={4} justifyContent="end">
                        <Typography sx={{ fontSize: "18px", color: "#7b7b7b", mr: "10px" }}>{
                            playlistSwitch ? "Public" : "Private"
                        }</Typography>
                        <Switch onChange={switchChange} />
                    </Grid>
                </Grid>

                <TableContainer>
                    <Table
                        sx={{
                            minWidth: 750,
                            "& th": {
                                border: "none",
                                borderBottom: "1px solid rgba(81, 81, 81, 1)",
                                p: 0,
                            },
                            "& td": {
                                border: "none",
                                borderBottom: "1px solid rgba(81, 81, 81, 1)",
                                fontSize: "14px",
                                lineHeight: "30px",
                                p: 0,

                            },
                        }}
                        aria-labelledby="tableTitle"
                        size="small"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell align="left">TITLE</TableCell>
                                <TableCell align="left">ARTIST</TableCell>
                                <TableCell align="left">ALBUM</TableCell>
                                <TableCell align="left">
                                    <IconCalendar size={25} stroke={2} color='#fff' />
                                </TableCell>
                                <TableCell align="left">
                                    <IconClockHour3 size={25} stroke={2} color='#fff' />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {songs?.songs && songs.songs
                                .map((item, index) => {
                                    return (
                                        <TableRow
                                            key={index}
                                            hover
                                            sx={{
                                                height: '60px', "&:hover .player": {
                                                    opacity: "1 !important",
                                                },
                                                "&:hover .more": {
                                                    opacity: "1 !important",
                                                }
                                            }}
                                        >
                                            <TableCell align="center" onClick={() => dispatch(addPlayList({ id: item.song.id, musicName: item.song.albumName, musicArt: item.song.artistName, musicImg: "assets/images/albums/01.jpg", musicSrc: item.song.media_link }))}>
                                                <IconPlayerPlay className='player' size={25} stroke={2} color='#fff' style={{ cursor: "pointer", opacity: 0, verticalAlign: "middle" }} />
                                            </TableCell>
                                            <TableCell
                                                align="center"
                                                onClick={() => {
                                                    console.log(item.id);
                                                }}
                                            >
                                                <IconHeart size={25} stroke={2} color='#fff' style={{ cursor: "pointer", verticalAlign: "middle" }} />
                                            </TableCell>
                                            <TableCell
                                                align="left"
                                                onClick={() => {
                                                    console.log(item.id);
                                                }}
                                            >
                                                <Typography component="div" sx={{
                                                    fontSize: "14px",
                                                    lineHeight: "30px",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    width: { xs: "200px", sm: "300px", md: "500px" },
                                                }}>
                                                    {
                                                        item?.song ? item.song.title : item.title
                                                    }
                                                </Typography>
                                            </TableCell>
                                            <TableCell
                                                align="left"
                                                onClick={() => {
                                                    console.log(item.id);
                                                }}
                                            >
                                                <Typography component="div" sx={{
                                                    fontSize: "14px",
                                                    lineHeight: "30px",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    width: "100px",
                                                }}>
                                                    {
                                                        item?.song ? item.song.artistName : item.artistName
                                                    }
                                                </Typography>

                                            </TableCell>

                                            <TableCell
                                                align="left"
                                                sx={{ position: "relative" }}
                                            >
                                                <Typography component="span" sx={{
                                                    fontSize: "14px",
                                                    lineHeight: "30px",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    width: { xs: "150px", md: "180px", xl: "200px" },
                                                    display: "inline-block",
                                                }}>
                                                    {
                                                        item?.song ? item.song.albumName : item.albumName
                                                    }
                                                </Typography>

                                                <Typography component="span" className='more' sx={{ verticalAlign: "text-bottom", pl: "10px", opacity: 0, cursor: "pointer" }} onClick={(e) => handleClick(e)}>
                                                    <IconDots size={25} stroke={2} />
                                                </Typography>

                                                <Menu
                                                    id="basic-menu"
                                                    anchorEl={anchorEl}
                                                    open={open}
                                                    onClose={handleClose}
                                                    MenuListProps={{
                                                        "aria-labelledby": "basic-button",
                                                    }}
                                                >
                                                    <MenuItem sx={{ minWidth: "200px" }}>
                                                        <ListItemText>
                                                            <Typography sx={{ fontSize: "16px" }}>Add to</Typography>
                                                        </ListItemText>
                                                    </MenuItem>
                                                    <MenuItem >
                                                        <ListItemText>
                                                            <Typography sx={{ fontSize: "16px" }}>Go to Songs Radio</Typography>
                                                        </ListItemText>
                                                    </MenuItem>
                                                    <Divider />
                                                    <MenuItem>
                                                        <ListItemText>
                                                            <Typography component="div" sx={{ fontSize: "16px", position: "relative" }}>Go to Artist
                                                                <Box sx={{ position: "absolute", top: 0, right: "-10px" }}>
                                                                    <IconChevronRight size={20} stroke={1} />
                                                                </Box>
                                                            </Typography>
                                                        </ListItemText>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <ListItemText>
                                                            <Typography sx={{ fontSize: "16px" }}>Go to Album</Typography>
                                                        </ListItemText>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <ListItemText>
                                                            <Typography sx={{ fontSize: "16px" }}>Show Cred</Typography>
                                                        </ListItemText>
                                                    </MenuItem>
                                                    <Divider />
                                                    <MenuItem>
                                                        <ListItemText>
                                                            <Typography sx={{ fontSize: "16px" }}>Save to your Linked Songs</Typography>
                                                        </ListItemText>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <ListItemText>
                                                            <Typography component="div" sx={{ fontSize: "16px", position: "relative" }}>Add to PlayList
                                                                <Box sx={{ position: "absolute", top: 0, right: "-10px" }}>
                                                                    <IconChevronRight size={20} stroke={1} />
                                                                </Box>
                                                            </Typography>
                                                        </ListItemText>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <ListItemText>
                                                            <Typography sx={{ fontSize: "16px" }}>Remove from this Playlist</Typography>
                                                        </ListItemText>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <ListItemText>
                                                            <Typography component="div" sx={{ fontSize: "16px", position: "relative" }}>Share
                                                                <Box sx={{ position: "absolute", top: 0, right: "-10px" }}>
                                                                    <IconChevronRight size={20} stroke={1} />
                                                                </Box>
                                                            </Typography>
                                                        </ListItemText>
                                                    </MenuItem>
                                                </Menu>
                                            </TableCell>

                                            <TableCell
                                                align="left"
                                                onClick={() => {
                                                    console.log(item.id);
                                                }}
                                            >
                                                {formatSongsDate(item?.song ? item.song.created_at : item.created_at)}
                                            </TableCell>

                                            <TableCell
                                                align="left"
                                                onClick={() => {
                                                    console.log(item.id);
                                                }}
                                            >
                                                0
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}
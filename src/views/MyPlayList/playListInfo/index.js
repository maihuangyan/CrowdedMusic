import React, { useEffect, useState } from 'react'
import {
    Box,
    Grid,
    Typography,
    Link,
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
import { IconDotsCircleHorizontal, IconSearch, IconHeart, IconClockHour3, IconCalendar, IconPlayerPlay } from "@tabler/icons-react"
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
    const [songSearch, setSongSearch] = useState([])
    const [songs, setSongs] = useState([])

    const handleSearch = (e) => {
        console.log(e.target.value, "handleSearch")
        setQuery(e.target.value)

    }

    const switchChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    useEffect(() => {
        setSongs(data)
    }, [location])

    useEffect(() => {
        if (songs?.songs) {
            let filterTitle = data.songs.filter(item => item.song.title.toLowerCase()
                .includes(query.toLowerCase()))
            let filterArtist = data.songs.filter(item => item.song.artistName.toLowerCase()
                .includes(query.toLowerCase()))
            let filterAlbum = data.songs.filter(item => item.song.albumName.toLowerCase()
                .includes(query.toLowerCase()))
            let filterSongs = filterTitle.concat(filterArtist.concat(filterAlbum))

            setSongs({ ...songs, songs: filterSongs })
        }
    }, [query])

    return (
        <Box sx={{ background: "#222", p: "30px" }}>
            <Grid container flexWrap="nowrap">
                <Grid item>
                    <Box sx={{ width: "300px", height: "300px" }}>
                        <img src={imgUrl} style={{ width: "100%", height: "100%" }} alt='' />
                    </Box>
                </Grid>
                <Grid item container flexDirection="column" justifyContent="end">
                    <Box sx={{ color: "#fff", pl: "30px" }}>
                        <Typography sx={{ fontSize: "30px" }}>PLAYLIST</Typography>
                        <Typography sx={{ fontSize: "60px" }}>My Create PlayList</Typography>
                        <Typography sx={{ fontSize: "18px", mb: "30px" }}>Create By topleftbooking - 4 songs, 15 min</Typography>
                        <Grid container>
                            <Grid item xs={6} container alignItems="center">
                                <CircleButton1 onClick={() => console.log("666")}>
                                    PLAY
                                </CircleButton1>
                                <IconDotsCircleHorizontal size={50} stroke={1} color='#fff' />
                            </Grid>
                            <Grid item xs={6} justifyContent="end" container flexDirection="column">
                                <Typography sx={{ fontSize: "18px", color: "#7b7b7b", textAlign: "end" }}>FOLLOWERS</Typography>
                                <Typography sx={{ fontSize: "18px", color: "#7b7b7b", textAlign: "end" }}>{data.user.followers_count}</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ mt: "30px" }}>
                <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: "20px" }}>
                    <Grid item xs={4}>
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
                                    <InputAdornment position="start" onClick={() => {
                                        if (songSearch.length) {
                                            console.log("6666")
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
                                    }
                                }}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item container xs={4} justifyContent="end">
                        <Typography sx={{ fontSize: "18px", color: "#7b7b7b", mr: "10px" }}>Download</Typography>
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
                                                {item.song.title}
                                            </TableCell>
                                            <TableCell
                                                align="left"
                                                onClick={() => {
                                                    console.log(item.id);
                                                }}
                                            >
                                                {item.song.artistName}
                                            </TableCell>

                                            <TableCell
                                                align="left"
                                                onClick={() => {
                                                    console.log(item.id);
                                                }}
                                            >
                                                {item.song.albumName}
                                            </TableCell>

                                            <TableCell
                                                align="left"
                                                onClick={() => {
                                                    console.log(item.id);
                                                }}
                                            >
                                                {formatSongsDate(item.song.created_at)}
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
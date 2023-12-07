import React, { useEffect, useState, useContext } from 'react'
import {
    Box,
    Grid,
    Typography,
} from "@mui/material"

import { useDispatch, useSelector } from 'react-redux';
import { getPlayList } from "store/actions/playList"
import { useNavigate } from 'react-router-dom';
import useJwt from "utils/jwt/useJwt"
import { LoaderContext } from "utils/context/ProgressLoader"

export default function MyPlayLst() {

    const user_id = useSelector((state) => state.users.user.id)
    const myPlaylist = useSelector((state) => state.playList.myPlaylist)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const showProgress = useContext(LoaderContext).showProgress
    const hideProgress = useContext(LoaderContext).hideProgress

    useEffect(() => {
        showProgress()
        useJwt
            .getUserPlayList({ user_id, all: 1 })
            .then((res) => {
                if (res.data.status == 1) {
                    let data = [];
                    data = res.data.data
                    console.log(data)
                    hideProgress()
                    dispatch(getPlayList(data))
                } else {
                    hideProgress()
                    console.log(res.data.ResponseCode);
                }
            })
            .catch((err) => console.log(err));

        console.log(myPlaylist)
    }, [])

    const playListInfo = (item) => {
        navigate("/my_playLst/playList", { state: { data: item } })
    }

    return (
        <Box sx={{ background: "#222", p: "30px", minHeight: "100vh" }}>
            {
                myPlaylist.map((item, i) => <Grid container key={i} sx={{ pl: "15px", pr: "15px" }} onClick={() => playListInfo(item)}>
                    <Grid container alignItems="center" flexWrap="nowrap" sx={{
                        "&:hover .info": {
                            pl: "15px",
                            color: "#ada1a1",
                            transition: "0.3s",
                        },
                        cursor: "pointer",
                        mb: "15px",
                        borderRadius: "10px",
                        overflow: "hidden",
                        background: "#171717",
                    }} >
                        <Grid item sx={{ width: "75px" }}>
                            {/* {
                                    item.map((ele, i) => <img
                                        src={index == 0 ? ele.avatarURL : (index == 1 ? "" : (index == 2 ? ele.album_art : ele.artist_avatar_url))} alt='' key={i} width={55} />)
                                } */}
                            <img src={"https://media.navahang.me/2018/12/75x75/Hoorosh-Band-Ashegham-Kardi.jpg"} alt='' width={75} />
                        </Grid>
                        {
                            <Grid item container alignItems="center"
                                className='info' sx={{ pl: "5px", height: "100%", transition: "0.3s", width: "calc(100% - 75px)" }}>
                                <Box>
                                    <Typography color="#ccc" sx={{ fontSize: "18px" }}>
                                        {item.name}
                                    </Typography>
                                    <Typography color="#777" sx={{ fontSize: "18px", lineHeight: "20px" }}>
                                        {item.songs.length} Songs
                                    </Typography>
                                </Box>
                            </Grid>
                        }
                    </Grid>
                </Grid>)
            }

        </Box>
    )
}
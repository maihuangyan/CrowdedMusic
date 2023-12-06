import React, { useEffect, useState } from 'react'
import {
    Box,
    Grid,
    Typography,
    Link,
} from "@mui/material"

import { useDispatch, useSelector } from 'react-redux';
import useJwt from "utils/jwt/useJwt";
import { useLocation, useNavigate } from 'react-router-dom';

export default function SearchPage() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        let data = [...location.state.data]
        let spliceArr = []
        let searchResultArr = []
        spliceArr = data.splice(1, 1)
        searchResultArr = data.concat(spliceArr)

        setSearchResult(searchResultArr)
    }, [location])

    return (
        <Box sx={{ background: "#000" }}>
            <Typography sx={{ fontSize: "90px", color: "#fff", p: "24px 40px 0" }}>{location.state.query}</Typography>

            <Box>
                {
                    searchResult.length && searchResult.map((item, index) => <Box key={index} sx={{ p: "40px" }}>
                        <Typography sx={{ mb: "8px !important", fontSize: "36px", color: "#fff", lineHeight: "38px" }}>{index == 0 ? "Artists" : (index == 1 ? "Songs" : (index == 2 ? "Albums" : "Videos"))}</Typography>
                        <Grid container>
                            {
                                item.map((ele, i) => <Grid container key={i} item xs={12} md={6} sx={{ pl: "15px", pr: "15px" }}>
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
                                            index == 0 ? <Grid item container alignItems="center" justifyContent="center" sx={{ height: "100%", transition: "0.3s", width: "calc(100% - 75px)" }}>
                                                <Box>
                                                    <Typography color="#ccc" sx={{ fontSize: "22px", lineHeight: "24px" }}>
                                                        {ele.name}
                                                    </Typography>
                                                </Box>
                                            </Grid> : <Grid item container alignItems="center"
                                                className='info' sx={{ pl: "5px", height: "100%", transition: "0.3s", width: "calc(100% - 75px)" }}>
                                                <Box>
                                                    <Typography color="#ccc" sx={{ fontSize: "18px" }}>
                                                        {ele.title}
                                                    </Typography>
                                                    <Typography color="#777" sx={{ fontSize: "18px", lineHeight: "20px" }}>
                                                        {ele.artistName}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        }
                                    </Grid>
                                </Grid>)
                            }
                        </Grid>
                    </Box>)
                }
            </Box>
        </Box>
    )
}
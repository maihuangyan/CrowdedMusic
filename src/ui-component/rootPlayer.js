import React, { useEffect, useRef, useState } from 'react'
import { Image, Slider } from 'antd'
import {
  CustomerServiceOutlined,
  RetweetOutlined,
  StepBackwardOutlined,
  PauseOutlined,
  CaretRightOutlined,
  StepForwardOutlined,
} from '@ant-design/icons';
import { IconVolume, IconHeart, IconShare, IconArrowsShuffle } from "@tabler/icons-react";
import { ShuffleIcon } from "assets/icons"
import 'assets/scss/rootPlayer.scss';
import musicUrl from 'assets/images/albums/01.jpg'
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import useJwt from "utils/jwt/useJwt";

export default function RootPlayer({ musicInfoList }) {

  const openPlaylist = useSelector((state) => state.playList.openPlaylist)
  const user_id = useSelector((state) => state.users.user.id)

  const musicRef = useRef()
  const [musicInfo, setMusicInfo] = useState([])
  const [musicIndex, setMusicIndex] = useState(0)
  const [musicSrc, setMusicSrc] = useState('')
  const [musicImg, setMusicImg] = useState('')
  const [musicName, setMusicName] = useState('')
  const [musicArt, setMusicArt] = useState('')
  const [currentTime, setCurrentTime] = useState(0)
  const [maxTime, setMaxTime] = useState('')
  const [musicVolume, setMusicVolume] = useState('')
  const [musicTimer, setMusicTimer] = useState('')
  const [musicPlay, setMusicPlay] = useState(false)

  const reqSvgs = require.context('../assets/images/albums', true, /\.jpg$/);
  const allSvgFilepaths = reqSvgs.keys();
  const path = allSvgFilepaths[allSvgFilepaths.length - 1];//取最后一张图片地址

  useEffect(() => {
    if (openPlaylist) {
      playMusic()
    }
  }, [openPlaylist])

  useEffect(() => {
    setMusicIndex(0)
    setMusicInfo([...musicInfoList])
  }, [musicInfoList])

  useEffect(() => {
    if (musicInfoList.length) {
      if (musicInfo.length === 0) return setMusicInfo([...musicInfoList])
      setMusicImg("assets/images/albums/02.jpg")
      setMusicName(musicInfo[musicIndex].albumName)
      setMusicArt(musicInfo[musicIndex].artistName)
      setMusicSrc(musicInfo[musicIndex].remotePath)
    }
  }, [musicInfo,musicInfoList])

  useEffect(() => {
    if (musicInfo.length == 0) return

    // const { musicName, musicArt, musicSrc } = musicInfo[musicIndex]
    setMusicName(musicInfo[musicIndex].albumName)
    setMusicArt(musicInfo[musicIndex].artistName)
    setMusicSrc(musicInfo[musicIndex].remotePath)
    setTimeout(playMusic, 500)
    useJwt
      .songPlay({ user_id, song_id: musicInfo[musicIndex].id })
      .then((res) => {
        console.log(res)
      })
      .catch(error => console.log(error))
  }, [musicIndex, musicInfoList])

  const songTimeFilter = (val) => {
    const dt = new Date(val * 1000)
    const mm = (dt.getMinutes() + '').padStart(2, '0')
    const ss = (dt.getSeconds() + '').padStart(2, '0')
    return `${mm}:${ss}`
  }

  const playMusic = () => {
    if (musicSrc) {
      if (musicRef.current.paused) {
        if (!musicVolume) {
          musicRef.current.volume = 0.1
          setMusicVolume(0.1)
        }
        if (musicRef.current.error == null) {
          musicRef.current.play()
        }
        watchMusicInfo()
        setMusicPlay(true)
      } else {
        musicRef.current.pause()
        setMusicPlay(false)
        clearInterval(musicTimer)
      }
    }
  }

  const watchMusicInfo = () => {
    clearInterval(musicTimer)
    setMaxTime(musicRef.current.duration)

    const theTimer = setInterval(() => {
      setMusicTimer(theTimer)

      if (musicRef.current) {
        if (musicRef.current.paused) {
          clearInterval(musicTimer)
          setMusicPlay(false)
        }
        if (musicRef.current.ended) {
          clearInterval(musicTimer)
          setMusicPlay(false)
          changePlayMusic(1)
        }

        setCurrentTime(musicRef.current.currentTime)
      }
    }, 500)
  }

  const changeMusicTime = (value) => {
    clearInterval(musicTimer)
    musicRef.current.currentTime = value
    if (musicRef.current.paused) musicRef.current.play()
    setMusicPlay(true)
    watchMusicInfo()
  }

  const setVolume = (val) => {
    if (!musicVolume) {
      musicRef.current.volume = 0.1
      setMusicVolume(0.1)
      return
    }
    if (!val) return
    musicRef.current.volume = val
  }
  const changePlayerVolume = (value) => {
    if (value == 0) return (musicRef.current.volume = 0)
    setMusicVolume(value / 10)
    setVolume(value / 10)
  }

  const formatter = (value) => songTimeFilter(value)

  const changePlayMusic = (num) => {
    const index = musicIndex + num
    if (index < 0) return setMusicIndex(musicInfo.length - 1)
    if (index >= musicInfo.length) return setMusicIndex(0)

    setMusicIndex(index)
  }

  const [activePlay, setActivePlay] = useState(0)

  return (
    <>
      <div className='rootPlayer'>
        <div className="musicBox">
          <div className='musicMain'>
            <audio ref={musicRef} type="audio" src={musicSrc} ></audio>
            <Grid container>
              <Grid item xs={12} md={3} container justifyContent="end" alignItems="center" sx={{ pr: { xs: "15px", md: "10px", xl: "15px" } }}>
                <div className="musicInfo">
                  <div className="operationBar">
                    <StepBackwardOutlined
                      style={{ fontSize: '28px', color: "#fff" }}
                      onClick={() => changePlayMusic(-1)}
                    />
                    {musicPlay ? (
                      <PauseOutlined
                        style={{ fontSize: '28px', color: "#fff" }}
                        onClick={playMusic}
                      />
                    ) : (
                      <CaretRightOutlined
                        style={{ fontSize: '28px', color: "#fff" }}
                        onClick={playMusic}
                      />
                    )}
                    <StepForwardOutlined
                      style={{ fontSize: '28px', color: "#fff" }}
                      onClick={() => changePlayMusic(1)}
                    />

                    <ShuffleIcon style={{ fontSize: '28px', fill: activePlay == 1 ? "#91caff" : "#fff" }} onClick={() => (activePlay == 1 ? setActivePlay(0) : setActivePlay(1))} />

                    <RetweetOutlined style={{ fontSize: '28px', color: activePlay == 2 ? "#91caff" : "#fff" }} onClick={() => (activePlay == 2 ? setActivePlay(0) : setActivePlay(2))} />
                  </div>
                </div>

              </Grid>
              <Grid item xs={12} md={6} container sx={{ position: "relative", p: { xs: "0 15px", md: "0 10px", xl: "0 15px" } }} >
                <div className="musicImage">
                  <img src={require("assets/images/albums/cd.png")} alt='' />
                  {/* <Image width={120} src={musicImg} /> */}
                </div>
                <div className="musicDesc">
                  {musicName} - {musicArt}
                </div>
                <div className="progressBar">
                  <Slider
                    tooltip={{ formatter }}
                    value={currentTime}
                    max={maxTime}
                    onChange={(value) => setCurrentTime(value)}
                    onAfterChange={changeMusicTime}
                  />
                </div>
                <div className="musicTime">
                  {songTimeFilter(currentTime)} / {songTimeFilter(maxTime)}
                </div>
              </Grid>
              <Grid item xs={12} md={3} container justifyContent="start" alignItems="center" sx={{ pl: { xs: "15px", md: "10px", xl: "15px" } }}>
                <IconVolume size={28} stroke={2} color='#fff' />
                <div className="volume">
                  <Slider defaultValue={1} max={10} onChange={changePlayerVolume} />
                </div>
                <IconHeart size={28} stroke={2} color='#fff' style={{ marginLeft: "10px", cursor: "pointer" }} />
                <IconShare size={28} stroke={2} color='#fff' style={{ marginLeft: "10px", cursor: "pointer" }} />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>

  )
}
import React, { useEffect, useRef, useState } from 'react'
import { Image, Slider } from 'antd'
import {
  CustomerServiceOutlined,
  AudioOutlined,
  BackwardOutlined,
  PlayCircleFilled,
  PauseCircleFilled,
  ForwardOutlined,
} from '@ant-design/icons';
import { IconVolume } from "@tabler/icons-react";
import 'assets/scss/musicPlay.scss';
import musicUrl from 'assets/images/albums/01.jpg'
import { useSelector } from 'react-redux';
import useJwt from "utils/jwt/useJwt";

export default function MusicPlay({ musicInfoList }) {


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
    if (musicInfoList) {
      if (musicInfo.length === 0) return setMusicInfo([...musicInfoList])
      setMusicImg("http://192.168.10.216:31839/assets/uploads/albums/168a143fc4d90c62cfa9f129c87d9732.png")
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
  }, [musicIndex])

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
          console.log("5555")
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

  return (
    <>
      <div className='musicPlay'>

        <div className="musicBox">

          <div className='musicMain'>
            <audio ref={musicRef} type="audio" src={musicSrc}></audio>

            <div className="musicImage">
              <img src={musicImg} alt='' />
              {/* <Image width={120} src={musicImg} /> */}
            </div>

            <div className="musicInfo">
              <div className="musicDesc">
                <CustomerServiceOutlined
                  style={{ paddingRight: '10px' }}
                />
                {musicName}
              </div>
              <div className="musicDesc">
                <AudioOutlined style={{ paddingRight: '10px' }} />
                {musicArt}
              </div>

              <div className="operationBar">
                <BackwardOutlined
                  style={{ fontSize: '28px' }}
                  onClick={() => changePlayMusic(-1)}
                />
                {musicPlay ? (
                  <PauseCircleFilled
                    style={{ fontSize: '22px' }}
                    onClick={playMusic}
                  />
                ) : (
                  <PlayCircleFilled
                    style={{ fontSize: '22px' }}
                    onClick={playMusic}
                  />
                )}
                <ForwardOutlined
                  style={{ fontSize: '28px' }}
                  onClick={() => changePlayMusic(1)}
                />
                <IconVolume size={25} stroke={2} />
                <div className="volume">
                  <Slider defaultValue={1} max={10} onChange={changePlayerVolume} />
                </div>
              </div>
            </div>

            <div className="musicTime">
              {songTimeFilter(currentTime)} / {songTimeFilter(maxTime)}
            </div>

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

        </div>

        <ul className='musicList'>
          {
            musicInfo.map((item, index) => <li key={index} className={musicIndex == index ? "active" : ""} onClick={() => setMusicIndex(index)}>
              <span>
                <figure>{item.albumName}</figure>
                <figcaption>{item.artistName}</figcaption>
              </span>
              <span>{item.length}</span>
            </li>)
          }

        </ul>
      </div>

    </>

  )
}
import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import video1 from "assets/images/wms.mp4"
import video2 from "assets/images/1.mp4"
import video3 from "assets/images/2.mp4"
import video4 from "assets/images/3.mp4"
import video5 from "assets/images/4.mp4"

export default function News() {

  return (
    <div style={{ fontSize: 35, textAlign: "center", marginTop: "20px" , display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>

      <ReactPlayer
        url={video1}
        controls
        className="player"
      />

      <p>好厉害！！！</p>
      <ReactPlayer
        url={video2}
        controls
        className="player"
      />
      <p>........真好听！！！</p>
      <ReactPlayer
        url={video3}
        controls
        className="player"
      />
      <p>....................泰裤辣！！！</p>
      <ReactPlayer
        url={video4}
        controls
        className="player"
      />
      <p>............太牛了！！！</p>
      <ReactPlayer
        url={video5}
        controls
        className="player"
      />
      <p>........66666</p>
    </div>
  )
}

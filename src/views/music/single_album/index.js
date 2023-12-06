import { Box } from '@mui/material';
import React from 'react'
import MusicPlay from 'ui-component/musicPlay';

export default function Single_album() {

    const date = [
        {
            id: 1,
            musicName: "永远都会在",
            musicArt: "旅行团乐队",
            musicImg: "assets/images/albums/01.jpg",
            musicSrc: "https://img3.tukuppt.com/newpreview_music/09/01/85/5c8a1818ddcb736180.mp3",
            musicLyricsSrc: "https://img3.tukuppt.com/newpreview_music/09/01/85/5c8a1818ddcb736180.lrc",
            length:"03:29",
        },

        {
            id: 2,
            musicName: "轻快的背景音配乐",
            musicArt: "轻快",
            musicImg: "assets/images/albums/01.jpg",
            musicSrc: "https://img3.tukuppt.com/newpreview_music/09/00/99/5c89b225eed2d10864.mp3",
            musicLyricsSrc: "https://img3.tukuppt.com/newpreview_music/09/00/99/5c89b225eed2d10864.lrc",
            length:"02:44",
        },
        {
            id: 3,
            musicName: "充满希望大气磅礴会议颁奖背景音乐",
            musicArt: "充满希望",
            musicImg: "assets/images/albums/01.jpg",
            musicSrc: "https://img3.tukuppt.com/newpreview_music/09/01/37/5c89dfda69c8f48851.mp3",
            musicLyricsSrc: "https://img3.tukuppt.com/newpreview_music/09/01/37/5c89dfda69c8f48851.lrc",
            length:"02:26",
        }
    ]
    return (
        <Box sx={{ mt: window.scrollY > 100 ? "130px" : "0" }}>
            <section className="page_breadcrumbs ls section_padding_top_25 section_padding_bottom_25 table_section table_section_md">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 text-center text-md-left">
                            <h2 className="small highlight">Single Album</h2>
                        </div>
                        <div className="col-md-4 text-center text-md-right">
                            <ol className="breadcrumb greylinks">
                                <li> <a href="/homepage">
                                    Homepage
                                </a> </li>
                                <li> <a href="#">Music</a> </li>
                                <li className="active">Single Album</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section id="latest-album" className="ds ms page_latest_album parallax section_padding_top_150 section_padding_bottom_100 columns_margin_bottom_30 columns_padding_25">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-7">
                            <div className="vertical-item slide-media opened-media">
                                <div className="item-media-wrap"> <img src="images/albums/02.jpg" alt="" />
                                    <div className="item-media back-media"> <img src={require("assets/images/albums/cd.png")} alt="" /> </div>
                                    <div className="item-media with_frame_image"> <img src={require("assets/images/albums/02.jpg")} alt="" />
                                        <div className="media-links no-overlay">
                                            <div className="links-wrap"> <span>
                                                <i className="fa fa-play highlight" aria-hidden="true"></i>
                                            </span> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-content topmargin_35">
                                    <h3 className="entry-title"> <a href="single-album.html">I'm Your Dreams Just Like</a> </h3>
                                    <p>
                                        <span className="grey">Released:</span> 13/09/2017 <br /> <span className="grey">Label:</span> I am the Best, RED <br /> <span className="grey">Format:</span> Digital download, CD <br /> <span className="grey">Certifications:</span> RIAA: Gold
                                    </p>
                                    <div className="big-icons topmargin_25">
                                        <a href="#" className="social-icon border-icon rounded-icon socicon-apple"></a> <a href="#" className="social-icon border-icon rounded-icon socicon-play"></a> <a href="#" className="social-icon border-icon rounded-icon socicon-amazon"></a> <a href="#" className="social-icon border-icon rounded-icon socicon-spotify"></a>										<a href="#" className="social-icon border-icon rounded-icon socicon-soundcloud"></a> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12">
                            <article>
                                <MusicPlay musicInfoList={date} />
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </Box>
    )
}

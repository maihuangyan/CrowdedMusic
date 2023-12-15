import React, { useEffect, useState, useContext } from 'react'
import {
    Box,
    Grid,
    Typography,
} from '@mui/material'
import { IconChevronLeft, IconChevronRight, IconPlayerPlay } from "@tabler/icons-react";

import MusicPlay from 'ui-component/musicPlay';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.scss"

import ReactPlayer from "react-player";
import { Modal } from 'antd';
import musicURL from "assets/music/background.mp3"
import useJwt from "utils/jwt/useJwt"
import { LoaderContext } from "utils/context/ProgressLoader"
import { formatDate } from "utils/common"

const homeImg = [
    {
        id: 1,
        image: <img src={require("assets/images/slide01.jpg")} alt="" />,
        h1: "Hello! I am a singer",
        h2: " Rachel Salverz ",
        p: "Music only makes me stronger. Music speaks to the heart in ways words cannot express.",
    },
    {
        id: 2,
        image: <img src={require("assets/images/slide02.jpg")} alt="" />,
        h1: "Hello! I am a singer",
        h2: " Rachel Salverz ",
        p: "We hold our notes longer, better, and higher. We put the mental in instrumental and the cool in musicool.",
    },
    {
        id: 3,
        image: <img src={require("assets/images/slide03.jpg")} alt="" />,
        h1: "Hello! I am a singer",
        h2: " Rachel Salverz ",
        p: "We put the mental in instrumental and the cool in musicool.We hold our notes longer, better, and higher. ",
    }]

export default function Home() {

    const showProgress = useContext(LoaderContext).showProgress
    const hideProgress = useContext(LoaderContext).hideProgress


    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function NextArrowRender(props) {
        const { className, style, onClick, size, color } = props;
        return (
            <div className={className} style={{ ...style }} onClick={onClick}>
                <IconChevronRight color={color ? color : "#FFF"} size={size} stroke={2} />
            </div>
        );
    }

    function PrevArrowRender(props) {
        const { className, style, onClick, size, color } = props;
        return (
            <div className={className} style={{ ...style }} onClick={onClick}>
                <IconChevronLeft color={color ? color : "#FFF"} size={size} stroke={2} />
            </div>
        );
    }

    const settings = {
        className: "slide",
        fade: true,
        accessibility: true,
        adaptiveHeight: true,
        arrows: true,
        draggable: false,
        dots: true,
        nextArrow: <NextArrowRender size={40} />,
        prevArrow: <PrevArrowRender size={40} />,
        beforeChange: (prev) => {
            console.log(prev, "6666")
        }
    };

    const settings1 = {
        className: "slide1",
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrowRender size={30} color="#b5b5b5" />,
        prevArrow: <PrevArrowRender size={30} color="#b5b5b5" />,
        rtl: "true",
    };

    const settings2 = {
        className: "slide2",
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrowRender size={30} color="#b5b5b5" />,
        prevArrow: <PrevArrowRender size={30} color="#b5b5b5" />,
        rtl: "true",
    };

    const settings3 = {
        className: "slide3",
        dots: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrowRender size={30} />,
        prevArrow: <PrevArrowRender size={30} />,
        rtl: "true",
    };

    const [openVideo, setOpenVideo] = useState(false)

    const playVideo = () => {
        setOpenVideo(true)
    }

    const handleOk = () => {
        setOpenVideo(false);
    };
    const handleCancel = () => {
        setOpenVideo(false);
    };

    const date = [
        {
            id: 1,
            musicName: "永远都会在",
            musicArt: "旅行团乐队",
            musicImg: "assets/images/albums/01.jpg",
            musicSrc: "https://img3.tukuppt.com/newpreview_music/09/01/85/5c8a1818ddcb736180.mp3",
            musicLyricsSrc: "https://img3.tukuppt.com/newpreview_music/09/01/85/5c8a1818ddcb736180.lrc",
            length: "03:29",
        },

        {
            id: 2,
            musicName: "轻快的背景音配乐",
            musicArt: "轻快",
            musicImg: "assets/images/albums/01.jpg",
            musicSrc: "https://img3.tukuppt.com/newpreview_music/09/00/99/5c89b225eed2d10864.mp3",
            musicLyricsSrc: "https://img3.tukuppt.com/newpreview_music/09/00/99/5c89b225eed2d10864.lrc",
            length: "02:44",
        },
        {
            id: 3,
            musicName: "充满希望大气磅礴会议颁奖背景音乐",
            musicArt: "充满希望",
            musicImg: "assets/images/albums/01.jpg",
            musicSrc: "https://img3.tukuppt.com/newpreview_music/09/01/37/5c89dfda69c8f48851.mp3",
            musicLyricsSrc: "https://img3.tukuppt.com/newpreview_music/09/01/37/5c89dfda69c8f48851.lrc",
            length: "02:26",
        }
    ]

    const [covers, setCovers] = useState([])
    const [members, setMembers] = useState({})
    const [albums, setAlbums] = useState({})
    const [video, setVideo] = useState({})
    const [latestNews, setLatestNews] = useState([])
    const [phone_list, setPhone_list] = useState([])
    const [shop, setShop] = useState([])

    useEffect(() => {
        showProgress()
        useJwt
            .getCovers_and_reviews()
            .then((res) => {
                if (res.data.status == 1) {
                    let data = [];
                    data = res.data.data
                    console.log(data)
                    setCovers(data.covers)
                    setMembers(data.members)
                    setAlbums(data.albums[0])
                    setVideo(data.video)
                    setLatestNews(data.news)
                    setPhone_list(data.phone_list)
                    setShop(data.shop)

                    hideProgress()
                } else {
                    hideProgress()
                    console.log(res.data.ResponseCode);
                }
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <div className='homePage'>
            <Modal open={openVideo} onOk={handleOk} onCancel={handleCancel} centered>
                <ReactPlayer url={video?.link} playing={openVideo} className="video" />
            </Modal>
            <Box sx={{minHeight: "100vh",background:"#222"}}>
                <Slider {...settings}>
                    {
                        covers.map(item => <div key={item.id}>
                            <img src={item.image ? item.image : require("assets/images/slide03.jpg")} loading='lazy' alt="" />
                            <div className='context'>
                                <h3 className='animate__animated animate__slideInDown'>{item.button_title}</h3>
                                <h2 className='animate__animated animate__slideInDown'>{item.title}</h2>
                                <p className='animate__animated animate__slideInUp'>{item.sub_title}</p>
                            </div>
                        </div>)
                    }
                </Slider>
            </Box>


            <section id="about" className="ds ms page_about parallax section_padding_top_130 section_padding_bottom_75 table_section table_section_md columns_margin_bottom_30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="with_frame_image"> <img src={members?.image} alt="" className="rounded" /> </div>
                        </div>
                        <div className="col-md-6">
                            <h2 className="section_header with_line">Biography</h2>
                            <p className="fontsize_20">{members?.title}</p>
                            <p>{members?.sub_title}</p>
                            <div className="content-justify vertical-center content-margins topmargin_25">
                                <img src={require("assets/images/signature.png")} alt="" /> </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="events" className="ds ms section_padding_top_150 section_padding_bottom_150">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h2 className="section_header with_line">Shop</h2>
                            <Slider {...settings1}>
                                {
                                    shop.map((item, index) => <div className="vertical-item content-absolute hover-entry-content" key={index}>
                                        <div className="item-media mutted-media ds"> <img src={item.image} alt="" />
                                            <div className="entry-meta-corner grey"> <span className="big">${item.price}</span>  </div>
                                        </div>
                                        <div className="item-content cs">
                                            <h3 className="entry-title bottommargin_0"> <a href="team-single.html">{item.title}</a> </h3>
                                            {/* <p className="small-text bottommargin_0"> 04 Dec 2017 / 05:00 PM / Barcelona </p> */}
                                            <div className="entry-content">
                                                {/* <p> Bacon ipsum dolor amet drumstick rump porchetta shank, bacon kielbasa strip steak fatback frankfurter pig pance. </p> */}
                                                <p className="topmargin_20 event_buttons"> <a href="#" className="theme_button color2">Buy</a> <a href="#" className="theme_button inverse">Read More</a> </p>
                                            </div>
                                        </div>
                                    </div>)
                                }
                                {/* <div className="vertical-item content-absolute hover-entry-content">
                                    <div className="item-media mutted-media ds"> <img src={require("assets/images/events/01.jpg")} alt="" />
                                        <div className="entry-meta-corner grey"> <span className="big">$65</span> <span className="small-text">a ticket</span> </div>
                                    </div>
                                    <div className="item-content cs">
                                        <h3 className="entry-title bottommargin_0"> <a href="team-single.html">Found Festival 2017</a> </h3>
                                        <p className="small-text bottommargin_0"> 04 Dec 2017 / 05:00 PM / Barcelona </p>
                                        <div className="entry-content">
                                            <p> Bacon ipsum dolor amet drumstick rump porchetta shank, bacon kielbasa strip steak fatback frankfurter pig pance. </p>
                                            <p className="topmargin_20 event_buttons"> <a href="#" className="theme_button color2">Buy Tickets</a> <a href="#" className="theme_button inverse">Read More</a> </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-item content-absolute hover-entry-content">
                                    <div className="item-media mutted-media ds"> <img src={require("assets/images/events/02.jpg")} alt="" />
                                        <div className="entry-meta-corner grey"> <span className="big">$80</span> <span className="small-text">a ticket</span> </div>
                                    </div>
                                    <div className="item-content cs">
                                        <h3 className="entry-title bottommargin_0"> <a href="team-single.html">Music Box 2017</a> </h3>
                                        <p className="small-text bottommargin_0"> 23 sept 2017 / 07:00 PM / Moscow </p>
                                        <div className="entry-content">
                                            <p> Bacon ipsum dolor amet drumstick rump porchetta shank, bacon kielbasa strip steak fatback frankfurter pig pance. </p>
                                            <p className="topmargin_20 event_buttons"> <a href="#" className="theme_button color2">Buy Tickets</a> <a href="#" className="theme_button inverse">Read More</a> </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-item content-absolute hover-entry-content">
                                    <div className="item-media mutted-media ds"> <img src={require("assets/images/events/03.jpg")} alt="" />
                                        <div className="entry-meta-corner grey"> <span className="big">$99</span> <span className="small-text">a ticket</span> </div>
                                    </div>
                                    <div className="item-content cs">
                                        <h3 className="entry-title bottommargin_0"> <a href="team-single.html">Music Pasadena</a> </h3>
                                        <p className="small-text bottommargin_0"> 20 oct 2017 / 08:00 PM / berlin </p>
                                        <div className="entry-content">
                                            <p> Bacon ipsum dolor amet drumstick rump porchetta shank, bacon kielbasa strip steak fatback frankfurter pig pance. </p>
                                            <p className="topmargin_20 event_buttons"> <a href="#" className="theme_button color2">Buy Tickets</a> <a href="#" className="theme_button inverse">Read More</a> </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-item content-absolute hover-entry-content">
                                    <div className="item-media mutted-media ds"> <img src={require("assets/images/events/01.jpg")} alt="" />
                                        <div className="entry-meta-corner grey"> <span className="big">$65</span> <span className="small-text">a ticket</span> </div>
                                    </div>
                                    <div className="item-content cs">
                                        <h3 className="entry-title bottommargin_0"> <a href="team-single.html">Found Festival 2017</a> </h3>
                                        <p className="small-text bottommargin_0"> 04 Dec 2017 / 05:00 PM / Barcelona </p>
                                        <div className="entry-content">
                                            <p> Bacon ipsum dolor amet drumstick rump porchetta shank, bacon kielbasa strip steak fatback frankfurter pig pance. </p>
                                            <p className="topmargin_20 event_buttons"> <a href="#" className="theme_button color2">Buy Tickets</a> <a href="#" className="theme_button inverse">Read More</a> </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-item content-absolute hover-entry-content">
                                    <div className="item-media mutted-media ds"> <img src={require("assets/images/events/02.jpg")} alt="" />
                                        <div className="entry-meta-corner grey"> <span className="big">$80</span> <span className="small-text">a ticket</span> </div>
                                    </div>
                                    <div className="item-content cs">
                                        <h3 className="entry-title bottommargin_0"> <a href="team-single.html">Music Box 2017</a> </h3>
                                        <p className="small-text bottommargin_0"> 23 sept 2017 / 07:00 PM / Moscow </p>
                                        <div className="entry-content">
                                            <p> Bacon ipsum dolor amet drumstick rump porchetta shank, bacon kielbasa strip steak fatback frankfurter pig pance. </p>
                                            <p className="topmargin_20 event_buttons"> <a href="#" className="theme_button color2">Buy Tickets</a> <a href="#" className="theme_button inverse">Read More</a> </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-item content-absolute hover-entry-content">
                                    <div className="item-media mutted-media ds"> <img src={require("assets/images/events/03.jpg")} alt="" />
                                        <div className="entry-meta-corner grey"> <span className="big">$99</span> <span className="small-text">a ticket</span> </div>
                                    </div>
                                    <div className="item-content cs">
                                        <h3 className="entry-title bottommargin_0"> <a href="team-single.html">Music Pasadena</a> </h3>
                                        <p className="small-text bottommargin_0"> 20 oct 2017 / 08:00 PM / berlin </p>
                                        <div className="entry-content">
                                            <p> Bacon ipsum dolor amet drumstick rump porchetta shank, bacon kielbasa strip steak fatback frankfurter pig pance. </p>
                                            <p className="topmargin_20 event_buttons"> <a href="#" className="theme_button color2">Buy Tickets</a> <a href="#" className="theme_button inverse">Read More</a> </p>
                                        </div>
                                    </div>
                                </div> */}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section id="featured-video" className="ds parallax section_padding_top_150 section_padding_bottom_150">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center"> <span className="theme_button inverse round_button margin_0" style={{ cursor: "pointer" }} onClick={() => playVideo()}>
                            <IconPlayerPlay style={{ verticalAlign: "middle" }} size={25} stroke={2} />
                        </span>
                            <h2 className="section_header bottommargin_0"> {video?.title} - {video?.sub_title} </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section id="latest-album" className="ds ms page_latest_album parallax section_padding_top_150 section_padding_bottom_100 columns_margin_bottom_30 columns_padding_25">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h2 className="section_header with_line">Latest Album</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 col-sm-7">
                            <div className="vertical-item slide-media opened-media">
                                <div className="item-media-wrap"> <img src={require("assets/images/albums/02.jpg")} alt="" />
                                    <div className="item-media back-media"> <img src={require("assets/images/albums/cd.png")} alt="" /> </div>
                                    <div className="item-media with_frame_image"> <img src={albums?.image} alt="" />
                                        <div className="media-links no-overlay">
                                            <div className="links-wrap"> <span>
                                                <i className="fa fa-play highlight" aria-hidden="true"></i>
                                            </span> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-content topmargin_80">
                                    <h3 className="entry-title"> <a href="#">{albums?.title}</a> </h3>
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
                                <MusicPlay musicInfoList={albums?.song_list} />
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="ds ms background_cover page_contact section_padding_top_150 section_padding_bottom_150">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-6 text-center">
                            <h2 className="section_header with_line">Contact for Booking</h2>
                            <p> For booking and press inquiries please contact my manager by filling the form or calling the number: 1-888-652-2588 </p>
                            <form className="contact-form columns_padding_10 topmargin_30" method="post" action="http://html.modernwebtemplates.com/singer/">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group margin_0"> <label htmlFor="name">Full Name <span className="required">*</span></label> <input type="text" aria-required="true" size="30" name="name" id="name" className="form-control" placeholder="Full Name*" /> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group margin_0"> <label htmlFor="email">Email address<span className="required">*</span></label> <input type="email" aria-required="true" size="30" name="email" id="email" className="form-control" placeholder="Your Email Address*" /> </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group margin_0"> <label htmlFor="message">Your question</label> <textarea aria-required="true" rows="5" cols="45" name="message" id="message" className="form-control" placeholder="Your Message*"></textarea> </div>
                                    </div>
                                </div>
                                <div className="row topmargin_20">
                                    <div className="col-sm-12">
                                        <div className="contact-form-submit text-center"> <button type="submit" id="contact_form_submit" name="contact_submit" className="theme_button color1 min_width_button">Submit now</button> </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section id="news" className="ds ms section_padding_top_150 section_padding_bottom_130">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h2 className="section_header with_line">Latest News</h2>
                            <Slider {...settings2}>
                                {
                                    latestNews.map((item, index) => <article className="vertical-item content-padding with_background rounded text-center offset_button" key={index}>
                                        <Box className="item-media top_rounded overflow_hidden" sx={{
                                            height: {
                                                xs: "150px", md: "200px", lg: "230px"
                                            }, overflow: "hidden", position: "relative", "& img": {
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                bottom: 0,
                                                right: 0,
                                                m: "auto"
                                            }
                                        }}> <img src={item.media_link} alt="" />
                                            <div className="media-links"> <a href="blog-single-right.html" className="abs-link"></a> </div>
                                        </Box>
                                        <div className="item-content">
                                            <header className="entry-header">
                                                <div className="entry-meta small-text content-justify"> <span className="greylinks">
                                                    <a href="blog-single-right.html">
                                                        {formatDate(item.updated_at, "yyyy-MM-dd")}
                                                    </a>
                                                </span> <span className="categories-links highlightlinks">
                                                        <a href="#0">Life</a>
                                                    </span> </div>
                                                <h4 className="entry-title" style={{ minHeight: "80px" }}> <a href="blog-single-right.html">{item.title}</a> </h4>
                                            </header>
                                            <div className="entry-content">
                                                <p className="content-3lines-ellipsis">{item.content}</p> <span className="button_wrap">
                                                    <a href="blog-single-right.html" className="theme_button color1">Read More</a>
                                                </span> </div>
                                        </div>
                                    </article>)
                                }
                                {/* <article className="vertical-item content-padding with_background rounded text-center offset_button">
                                    <div className="item-media top_rounded overflow_hidden"> <img src={require("assets/images/gallery/11.jpg")} alt="" />
                                        <div className="media-links"> <a href="blog-single-right.html" className="abs-link"></a> </div>
                                    </div>
                                    <div className="item-content">
                                        <header className="entry-header">
                                            <div className="entry-meta small-text content-justify"> <span className="greylinks">
                                                <a href="blog-single-right.html">
                                                    <time dateTime="2017-10-03T08:50:40+00:00">
                                                        23 sept 2017
                                                    </time>
                                                </a>
                                            </span> <span className="categories-links highlightlinks">
                                                    <a href="#0">Life</a>
                                                </span> </div>
                                            <h4 className="entry-title"> <a href="blog-single-right.html">Rachel Featured As One Of TIME's Women</a> </h4>
                                        </header>
                                        <div className="entry-content">
                                            <p className="content-3lines-ellipsis">Bacon ipsum dolor amet hamburger biltong meatball, salami capicola sirloin tail t-bone beef kevin drumstick.</p> <span className="button_wrap">
                                                <a href="blog-single-right.html" className="theme_button color1">Read More</a>
                                            </span> </div>
                                    </div>
                                </article>
                                <article className="vertical-item content-padding with_background rounded text-center offset_button">
                                    <div className="item-media top_rounded overflow_hidden"> <img src={require("assets/images/gallery/18.jpg")} alt="" />
                                        <div className="media-links"> <a href="blog-single-right.html" className="abs-link"></a> </div>
                                    </div>
                                    <div className="item-content">
                                        <header className="entry-header">
                                            <div className="entry-meta small-text content-justify"> <span className="greylinks">
                                                <a href="blog-single-right.html">
                                                    <time dateTime="2017-10-03T08:50:40+00:00">
                                                        24 sept 2017
                                                    </time>
                                                </a>
                                            </span> <span className="categories-links highlightlinks">
                                                    <a href="#0">Music</a>
                                                </span> </div>
                                            <h4 className="entry-title"> <a href="blog-single-right.html">Rachel Covers Business Of Fashion's Print Edition</a> </h4>
                                        </header>
                                        <div className="entry-content">
                                            <p className="content-3lines-ellipsis">Filet mignon pork belly flank tri-tip salami. Cupim pig capicola venison, sausa cow jerky ground round.</p> <span className="button_wrap">
                                                <a href="blog-single-right.html" className="theme_button color1">Read More</a>
                                            </span> </div>
                                    </div>
                                </article>
                                <article className="vertical-item content-padding with_background rounded text-center offset_button">
                                    <div className="item-media top_rounded overflow_hidden"> <img src={require("assets/images/gallery/19.jpg")} alt="" />
                                        <div className="media-links"> <a href="blog-single-right.html" className="abs-link"></a> </div>
                                    </div>
                                    <div className="item-content">
                                        <header className="entry-header">
                                            <div className="entry-meta small-text content-justify"> <span className="greylinks">
                                                <a href="blog-single-right.html">
                                                    <time dateTime="2017-10-03T08:50:40+00:00">
                                                        25 sept 2017
                                                    </time>
                                                </a>
                                            </span> <span className="categories-links highlightlinks">
                                                    <a href="#0">Concerts</a>
                                                </span> </div>
                                            <h4 className="entry-title"> <a href="blog-single-right.html">Fetish (Galantis Mac Remix) Out Now</a> </h4>
                                        </header>
                                        <div className="entry-content">
                                            <p className="content-3lines-ellipsis">Brisket cow strip steak filet mignon salami meatball, chuck corned beef spare ribs pork loin brisket meatloaf tongue.</p> <span className="button_wrap">
                                                <a href="blog-single-right.html" className="theme_button color1">Read More</a>
                                            </span> </div>
                                    </div>
                                </article> */}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section id="gallery" className="ds ms">
                <Slider {...settings3}>
                    {
                        phone_list.map((item, index) => <div className="vertical-item corporate consulting" key={index}>
                            <Box className="item-media" sx={{
                                height: { xs: "180px", md: "240px" }, width: "240px", "& img": {
                                    width: "100% !important",
                                    height: "100%",
                                }
                            }}> <img src={item.photoURL} alt="" />
                                <div className="media-links"> <span className="abs-link prettyPhoto" data-gal="prettyPhoto[gal]"></span> </div>
                            </Box>
                        </div>)
                    }
                </Slider>
            </section>
        </div>

    )
}
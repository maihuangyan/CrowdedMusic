import React from 'react'
import { Box } from '@mui/material'
import "./aaa.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Trending() {

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
    };

    return (
        <Box component={"div"}>
            <div className=" page_mainslider">
                <div className="sliders">
                    <Slider {...settings} className="swiper-container slider homeTopSlider">
                        <div className="theslide">
                            <a href="https://www.navahang.com/music-video/azel-soroode-fareh-iran/">
                                <img src="https://www.navahang.com/images/2023/08/Azel-Soroode-Fareh-Iran-video-sld.jpg" /></a>
                            <div className="caption">
                                <span>Azel</span>
                                <div></div>
                                <div className="nameof"><span>Soroode Fareh Iran</span></div>
                            </div>
                        </div>
                        <div className="theslide">
                            <a href="https://www.navahang.com/music-video/evan-band-faramooshkar-live/">
                                <img
                                    src="https://www.navahang.com/images/2023/09/Evan-Band-Faramooshkar-Live-video-sld.jpg" /></a>
                            <div className="caption">
                                <span>Evan Band</span>
                                <div></div>
                                <div className="nameof"><span>Faramooshkar (Live)</span></div>
                            </div>
                        </div>
                        <div className="theslide">
                            <a href="https://www.navahang.com/mp3/erfan-tahmasbi-to/">
                                <img src="https://www.navahang.com/images/2023/09/Erfan-Tahmasbi-To-sld.jpg" /></a>
                            <div className="caption">
                                <span>Erfan Tahmasbi</span>
                                <div></div>
                                <div className="nameof"><span>To</span></div>
                            </div>
                        </div>
                        <div className="theslide">
                            <a href="https://www.navahang.com/music-video/masoud-sadeghloo-akhare-shab-live/">
                                <img
                                    src="https://www.navahang.com/images/2023/09/Masoud-Sadeghloo-Akhare-Shab-Live-video-sld.jpg" /></a>
                            <div className="caption">
                                <span>Masoud Sadeghloo</span>
                                <div></div>
                                <div className="nameof"><span>Akhare Shab (Live)</span></div>
                            </div>
                        </div>
                        <div className="theslide">
                            <a href="https://www.navahang.com/music-video/amir-zehi-o-sole-mio/">
                                <img src="https://www.navahang.com/images/2023/08/Amir-Zehi-O-Sole-Mio-video-sld.jpg" /></a>
                            <div className="caption">
                                <span>Amir Zehi</span>
                                <div></div>
                                <div className="nameof"><span>O Sole Mio</span></div>
                            </div>
                        </div>
                        <div className="theslide">
                            <a href="https://www.navahang.com/music-video/roozbeh-bemani-bad-az-raftan/">
                                <img
                                    src="https://www.navahang.com/images/2023/08/Roozbeh-Bemani-Bad-Az-Raftan-video-sld.jpg" /></a>
                            <div className="caption">
                                <span>Roozbeh Bemani</span>
                                <div></div>
                                <div className="nameof"><span>Bad Az Raftan</span></div>
                            </div>
                        </div>
                        <div className="theslide">
                            <a href="https://www.navahang.com/music-video/kamran-delan-leila/">
                                <img src="https://www.navahang.com/images/2023/08/Kamran-Delan-Leila-video-sld.jpg" /></a>
                            <div className="caption">
                                <span>Kamran Delan</span>
                                <div></div>
                                <div className="nameof"><span>Leila</span></div>
                            </div>
                        </div>
                        <div className="theslide">
                            <a href="https://www.navahang.com/music-video/shahriar-shahi-doost-daramat/">
                                <img
                                    src="https://www.navahang.com/images/2023/08/Shahriar-Shahi-Doost-Daramat-video-sld.jpg" /></a>
                            <div className="caption">
                                <span>Shahriar Shahi</span>
                                <div></div>
                                <div className="nameof"><span>Doost Daramat</span></div>
                            </div>
                        </div>
                        <div className="theslide">
                            <a href="https://www.navahang.com/music-video/saaro-atel-o-batel/">
                                <img src="https://www.navahang.com/images/2023/08/Saaro-Atel-o-Batel-video-sld.jpg" /></a>
                            <div className="caption">
                                <span>Saaro</span>
                                <div></div>
                                <div className="nameof"><span>Atel o Batel</span></div>
                            </div>
                        </div>
                        <div className="theslide">
                            <a href="https://www.navahang.com/mp3/mahan-bahram-khan-mese-to/">
                                <img src="https://www.navahang.com/images/2023/08/Mahan-Bahram-Khan-Mese-To-video-sld.jpg" /></a>
                            <div className="caption">
                                <span>Mahan Bahram Khan</span>
                                <div></div>
                                <div className="nameof"><span>Mese To</span></div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </Box>
    )
}

import React, { useEffect, useRef, useState, useContext } from 'react'
import { useTheme } from '@mui/material/styles';
import { IconRectangleVertical, IconPlus } from "@tabler/icons-react"
import Slider from "react-slick";
import "./Trending.scss"
import "./slick.scss"
import { useDispatch } from 'react-redux';
import { addPlayList } from 'store/actions/playList';
import useJwt from "utils/jwt/useJwt";
import { LoaderContext } from "utils/context/ProgressLoader"

export default function Trending() {

  const showProgress = useContext(LoaderContext).showProgress
  const hideProgress = useContext(LoaderContext).hideProgress

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const homeTopSlider = useRef()
  const homeTopSliderNav = useRef()

  function NextArrowRender(props) {
    const { className, style, onClick, size, color } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        <img className='a-right control-c next' src={require("assets/images/navahang/slide-right.png")} alt='' />
      </div>
    );
  }

  function PrevArrowRender(props) {
    const { className, style, onClick, size, color } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        <img className='a-right control-c prev' src={require("assets/images/navahang/slide-left.png")} alt='' />
      </div>
    );
  }

  const settings = {
    className: "slider homeTopSlider",
    // autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    asNavFor: homeTopSliderNav.current,
    nextArrow: <NextArrowRender />,
    prevArrow: <PrevArrowRender />,
  };

  const settings1 = {
    className: "slider homeTopSliderNav",
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: homeTopSlider.current,
    speed: 300,
    infinite: true,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    swipeToSlide: true,
  };

  const settings2 = {
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    draggable: false,
    centerMode: false,
    infinite: true,
    nextArrow: <NextArrowRender />,
    prevArrow: <PrevArrowRender />,
    responsive: [
      {
        breakpoint: 1930,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
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

  const dispatch = useDispatch()
  const [trendingSongs, setTrendingSongs] = useState([]);
  const [popularEpisode, setPopularEpisode] = useState([]);

  useEffect(() => {
    showProgress()
    useJwt
      .getTrending()
      .then((res) => {
        if (res.data.status == 1) {
          let data = [];
          data = res.data.data
          console.log(data)
          setTrendingSongs(data.top_songs.data)
          setPopularEpisode(data.top_episode.data)
          hideProgress()
        } else {
          hideProgress()
          console.log(res.data.ResponseCode);
        }
      })
      .catch((err) => console.log(err));

  }, [])

  return (
    <div className='trending'>
      <section className="intro_section page_mainslider ds">
        <div className="endpart"></div>
        <div className="endpart"></div>
        <div className="sliders">
          <Slider {...settings} ref={homeTopSlider}>
            <div className="theslide">
              <a href="assets/images/navahang/slider01.jpeg">
                <img src={require("assets/images/navahang/slider01.jpeg")} alt='' /></a>
              <div className="caption">
                <span>Azel</span>
                <div style={{ clear: "both" }}></div>
                <div className="nameof"><span>Soroode Fareh Iran</span></div>
              </div>
            </div>
            <div className="theslide">
              <a href="assets/images/navahang/slick02.jpeg">
                <img
                  src={require("assets/images/navahang/slick02.jpeg")} alt='' /></a>
              <div className="caption">
                <span>Evan Band</span>
                <div style={{ clear: "both" }}></div>
                <div className="nameof"><span>Faramooshkar (Live)</span></div>
              </div>
            </div>
            <div className="theslide">
              <a href="assets/images/navahang/slick03.jpeg">
                <img src={require("assets/images/navahang/slick03.jpeg")} alt='' /></a>
              <div className="caption">
                <span>Erfan Tahmasbi</span>
                <div style={{ clear: "both" }}></div>
                <div className="nameof"><span>To</span></div>
              </div>
            </div>
            <div className="theslide">
              <a href="assets/images/navahang/slick04.jpeg">
                <img
                  src={require("assets/images/navahang/slick04.jpeg")} alt='' /></a>
              <div className="caption">
                <span>Masoud Sadeghloo</span>
                <div style={{ clear: "both" }}></div>
                <div className="nameof"><span>Akhare Shab (Live)</span></div>
              </div>
            </div>
            <div className="theslide">
              <a href="assets/images/navahang/slick05.jpeg">
                <img src={require("assets/images/navahang/slick05.jpeg")} alt='' /></a>
              <div className="caption">
                <span>Amir Zehi</span>
                <div style={{ clear: "both" }}></div>
                <div className="nameof"><span>O Sole Mio</span></div>
              </div>
            </div>
            <div className="theslide">
              <a href="assets/images/navahang/slick06">
                <img
                  src={require("assets/images/navahang/slick06.jpeg")} alt='' /></a>
              <div className="caption">
                <span>Roozbeh Bemani</span>
                <div style={{ clear: "both" }}></div>
                <div className="nameof"><span>Bad Az Raftan</span></div>
              </div>
            </div>
            <div className="theslide">
              <a href="assets/images/navahang/slick07">
                <img src={require("assets/images/navahang/slick07.jpeg")} alt='' /></a>
              <div className="caption">
                <span>Kamran Delan</span>
                <div style={{ clear: "both" }}></div>
                <div className="nameof"><span>Leila</span></div>
              </div>
            </div>
            <div className="theslide">
              <a href="assets/images/navahang/slick08.jpeg">
                <img src={require("assets/images/navahang/slick08.jpeg")} alt='' /></a>
              <div className="caption">
                <span>Shahriar Shahi</span>
                <div style={{ clear: "both" }}></div>
                <div className="nameof"><span>Doost Daramat</span></div>
              </div>
            </div>
            <div className="theslide">
              <a href="assets/images/navahang/slick09.jpeg">
                <img src={require("assets/images/navahang/slick09.jpeg")} alt='' /></a>
              <div className="caption">
                <span>Saaro</span>
                <div style={{ clear: "both" }}></div>
                <div className="nameof"><span>Atel o Batel</span></div>
              </div>
            </div>
            <div className="theslide">
              <a href="assets/images/navahang/slick10.jpeg">
                <img src={require("assets/images/navahang/slick10.jpeg")} alt='' />
              </a>
              <div className="caption">
                <span>Mahan Bahram Khan</span>
                <div style={{ clear: "both" }}></div>
                <div className="nameof"><span>Mese To</span></div>
              </div>
            </div>
          </Slider>
          <Slider {...settings1} ref={homeTopSliderNav}>
            <div><img src="https://www.navahang.com/images/2023/08/Azel-Soroode-Fareh-Iran-video-sld.jpg" alt='' />
            </div>
            <div><img
              src="https://www.navahang.com/images/2023/09/Evan-Band-Faramooshkar-Live-video-sld.jpg" alt='' />
            </div>

            <div><img src="https://www.navahang.com/images/2023/09/Erfan-Tahmasbi-To-sld.jpg" alt='' /></div>

            <div><img
              src="https://www.navahang.com/images/2023/09/Masoud-Sadeghloo-Akhare-Shab-Live-video-sld.jpg" alt='' />
            </div>

            <div><img src="https://www.navahang.com/images/2023/08/Amir-Zehi-O-Sole-Mio-video-sld.jpg" alt='' />
            </div>

            <div><img
              src="https://www.navahang.com/images/2023/08/Roozbeh-Bemani-Bad-Az-Raftan-video-sld.jpg" alt='' />
            </div>

            <div><img src="https://www.navahang.com/images/2023/08/Kamran-Delan-Leila-video-sld.jpg" alt='' /></div>

            <div><img
              src="https://www.navahang.com/images/2023/08/Shahriar-Shahi-Doost-Daramat-video-sld.jpg" alt='' />
            </div>

            <div><img src="https://www.navahang.com/images/2023/08/Saaro-Atel-o-Batel-video-sld.jpg" alt='' /></div>

            <div><img src="https://www.navahang.com/images/2023/08/Mahan-Bahram-Khan-Mese-To-video-sld.jpg" alt='' />
            </div>
          </Slider>
        </div>
      </section>
      <section className="ds ms table_section page_mainslider">
        <div className="container">
          <div className="row">
            <div className="endpart"></div>
            <div className="mp3s-page-part">
              <div className="row">
                <div className="col-md-6">
                  <div className='ipdchart'>
                    <h2>Trending Now</h2>
                    <div className="see-all-b">
                      <a href="">See All</a>
                    </div>
                  </div>
                  <ul id="top_week" className="navalist-a">
                    {
                      trendingSongs.map((item, index) => <li key={index}>
                        <a href="">
                          <img src={item.album_art}
                            alt='' />
                          <div className="info vertical-center-parent">
                            <div className="vertical-center">
                              <span className="artist-name">{item.artistName}</span>
                              <span className="song-name">{item.albumName}</span>
                            </div>
                          </div>
                        </a>
                        <div className="dur"><span>
                          <IconRectangleVertical size={15} stroke={1} />
                          {item.plays}
                          <IconPlus className='add-playlist' size={15} stroke={2} onClick={() => dispatch(addPlayList(date[0]))} />
                        </span></div>
                      </li>)
                    }
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className='ipdchart'>
                    <h2>Popular Episode</h2>
                    <div className="see-all-b">
                      <a href="">See All</a>
                    </div>
                  </div>
                  <ul id="top_week" className="navalist-a">
                  {
                      popularEpisode.map((item, index) => <li key={index}>
                      <a href="">
                        <img src={item.avatarURL}
                          alt='' />
                        <div className="info vertical-center-parent">
                          <div className="vertical-center">
                            <span className="artist-name">{item.name}</span>
                            <span className="song-name">{item.podcastTitle}</span>
                          </div>
                        </div>
                      </a>
                      <div className="dur"><span><IconRectangleVertical size={15} stroke={1} />
                        63.5M
                        <IconPlus className='add-playlist' size={15} stroke={2} /></span></div>
                    </li>)
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container titleb">
          <div className="row">
            <div className="endpart"></div>
            <div className="title-text">
              <h2 className="text-truncate">Playlists
              </h2>
              <div className="see-all-b">
                <a href="">See All</a>
              </div>
            </div>
            <div className="mp3s-page-part titleb new-albums-part">
              <div className="row row-10">
                <div className="sliders" id="sliders">
                  <div className="playlists slider">
                    <Slider {...settings2}>
                      <div>
                        <a href="https://www.navahang.com/playlist/hiphop-road/"><img
                          src="https://www.navahang.com/images/2023/08/200x200/HipHop-Road-Playlist-cvr.jpg"
                          alt="" />
                          <div className="clearfix"></div><span>HipHop Road</span>
                        </a>
                      </div>
                      <div>
                        <a href="https://www.navahang.com/playlist/traditional-playlist/"><img
                          src="https://www.navahang.com/images/2016/07/200x200/Traditional-playlist-cover-navahang.jpg"
                          alt="" />
                          <div className="clearfix"></div><span>Traditional</span>
                        </a>
                      </div>
                      <div>
                        <a href="https://www.navahang.com/playlist/persian-rap/"><img
                          src="https://www.navahang.com/images/2019/05/200x200/Persian-Rap-playlist-cvr.jpg"
                          alt="" />
                          <div className="clearfix"></div><span>Persian Rap</span>
                        </a>
                      </div>
                      <div>
                        <a href="https://www.navahang.com/playlist/north-road/"><img
                          src="https://www.navahang.com/images/2023/05/200x200/North-Road-playlist-cvr.jpg"
                          alt="" />
                          <div className="clearfix"></div><span>North Road</span>
                        </a>
                      </div>
                      <div>
                        <a href="https://www.navahang.com/playlist/sonati-iii/"><img
                          src="https://www.navahang.com/images/2019/03/200x200/Sonati-III-playlist-cvr.jpg"
                          alt="" />
                          <div className="clearfix"></div><span>Sonati III</span>
                        </a>
                      </div>
                      <div>
                        <a href="https://www.navahang.com/playlist/bargi-az-pop/"><img
                          src="https://www.navahang.com/images/2020/09/200x200/Bargi-Az-Pop-playlist-cvr.jpg"
                          alt="" />
                          <div className="clearfix"></div><span>Bargi Az Pop</span>
                        </a>
                      </div>
                      <div>
                        <a href="https://www.navahang.com/playlist/live-performances-ii/"><img
                          src="https://www.navahang.com/images/2019/03/200x200/Live-Performances-II-playlist-cvr.jpg"
                          alt="" />
                          <div className="clearfix"></div><span>Live Performances II</span>
                        </a>
                      </div>
                      <div>
                        <a href="https://www.navahang.com/playlist/bi-to/"><img
                          src="https://www.navahang.com/images/2023/03/200x200/Bi-To-Playlist-cvr.jpg"
                          alt="" />
                          <div className="clearfix"></div><span>Bi To</span>
                        </a>
                      </div>
                      <div>
                        <a href="https://www.navahang.com/playlist/masatan/"><img
                          src="https://www.navahang.com/images/2023/08/200x200/Masatan-Playlist-cvr.jpg"
                          alt="" />
                          <div className="clearfix"></div><span>Masatan</span>
                        </a>
                      </div>
                      <div>
                        <a href="https://www.navahang.com/playlist/top-pop/"><img
                          src="https://www.navahang.com/images/2018/10/200x200/Top-Pop-playlist-cvr.jpg"
                          alt="" />
                          <div className="clearfix"></div><span>Top Pop</span>
                        </a>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>

            <div className="endpart"></div>
            <div className="title-text">
              <h2 className="text-truncate">News Songs
              </h2>
              <div className="see-all-b">
                <a href="">See All</a>
              </div>
            </div>
            <div className="mp3s-page-part titleb">
              <div className="row row-10">
                <div className="col-sm-6 col-md-3 col-lg-2">
                  <div className="item-new">
                    <a href="">
                      <img src={require("assets/images/songs/Featured Songs/01.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Amir Tajik</strong></h3>
                        <h3 className="text-truncate">Nagoo Dire</h3>
                        <span className="text-truncate new-item-views">
                          <i className="fas fa-play-circle"></i>
                          10k
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-2">
                  <div className="item-new">
                    <a href="">
                      <img src={require("assets/images/songs/Featured Songs/02.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Behzad Parsae</strong></h3>
                        <h3 className="text-truncate">Dige Dire</h3>
                        <span className="text-truncate new-item-views">
                          <i className="fas fa-play-circle"></i>
                          5891
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-2">
                  <div className="item-new">
                    <a href="">
                      <img src={require("assets/images/songs/Featured Songs/03.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Ariyan Mousavi</strong></h3>
                        <h3 className="text-truncate">Bebar</h3>
                        <span className="text-truncate new-item-views">
                          <i className="fas fa-play-circle"></i>
                          4593
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-2">
                  <div className="item-new">
                    <a href="">
                      <img src={require("assets/images/songs/Featured Songs/04.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Gelareh Sheibani</strong></h3>
                        <h3 className="text-truncate">Negam Kon</h3>
                        <span className="text-truncate new-item-views">
                          <i className="fas fa-play-circle"></i>
                          81k
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-2">
                  <div className="item-new">
                    <a href="">
                      <img src={require("assets/images/songs/Featured Songs/05.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Hamid Askari</strong></h3>
                        <h3 className="text-truncate">Merci</h3>
                        <span className="text-truncate new-item-views">
                          <i className="fas fa-play-circle"></i>
                          41k
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-2">
                  <div className="item-new">
                    <a href="">
                      <img src={require("assets/images/songs/Featured Songs/06.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Erfan Tahmasbi</strong></h3>
                        <h3 className="text-truncate">To</h3>
                        <span className="text-truncate new-item-views">
                          <i className="fas fa-play-circle"></i>
                          235k
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-2">
                  <div className="item-new">
                    <a href="">
                      <img src={require("assets/images/songs/Featured Songs/07.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Rasam</strong></h3>
                        <h3 className="text-truncate">Rasam
                          Faslaye Sard</h3>
                        <span className="text-truncate new-item-views">
                          <i className="fas fa-play-circle"></i>
                          6074
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-2">
                  <div className="item-new">
                    <a href="">
                      <img src={require("assets/images/songs/Featured Songs/08.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Baran</strong></h3>
                        <h3 className="text-truncate">Eshtebah</h3>
                        <span className="text-truncate new-item-views">
                          <i className="fas fa-play-circle"></i>
                          21k
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-2">
                  <div className="item-new">
                    <a href="">
                      <img src={require("assets/images/songs/Featured Songs/09.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Rahman</strong></h3>
                        <h3 className="text-truncate">Khiali Nist</h3>
                        <span className="text-truncate new-item-views">
                          <i className="fas fa-play-circle"></i>
                          8171
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-2">
                  <div className="item-new">
                    <a href="">
                      <img src={require("assets/images/songs/Featured Songs/10.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Ay2kan</strong></h3>
                        <h3 className="text-truncate">Geleh</h3>
                        <span className="text-truncate new-item-views">
                          <i className="fas fa-play-circle"></i>
                          15k
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-2">
                  <div className="item-new">
                    <a href="">
                      <img src={require("assets/images/songs/Featured Songs/11.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Bardia Sadeghi</strong></h3>
                        <h3 className="text-truncate">Ghol Midam</h3>
                        <span className="text-truncate new-item-views">
                          <i className="fas fa-play-circle"></i>
                          8669
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-2">
                  <div className="item-new">
                    <a href="">
                      <img src={require("assets/images/songs/Featured Songs/12.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Nadia Kia</strong></h3>
                        <h3 className="text-truncate">Setare</h3>
                        <span className="text-truncate new-item-views">
                          <i className="fas fa-play-circle"></i>
                          13k
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="endpart"></div>
            <div className="title-text">
              <h2 className="text-truncate">News Video
              </h2>
              <div className="see-all-b">
                <a href="">See All</a>
              </div>
            </div>

            <div className="mp3s-page-part titleb new-albums-part">
              <div className="row row-10">
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="item-new-video">
                    <a href="https://www.navahang.com/music-video/evan-band-faramooshkar-live/">
                      <img className="lazy"
                        src="https://www.navahang.com/images/2023/09/600x338/Evan-Band-Faramooshkar-Live-video.jpg" alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Evan Band</strong></h3>
                        <h3 className="text-truncate">Faramooshkar (Live)</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="item-new-video">
                    <a
                      href="https://www.navahang.com/music-video/masoud-sadeghloo-akhare-shab-live/">
                      <img className="lazy"
                        src="https://www.navahang.com/images/2023/09/600x338/Masoud-Sadeghloo-Akhare-Shab-Live-video.jpg" alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Masoud Sadeghloo</strong></h3>
                        <h3 className="text-truncate">Akhare Shab (Live)</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="item-new-video">
                    <a href="https://www.navahang.com/music-video/azel-soroode-fareh-iran/">
                      <img className="lazy"
                        src="https://www.navahang.com/images/2023/08/600x338/Azel-Soroode-Fareh-Iran-video.jpg" alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Azel</strong></h3>
                        <h3 className="text-truncate">Soroode Fareh Iran</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="item-new-video">
                    <a href="https://www.navahang.com/music-video/amir-zehi-o-sole-mio/">
                      <img className="lazy"
                        src="https://www.navahang.com/images/2023/08/600x338/Amir-Zehi-O-Sole-Mio-video.jpg" alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Amir Zehi</strong></h3>
                        <h3 className="text-truncate">O Sole Mio</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="item-new-video">
                    <a href="https://www.navahang.com/music-video/roozbeh-bemani-bad-az-raftan/">
                      <img className="lazy"
                        src="https://www.navahang.com/images/2023/08/600x338/Roozbeh-Bemani-Bad-Az-Raftan-video.jpg" alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Roozbeh Bemani</strong></h3>
                        <h3 className="text-truncate">Bad Az Raftan</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="item-new-video">
                    <a href="https://www.navahang.com/music-video/saaro-atel-o-batel/">
                      <img className="lazy"
                        src="https://www.navahang.com/images/2023/08/600x338/Saaro-Atel-o-Batel-video.jpg" alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Saaro</strong></h3>
                        <h3 className="text-truncate">Atel o Batel</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="item-new-video">
                    <a href="https://www.navahang.com/music-video/shahriar-shahi-doost-daramat/">
                      <img className="lazy"
                        src="https://www.navahang.com/images/2023/08/600x338/Shahriar-Shahi-Doost-Daramat-video.jpg" alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Shahriar Shahi</strong></h3>
                        <h3 className="text-truncate">Doost Daramat</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="item-new-video">
                    <a href="https://www.navahang.com/music-video/alireza-ghorbani-mara-bebakhsh/">
                      <img className="lazy"
                        src="https://www.navahang.com/images/2023/08/600x338/Alireza-Ghorbani-Mara-Bebakhsh-video.jpg" alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Alireza Ghorbani</strong></h3>
                        <h3 className="text-truncate">Mara Bebakhsh</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="endpart"></div>
            <div className="title-text">
              <h2 className="text-truncate">Podcasts
              </h2>
              <div className="see-all-b">
                <a href="">See All</a>
              </div>
            </div>
            <div className="mp3s-page-part titleb new-albums-part">
              <div className="row row-10">
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="item-new item-new-album">
                    <a href="">
                      <img src={require("assets/images/songs/Navahang Records/01.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Parviz Khoshrazm</strong></h3>
                        <h3 className="text-truncate">Gole Kineh</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="item-new item-new-album">
                    <a href="">
                      <img src={require("assets/images/songs/Navahang Records/02.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Mohammad Fak.</strong></h3>
                        <h3 className="text-truncate">Adam Bash</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="item-new item-new-album">
                    <a href="">
                      <img src={require("assets/images/songs/Navahang Records/03.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Sepideh Jandaghi</strong></h3>
                        <h3 className="text-truncate">Negare Golozar</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="item-new item-new-album">
                    <a href="">
                      <img src={require("assets/images/songs/Navahang Records/04.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Massy Ahadi</strong></h3>
                        <h3 className="text-truncate">Kenaram Bash</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="item-new item-new-album">
                    <a href="">
                      <img src={require("assets/images/songs/Navahang Records/05.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Saeid Valipour</strong></h3>
                        <h3 className="text-truncate">Ta sobh</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="item-new item-new-album">
                    <a href="">
                      <img src={require("assets/images/songs/Navahang Records/06.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Amir Ansari</strong></h3>
                        <h3 className="text-truncate">Delam Khosh Nis</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="endpart"></div>
            <div className="title-text">
              <h2 className="text-truncate">News Artists
              </h2>
              <div className="see-all-b">
                <a href="">See All</a>
              </div>
            </div>

            <div className="mp3s-page-part titleb new-albums-part">
              <div className="row row-10">
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="item-new-artist">
                    <a href="https://www.navahang.com/mp3/saaro-atel-o-batel/">
                      <div className="position-relative fac">
                        <img className="lazy"
                          src="https://www.navahang.com/images/2023/08/320x320/Saaro-Atel-O-Batel.jpg" alt='' />
                        <div className="caption">
                          <h3 className="text-truncate">Saaro</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="item-new-artist">
                    <a href="https://www.navahang.com/mp3/amir-kian-zendegi/">
                      <div className="position-relative fac">
                        <img className="lazy"
                          src="https://www.navahang.com/images/2023/08/320x320/Amir-Kian-Zendegi.jpg" alt='' />
                        <div className="caption">
                          <h3 className="text-truncate">Amir Kian</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="item-new-artist">
                    <a href="https://www.navahang.com/mp3/mehdi-moazam-shame-khis/">
                      <div className="position-relative fac">
                        <img className="lazy"
                          src="https://www.navahang.com/images/2023/08/320x320/Mehdi-Moazam-Shame-Khis.jpg" alt='' />
                        <div className="caption">
                          <h3 className="text-truncate">Mehdi Moazam</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="item-new-artist">
                    <a href="https://www.navahang.com/mp3/hamid-sabzian-avar/">
                      <div className="position-relative fac">
                        <img className="lazy"
                          src="https://www.navahang.com/images/2023/08/320x320/Hamid-Sabzian-Avar.jpg" alt='' />
                        <div className="caption">
                          <h3 className="text-truncate">Hamid Sabzian</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="item-new-artist">
                    <a href="https://www.navahang.com/mp3/shila-ghasemi-ashke-ghoghnoos/">
                      <div className="position-relative fac">
                        <img className="lazy"
                          src="https://www.navahang.com/images/2023/08/320x320/Shila-Ghasemi-Ashke-Ghoghnoos.jpg" alt='' />
                        <div className="caption">
                          <h3 className="text-truncate">Shila Ghasemi</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="item-new-artist">
                    <a href="https://www.navahang.com/mp3/mostafa-abedini-darya/">
                      <div className="position-relative fac">
                        <img className="lazy"
                          src="https://www.navahang.com/images/2023/08/320x320/Mostafa-Abedini-Darya-cvr.jpg" alt='' />
                        <div className="caption">
                          <h3 className="text-truncate">Mostafa Abedini</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="endpart"></div>
            <div className="title-text">
              <h2 className="text-truncate">New Albums
              </h2>
              <div className="see-all-b">
                <a href="">See All</a>
              </div>
            </div>
            <div className="mp3s-page-part titleb new-albums-part">
              <div className="row row-10">
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="item-new item-new-album">
                    <a href="">
                      <img src={require("assets/images/songs/New Albums/01.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Hadi Ahmadi</strong></h3>
                        <h3 className="text-truncate">Faramoosh</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="item-new item-new-album">
                    <a href="">
                      <img src={require("assets/images/songs/New Albums/02.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Mohammad Unlimited</strong></h3>
                        <h3 className="text-truncate">
                          urn Up The Volume (Vol.04)</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="item-new item-new-album">
                    <a href="">
                      <img src={require("assets/images/songs/New Albums/03.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Alireza Gharaei Manesh</strong></h3>
                        <h3 className="text-truncate">live at Azadi Towe</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="item-new item-new-album">
                    <a href="">
                      <img src={require("assets/images/songs/New Albums/04.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Mansou</strong></h3>
                        <h3 className="text-truncate">Miras</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="item-new item-new-album">
                    <a href="">
                      <img src={require("assets/images/songs/New Albums/05.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Masih</strong></h3>
                        <h3 className="text-truncate">Sang Kaghaz Gheychi (EP)</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="item-new item-new-album">
                    <a href="">
                      <img src={require("assets/images/songs/New Albums/06.jpeg")}
                        alt='' />
                      <div className="caption">
                        <h3 className="text-truncate"><strong>Emad Talebzadeh</strong></h3>
                        <h3 className="text-truncate">Eshgh Lazen</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
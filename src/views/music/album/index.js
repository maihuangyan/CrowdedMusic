import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';

export default function Music() {

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <section className="page_breadcrumbs ls section_padding_top_25 section_padding_bottom_25 table_section table_section_md">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-center text-md-left">
              <h2 className="small highlight">Music Albums</h2>
            </div>
            <div className="col-md-4 text-center text-md-right">
              <ol className="breadcrumb greylinks">
                <li> <a href="/">
                  Homepage
                </a> </li>
                <li> <a href="#">Music</a> </li>
                <li className="active">Music Albums</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="ds ms page_portfolio section_padding_top_150 section_padding_bottom_100 columns_margin_bottom_40">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="vertical-item slide-media text-center loop-color">
                <div className="item-media-wrap"> <img src={require("assets/images/albums/cd.png")} alt="" />
                  <div className="item-media back-media"> <img src={require("assets/images/albums/cd.png")} alt="" /> </div>
                  <div className="item-media"> <img src={require("assets/images/albums/01.jpg")} alt="" />
                    <div className="media-links no-overlay">
                      <div className="links-wrap"> <a href="single-album.html" className="p-link"></a> </div>
                      <div className="bottom-links"> <a href="https://play.google.com/store/music" target="blanck">
                        <img src={require("assets/images/google-play.png")} alt="" />
                      </a> <a href="https://itunes.apple.com/us/genre/music" target="blanck">
                          <img src={require("assets/images/app-store.png")} alt="" />
                        </a> </div>
                    </div>
                  </div>
                </div>
                <div className="item-content topmargin_25">
                  <div className="star-rating" title="Rated 4.0 out of 5"> <span style={{ width: "80%" }}>
                    <strong className="rating">4.0</strong> out of 5
                  </span> </div>
                  <h4 className="entry-title topmargin_5"> <a href="single-album.html">"Dirty Vibes"</a> </h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="vertical-item slide-media text-center loop-color">
                <div className="item-media-wrap"> <img src={require("assets/images/albums/cd.png")} alt="" />
                  <div className="item-media back-media"> <img src={require("assets/images/albums/cd.png")} alt="" /> </div>
                  <div className="item-media"> <img src={require("assets/images/albums/02.jpg")} alt="" />
                    <div className="media-links no-overlay">
                      <div className="links-wrap"> <a href="single-album.html" className="p-link"></a> </div>
                      <div className="bottom-links"> <a href="https://play.google.com/store/music" target="blanck">
                        <img src={require("assets/images/google-play.png")} alt="" />
                      </a> <a href="https://itunes.apple.com/us/genre/music" target="blanck">
                          <img src={require("assets/images/app-store.png")} alt="" />
                        </a> </div>
                    </div>
                  </div>
                </div>
                <div className="item-content topmargin_25">
                  <div className="star-rating" title="Rated 4.0 out of 5"> <span style={{ width: "80%" }}>
                    <strong className="rating">4.0</strong> out of 5
                  </span> </div>
                  <h4 className="entry-title topmargin_5"> <a href="single-album.html">"Welcome to My Hood"</a> </h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="vertical-item slide-media text-center loop-color">
                <div className="item-media-wrap"> <img src={require("assets/images/albums/cd.png")} alt="" />
                  <div className="item-media back-media"> <img src={require("assets/images/albums/cd.png")} alt="" /> </div>
                  <div className="item-media"> <img src={require("assets/images/albums/03.jpg")} alt="" />
                    <div className="media-links no-overlay">
                      <div className="links-wrap"> <a href="single-album.html" className="p-link"></a> </div>
                      <div className="bottom-links"> <a href="https://play.google.com/store/music" target="blanck">
                        <img src={require("assets/images/google-play.png")} alt="" />
                      </a> <a href="https://itunes.apple.com/us/genre/music" target="blanck">
                          <img src={require("assets/images/app-store.png")} alt="" />
                        </a> </div>
                    </div>
                  </div>
                </div>
                <div className="item-content topmargin_25">
                  <div className="star-rating" title="Rated 5.0 out of 5"> <span style={{ width: "100%" }}>
                    <strong className="rating">5.0</strong> out of 5
                  </span> </div>
                  <h4 className="entry-title topmargin_5"> <a href="single-album.html">"Bubble Butt"</a> </h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="vertical-item slide-media text-center loop-color">
                <div className="item-media-wrap"> <img src={require("assets/images/albums/cd.png")} alt="" />
                  <div className="item-media back-media"> <img src={require("assets/images/albums/cd.png")} alt="" /> </div>
                  <div className="item-media"> <img src={require("assets/images/albums/04.jpg")} alt="" />
                    <div className="media-links no-overlay">
                      <div className="links-wrap"> <a href="single-album.html" className="p-link"></a> </div>
                      <div className="bottom-links"> <a href="https://play.google.com/store/music" target="blanck">
                        <img src={require("assets/images/google-play.png")} alt="" />
                      </a> <a href="https://itunes.apple.com/us/genre/music" target="blanck">
                          <img src={require("assets/images/app-store.png")} alt="" />
                        </a> </div>
                    </div>
                  </div>
                </div>
                <div className="item-content topmargin_25">
                  <div className="star-rating" title="Rated 4.0 out of 5"> <span style={{ width: "80%" }}>
                    <strong className="rating">4.0</strong> out of 5
                  </span> </div>
                  <h4 className="entry-title topmargin_5"> <a href="single-album.html">"Club Goin' Up on a day"</a> </h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="vertical-item slide-media text-center loop-color">
                <div className="item-media-wrap"> <img src={require("assets/images/albums/cd.png")} alt="" />
                  <div className="item-media back-media"> <img src={require("assets/images/albums/cd.png")} alt="" /> </div>
                  <div className="item-media"> <img src={require("assets/images/albums/05.jpg")} alt="" />
                    <div className="media-links no-overlay">
                      <div className="links-wrap"> <a href="single-album.html" className="p-link"></a> </div>
                      <div className="bottom-links"> <a href="https://play.google.com/store/music" target="blanck">
                        <img src={require("assets/images/google-play.png")} alt="" />
                      </a> <a href="https://itunes.apple.com/us/genre/music" target="blanck">
                          <img src={require("assets/images/app-store.png")} alt="" />
                        </a> </div>
                    </div>
                  </div>
                </div>
                <div className="item-content topmargin_25">
                  <div className="star-rating" title="Rated 3.0 out of 5"> <span style={{ width: "60%" }}>
                    <strong className="rating">3.0</strong> out of 5
                  </span> </div>
                  <h4 className="entry-title topmargin_5"> <a href="single-album.html">"How Deep Is Your Love”</a> </h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="vertical-item slide-media text-center loop-color">
                <div className="item-media-wrap"> <img src={require("assets/images/albums/cd.png")} alt="" />
                  <div className="item-media back-media"> <img src={require("assets/images/albums/cd.png")} alt="" /> </div>
                  <div className="item-media"> <img src={require("assets/images/albums/06.jpg")} alt="" />
                    <div className="media-links no-overlay">
                      <div className="links-wrap"> <a href="single-album.html" className="p-link"></a> </div>
                      <div className="bottom-links"> <a href="https://play.google.com/store/music" target="blanck">
                        <img src={require("assets/images/google-play.png")} alt="" />
                      </a> <a href="https://itunes.apple.com/us/genre/music" target="blanck">
                          <img src={require("assets/images/app-store.png")} alt="" />
                        </a> </div>
                    </div>
                  </div>
                </div>
                <div className="item-content topmargin_25">
                  <div className="star-rating" title="Rated 4.5 out of 5"> <span style={{ width: "60%" }}>
                    <strong className="rating">4.5</strong> out of 5
                  </span> </div>
                  <h4 className="entry-title topmargin_5"> <a href="single-album.html">"After Life"</a> </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
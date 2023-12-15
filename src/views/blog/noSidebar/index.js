import React from 'react'
import status_bg from "assets/images/status_bg.jpg"
import quote_bg from "assets/images/quote_bg.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const noSidebar = [
  {
    id: 1,
    image: <img src={require("assets/images/gallery/10.jpg")} alt="" />,
    h1: "Ingroducing my new song",
    h2: "Dance Yourself",
  },
  {
    id: 2,
    image: <img src={require("assets/images/gallery/08.jpg")} alt="" />,
    h1: "Ingroducing my new song",
    h2: "Dance Yourself",
  },
  {
    id: 3,
    image: <img src={require("assets/images/gallery/04.jpg")} alt="" />,
    h1: "Ingroducing my new song",
    h2: "Dance Yourself",
  }]

export default function NoSidebar() {

  const settings = {
    className: "slide",
    fade: true,
    accessibility: true,
    adaptiveHeight: true,
    arrows: true,
    draggable: false,
    dots: true,
    beforeChange: (prev) => {
      console.log(prev, "6666")
    }
  };
  return (
    <div className='noSidebar'>
      <section className="page_breadcrumbs ls section_padding_top_25 section_padding_bottom_25 table_section table_section_md">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-center text-md-left">
              <h2 className="small highlight">No Sidebar</h2>
            </div>
            <div className="col-md-4 text-center text-md-right">
              <ol className="breadcrumb greylinks">
                <li> <a href="/">
                  Home
                </a> </li>
                <li> <a href="#">Blog</a> </li>
                <li className="active">No Sidebar</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="ds ms section_padding_top_150 section_padding_bottom_130 columns_padding_25">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Slider {...settings}>
                {
                  noSidebar.map(item => <div key={item.id} style={{ position: "relative" }}>
                    {item.image}
                    <div className='context'>
                      <h3 className='animate__animated animate__slideInDown'>{item.h1}</h3>
                      <h2 className='animate__animated animate__slideInDown'>{item.h2}</h2>
                    </div>
                  </div>)
                }
              </Slider>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 col-md-8 col-lg-8">
              <article className="vertical-item content-padding big-padding with_background rounded overflow_hidden post format-standard">
                <div className="item-media entry-thumbnail"> <img src={require("assets/images/gallery/12.jpg")} alt="" />
                  <div className="media-links"> <a href="blog-single-right.html" className="abs-link"></a> </div>
                </div>
                <div className="item-content">
                  <header className="entry-header">
                    <div className="entry-meta small-text no-spacing content-justify"> <span className="greylinks">
                      <a href="blog-single-right.html">
                        <time dateTime="2017-10-03T08:50:40+00:00">
                          23 sept 2017
                        </time>
                      </a>
                    </span> <span className="highlightlinks">
                        <a href="blog-right.html">
                          music
                        </a>
                      </span> </div>
                    <h4 className="entry-title"> <a href="blog-single-right.html">Post with large image</a> </h4>
                  </header>
                  <div className="entry-content">
                    <p>Short ribs tenderloin corned beef pork. Picanha filet mignon cupim pastrami flank turkey jowl pork pork belly biltong venison sausage leberkas strip steak chicken. Pork chop pig prosciutto beef ribs ribeye brisket doner corned beef cupim frankfurter.
                      Pancetta shoulder jerky, tenderloin cupim tail ribeye bresaola short ribs pig frankfurter doner ground round andouille. Pig sausage picanha, cupim strip steak jowl alcatra turducken.</p>
                  </div>
                </div>
              </article>
              <article className="post format-small-image">
                <div className="side-item side-md content-padding big-padding with_background rounded overflow_hidden">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="item-media entry-thumbnail"> <img src={require("assets/images/gallery-square/04.jpg")} alt="" />
                        <div className="media-links"> <a href="blog-single-right.html" className="abs-link"></a> </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="item-content">
                        <header className="entry-header">
                          <div className="entry-meta small-text no-spacing content-justify"> <span className="greylinks">
                            <a href="blog-single-right.html">
                              <time dateTime="2017-10-03T08:50:40+00:00">
                                23 sept 2017
                              </time>
                            </a>
                          </span> <span className="highlightlinks">
                              <a href="blog-right.html">
                                songs
                              </a>
                            </span> </div>
                          <h4 className="entry-title"> <a href="blog-single-right.html" rel="bookmark">Post With Small Image</a> </h4>
                        </header>
                        <div className="entry-content">
                          <p>Pancetta shoulder jerky, tenderloin cupim tail ribeye bresaola short ribs pig frankfurter doner ground round andouille.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              /              <article className="vertical-item content-padding big-padding with_background rounded overflow_hidden post format-gallery">
                <div className="item-media entry-thumbnail">
                  <div className="flexslider" data-dots="true" data-nav="false">
                    <ul className="slides">
                      <li> <img src={require("assets/images/gallery/03.jpg")} alt="" /> </li>
                      <li> <img src={require("assets/images/gallery/06.jpg")} alt="" /> </li>
                      <li> <img src={require("assets/images/gallery/07.jpg")} alt="" /> </li>
                    </ul>
                  </div>
                </div>
                <div className="item-content entry-content">
                  <header className="entry-header">
                    <div className="entry-meta small-text no-spacing content-justify"> <span className="greylinks">
                      <a href="blog-single-right.html">
                        <time dateTime="2017-10-03T08:50:40+00:00">
                          23 sept 2017
                        </time>
                      </a>
                    </span> <span className="highlightlinks">
                        <a href="blog-right.html">
                          news
                        </a>
                      </span> </div>
                    <h4 className="entry-title"> <a href="blog-single-right.html" rel="bookmark">Post With Carousel</a> </h4>
                  </header>
                  <div className="entry-content">
                    <p>Duis autem eumre dolor hendrerit vulputate veliesse molestie consequat vel illum dolore at vero eros et accumsan et iusto odio dignissim. Qui blandit praesent luptatum zzril delenit augue duis dolore feugait nulla facilisi. Lorem ipsum dolor
                      sit amet, consectetuer adipiscing elitsed diam nonummy nibh euismod tincidunt laoreet dolore magna aliquam erat volutpat.</p>
                  </div>
                </div>
              </article>
              <article className="vertical-item content-padding big-padding with_background rounded overflow_hidden post format-video">
                <div className="item-media entry-thumbnail">
                  <div className="embed-responsive embed-responsive-3by2"> <a href="http://player.vimeo.com/video/1084537" className="embed-placeholder">
                    <img src={require("assets/images/gallery/02.jpg")} alt="" />
                  </a> </div>
                </div>
                <div className="item-content entry-content">
                  <header className="entry-header">
                    <div className="entry-meta small-text no-spacing content-justify"> <span className="greylinks">
                      <a href="blog-single-right.html">
                        <time dateTime="2017-10-03T08:50:40+00:00">
                          23 sept 2017
                        </time>
                      </a>
                    </span> <span className="highlightlinks">
                        <a href="blog-right.html">
                          concerts
                        </a>
                      </span> </div>
                    <h4 className="entry-title"> <a href="blog-single-video-right.html" rel="bookmark">Post With Vimeo Video</a> </h4>
                  </header>
                  <div className="entry-content">
                    <p>Qui blandit praesent luptatum zzril delenit augue duis dolore feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elitsed diam nonummy nibh euismod tincidunt laoreet dolore magna aliquam erat volutpat.</p>
                  </div>
                </div>
              </article>
              <article className="vertical-item content-padding big-padding with_background rounded overflow_hidden post format-video">
                <div className="item-media entry-thumbnail">
                  <div className="embed-responsive embed-responsive-3by2 ">
                    <a href="https://www.youtube.com/embed/mcixldqDIEQ" className="embed-placeholder">
                      <img src={require("assets/images/gallery/05.jpg")} alt="" />
                    </a> </div>
                  {/* <iframe width="1000" height="460" src="https://www.youtube.com/embed/mcixldqDIEQ" allowfullscreen></iframe> */}
                </div>
                <div className="item-content entry-content">
                  <header className="entry-header">
                    <div className="entry-meta small-text no-spacing content-justify"> <span className="greylinks">
                      <a href="blog-single-right.html">
                        <time dateTime="2017-10-03T08:50:40+00:00">
                          23 sept 2017
                        </time>
                      </a>
                    </span> <span className="highlightlinks">
                        <a href="blog-right.html">
                          concerts
                        </a>
                      </span> </div>
                    <h4 className="entry-title"> <a href="blog-single-video-right.html" rel="bookmark">Post With Youtube Video</a> </h4>
                  </header>
                  <div className="entry-content">
                    <p>Duis autem eumre dolor hendrerit vulputate veliesse molestie consequat vel illum dolore at vero eros et accumsan et iusto odio dignissim.</p>
                  </div>
                </div>
              </article>
              <article className="vertical-item content-padding big-padding with_background rounded overflow_hidden post format-aside ">
                <div className="item-content entry-content">
                  <header className="entry-header">
                    <div className="entry-meta small-text no-spacing content-justify"> <span className="greylinks">
                      <a href="blog-single-right.html">
                        <time dateTime="2017-10-03T08:50:40+00:00">
                          23 sept 2017
                        </time>
                      </a>
                    </span> <span className="highlightlinks">
                        <a href="blog-right.html">
                          news
                        </a>
                      </span> </div>
                    <h4 className="entry-title"> <a href="blog-single-right.html" rel="bookmark">Post Format: Aside</a> </h4>
                  </header>
                  <div className="entry-content">
                    <p>“I never tried to prove nothing, just wanted to give a good show. My life has always been my music, it's always come first, but the music ain't worth nothing if you can't lay it on the public. The main thing is to live for that audience, 'cause
                      what you're there for is to please the people.”</p>
                  </div>
                </div>
              </article>
              <article className="vertical-item content-padding big-padding text-center ds bg_teaser after_cover darkgrey_bg post format-status rounded overflow_hidden" style={{ backgroundImage: `url(${status_bg})` }}> <img src={require("assets/images/status_bg.jpg")} alt="" />
                <div className="item-content entry-content">
                  <header className="entry-header"> <img alt="" src={require("assets/images/faces/03.jpg")} className="avatar avatar-96 photo avatar-default round" />
                    <div className="topmargin_20 small-text no-spacing highlightlinks"> <a href="blog-right.html">
                      music
                    </a> </div>
                    <div className="small-text no-spacing darklinks topmargin_10"> <a href="blog-single-right.html">
                      <time dateTime="2017-10-03T08:50:40+00:00">
                        23 sept 2017
                      </time>
                    </a> </div>
                    <h4 className="entry-title"> <a href="blog-single-right.html" rel="bookmark">Post Format: Status</a> </h4>
                  </header>
                </div>
              </article>
              <article className="vertical-item content-padding big-padding with_background rounded overflow_hidden post format-link">
                <div className="item-content entry-content">
                  <header className="entry-header">
                    <div className="entry-meta small-text no-spacing content-justify"> <span className="greylinks">
                      <a href="blog-single-right.html">
                        <time dateTime="2017-10-03T08:50:40+00:00">
                          23 sept 2017
                        </time>
                      </a>
                    </span> <span className="highlightlinks">
                        <a href="blog-right.html">
                          news
                        </a>
                      </span> </div>
                    <h4 className="entry-title"> <a href="blog-single-right.html" rel="bookmark">Post Format: Link</a> </h4>
                  </header>
                </div>
              </article>
              <article className="vertical-item post content-padding big-padding with_background rounded overflow_hidden format-image">
                <div className="item-media entry-thumbnail"> <img src={require("assets/images/gallery/06.jpg")} alt="" />
                  <div className="media-links"> <a href="blog-single-right.html" className="abs-link"></a> </div>
                </div>
                <div className="item-content entry-content">
                  <header className="entry-header">
                    <div className="entry-meta small-text no-spacing content-justify"> <span className="greylinks">
                      <a href="blog-single-right.html">
                        <time dateTime="2017-10-03T08:50:40+00:00">
                          23 sept 2017
                        </time>
                      </a>
                    </span> <span className="highlightlinks">
                        <a href="blog-right.html">
                          songs
                        </a>
                      </span> </div>
                    <h4 className="entry-title"> <a href="blog-single-right.html" rel="bookmark">Post format: Image</a> </h4>
                  </header>
                </div>
              </article>
              <article className="vertical-item content-padding big-padding ds bg_teaser after_cover darkgrey_bg post format-quote rounded overflow_hidden" style={{ backgroundImage: `url(${quote_bg})` }}> <img src={require("assets/images/quote_bg.jpg")} alt="" />
                <div className="item-content entry-content text-center">
                  <header className="entry-header">
                    <div className="entry-meta small-text no-spacing content-justify"> <span className="greylinks">
                      <a href="blog-single-right.html">
                        <time dateTime="2017-10-03T08:50:40+00:00">
                          23 sept 2017
                        </time>
                      </a>
                    </span> <span className="highlightlinks">
                        <a href="blog-right.html">
                          news
                        </a>
                      </span> </div>
                  </header>
                  <div className="entry-content">
                    <blockquote> Ham hock kevin salami biltong, shoulder kielbasa pork belly jowl swine pig. Swine beef ribs sausage pancetta shankle meatball turducken pastrami rump. Turducken jerky ham shank, pork belly short ribs porchetta.
                      <div className="item-meta">
                        <h5 className="highlight">Christian Caldwell</h5>
                        <p className="small-text grey">Anne`s Producer</p>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </article>
              <article className="vertical-item content-padding big-padding with_background rounded overflow_hidden post format-chat">
                <div className="item-media"> <img src={require("assets/images/gallery/04.jpg")} alt="" /> </div>
                <div className="item-content entry-content">
                  <header className="entry-header">
                    <div className="entry-meta small-text no-spacing content-justify"> <span className="greylinks">
                      <a href="blog-single-right.html">
                        <time dateTime="2017-10-03T08:50:40+00:00">
                          23 sept 2017
                        </time>
                      </a>
                    </span> <span className="highlightlinks">
                        <a href="blog-right.html">
                          music
                        </a>
                      </span> </div>
                    <h4 className="entry-title "> <a href="blog-single-right.html" rel="bookmark">Post Format: Chat</a> </h4>
                  </header>
                  <div className="entry-content">
                    <p>Abbott: Strange as it may seem, they give ball players nowadays very peculiar names.</p>
                    <p>Costello: Funny names?</p>
                    <p>Abbott: Nicknames, nicknames. Now, on the St. Louis team we have Who's on first, What's on second, I Don't Know is on third–</p>
                    <p>Costello: That's what I want to find out. I want you to tell me the names of the fellows on the St. Louis team.</p>
                    <p>Abbott: I'm telling you. Who's on first, What's on second, I Don't Know is on third–</p>
                    <p>Costello: You know the fellows' names?</p>
                    <p>Abbott: Yes.</p>
                  </div>
                </div>
              </article>
              <div className="text-center topmargin_60">
                <ul className="pagination">
                  <li><a href="#"><span className="sr-only">Prev</span><i className="fa fa-angle-left" aria-hidden="true"></i></a></li>
                  <li className="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#"><span className="sr-only">Next</span><i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
            <aside className="col-sm-5 col-md-4 col-lg-4">
              <div className="widget widget_apsc_widget">
                <h3 className="widget-title">Get In Touch</h3>
                <div className="apsc-icons-wrapper clearfix apsc-theme-4">
                  <div className="apsc-each-profile">
                    <a className="apsc-facebook-icon clearfix" href="#">
                      <div className="apsc-inner-block"> <span className="social-icon">
                        <i className="fa fa-facebook apsc-facebook"></i>
                        <span className="media-name">Facebook</span> </span> <span className="apsc-count">9.8K</span><span className="apsc-media-type">Fans</span> </div>
                    </a>
                  </div>
                  <div className="apsc-each-profile">
                    <a className="apsc-twitter-icon clearfix" href="#">
                      <div className="apsc-inner-block"> <span className="social-icon">
                        <i className="fa fa-twitter apsc-twitter"></i>
                        <span className="media-name">Twitter</span> </span> <span className="apsc-count">4.9K</span><span className="apsc-media-type">Followers</span> </div>
                    </a>
                  </div>
                  <div className="apsc-each-profile">
                    <a className="apsc-google-plus-icon clearfix" href="#">
                      <div className="apsc-inner-block"> <span className="social-icon">
                        <i className="apsc-googlePlus fa fa-google-plus"></i>
                        <span className="media-name">google+</span> </span> <span className="apsc-count">10.1M</span><span className="apsc-media-type">Followers</span> </div>
                    </a>
                  </div>
                  <div className="apsc-each-profile">
                    <a className="apsc-instagram-icon clearfix" href="#">
                      <div className="apsc-inner-block"> <span className="social-icon">
                        <i className="apsc-instagram fa fa-instagram"></i>
                        <span className="media-name">Instagram</span> </span> <span className="apsc-count">4</span><span className="apsc-media-type">Followers</span> </div>
                    </a>
                  </div>
                  <div className="apsc-each-profile">
                    <a className="apsc-youtube-icon clearfix" href="#">
                      <div className="apsc-inner-block"> <span className="social-icon">
                        <i className="apsc-youtube fa fa-youtube"></i>
                        <span className="media-name">Youtube</span> </span> <span className="apsc-count">2.2K</span><span className="apsc-media-type">Subscriber</span> </div>
                    </a>
                  </div>
                  <div className="apsc-each-profile">
                    <a className="apsc-soundcloud-icon clearfix" href="#">
                      <div className="apsc-inner-block"> <span className="social-icon">
                        <i className="apsc-soundcloud fa fa-soundcloud"></i>
                        <span className="media-name">Soundcloud</span> </span> <span className="apsc-count">8K</span><span className="apsc-media-type">Followers</span> </div>
                    </a>
                  </div>
                  <div className="apsc-each-profile">
                    <a className="apsc-dribble-icon clearfix" href="#">
                      <div className="apsc-inner-block"> <span className="social-icon">
                        <i className="apsc-dribbble fa fa-dribbble"></i>
                        <span className="media-name">dribble</span> </span> <span className="apsc-count">0</span><span className="apsc-media-type">Followers</span> </div>
                    </a>
                  </div>
                  <div className="apsc-each-profile">
                    <a className="apsc-edit-icon clearfix" href="#">
                      <div className="apsc-inner-block"> <span className="social-icon">
                        <i className="apsc-posts fa fa-edit"></i>
                        <span className="media-name">Post</span> </span> <span className="apsc-count">1</span><span className="apsc-media-type">Post</span> </div>
                    </a>
                  </div>
                  <div className="apsc-each-profile">
                    <a className="apsc-comment-icon clearfix" href="#">
                      <div className="apsc-inner-block"> <span className="social-icon">
                        <i className="apsc-comments fa fa-comments"></i>
                        <span className="media-name">Comment</span> </span> <span className="apsc-count">0</span><span className="apsc-media-type">Comments</span> </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="widget widget_mailchimp">
                <h3 className="widget-title">Newsletter</h3>
                <form className="signup" action="http://html.modernwebtemplates.com/singer/" method="get">
                  <div className="form-group-wrap">
                    <div className="form-group"> <label htmlFor="mailchimp-aside" className="sr-only">Enter your email here</label> <input name="email" type="email" id="mailchimp-aside" className="mailchimp_email form-control" placeholder="Your Email Address" /> </div> <button type="submit" className="theme_button color1 no_bg_button">Subscribe</button>										</div>
                  <p>Enter Email here to be updated. We promise not to send you spam!</p>
                  <div className="response"></div>
                </form>
              </div>
              <div className="widget widget_instagram">
                <h3 className="widget-title">Instagram</h3>
                <div className="instafeed"> </div>
              </div>
              <div className="widget widget_categories">
                <h3 className="widget-title">Categories</h3> <select name="cat" className="wrap-select-group">
                  <option value="1" defaultValue="1" selected="1" disabled="">Select Category</option>
                  <option value="1">All</option>
                  <option value="2">News</option>
                  <option value="3">Music</option>
                  <option value="4">Songs</option>
                  <option value="5">Concerts</option>
                </select> </div>
              <div className="widget widget_recent_posts">
                <h3 className="widget-title">Recent Posts</h3>
                <ul className="media-list">
                  <li className="media loop-color">
                    <div className="media-left media-middle"> <img src="images/recent_post1.jpg" alt="" /> </div>
                    <div className="media-body media-middle">
                      <h4 className="entry-title"> <a href="blog-single-left.html">Ribeye pork chop rump beef ground round</a> </h4>
                      <div className="small-text highlightlinks hover-color2"> <a href="blog-single-right.html">
                        <time dateTime="2017-10-03T08:50:40+00:00">
                          23 sept 2017
                        </time>
                      </a> </div>
                    </div>
                  </li>
                  <li className="media loop-color">
                    <div className="media-left media-middle"> <img src="images/recent_post2.jpg" alt="" /> </div>
                    <div className="media-body media-middle">
                      <h4 className="entry-title"> <a href="blog-single-left.html">Andouille tenderloin ham hock</a> </h4>
                      <div className="small-text highlightlinks"> <a href="blog-single-right.html">
                        <time dateTime="2017-10-03T08:50:40+00:00">
                          23 sept 2017
                        </time>
                      </a> </div>
                    </div>
                  </li>
                  <li className="media loop-color">
                    <div className="media-left media-middle"> <img src="images/recent_post3.jpg" alt="" /> </div>
                    <div className="media-body media-middle">
                      <h4 className="entry-title"> <a href="blog-single-left.html">spare ribs jerky ham prosciut Shankle ball tip</a> </h4>
                      <div className="small-text highlightlinks"> <a href="blog-single-right.html">
                        <time dateTime="2017-10-03T08:50:40+00:00">
                          23 sept 2017
                        </time>
                      </a> </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="widget widget_archive">
                <h3 className="widget-title">Archives</h3> <select name="arch" className="wrap-select-group">
                  <option value="1" defaultValue="1" selected="" disabled="">Select Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select> </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

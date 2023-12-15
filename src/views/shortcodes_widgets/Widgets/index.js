import React from 'react'

export default function index() {
  return (
    <>
      <section className="page_breadcrumbs ls section_padding_top_25 section_padding_bottom_25 table_section table_section_md">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-center text-md-left">
              <h2 className="small highlight">Widgets</h2>
            </div>
            <div className="col-md-4 text-center text-md-right">
              <ol className="breadcrumb greylinks">
                <li> <a href="/">
                  Home
                </a> </li>
                <li> <a href="#">Features</a> </li>
                <li className="active">Widgets</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="ds ms section_padding_top_100 section_padding_bottom_100 columns_padding_25">
        <div className="container">
          <div className="row">
            <aside className="col-sm-5 col-md-4 col-lg-4">
              <div className="widget widget_popular_entries">
                <h3 className="widget-title poppins">Popular</h3>
                <ul className="media-list darklinks">
                  <li className="media"> <a className="media-left" href="blog-single-right.html">
                    <img src={require("assets/images/recent_post1.jpg")} alt="" />
                  </a>
                    <div className="media-body">
                      <p> <a href="blog-single-right.html">Eod tempor invidunt labore dolore magna</a> </p>
                      <div className="star-rating" title="Rated 5 out of 5"> <span style={{width:"100%"}}>
                        <strong className="rating">5</strong> out of 5
                      </span> </div>
                    </div>
                  </li>
                  <li className="media"> <a className="media-left" href="blog-single-right.html">
                    <img src={require("assets/images/recent_post2.jpg")} alt="" />
                  </a>
                    <div className="media-body">
                      <p> <a href="blog-single-right.html">Aliquyam erat, sed voluptua vero eos </a> </p>
                      <div className="star-rating" title="Rated 4.0 out of 5"> <span style={{width:"60%"}}>
                        <strong className="rating">4</strong> out of 5
                      </span> </div>
                    </div>
                  </li>
                  <li className="media"> <a className="media-left" href="blog-single-right.html">
                    <img src={require("assets/images/recent_post1.jpg")} alt="" />
                  </a>
                    <div className="media-body">
                      <p> <a href="blog-single-right.html">Et justo duo dolores et ea rebum</a> </p>
                      <div className="star-rating" title="Rated 4.50 out of 5"> <span style={{width:"80%"}}>
                        <strong className="rating">4.50</strong> out of 5
                      </span> </div>
                    </div>
                  </li>
                  <li className="media"> <a className="media-left" href="blog-single-right.html">
                    <img src={require("assets/images/recent_post2.jpg")} alt="" />
                  </a>
                    <div className="media-body">
                      <p> <a href="blog-single-right.html">Stetclita kasd gubergren no sea takimata</a> </p>
                      <div className="star-rating" title="Rated 3.00 out of 5"> <span style={{width:"40%"}}>
                        <strong className="rating">3</strong> out of 5
                      </span> </div>
                    </div>
                  </li>
                  <li className="media"> <a className="media-left" href="blog-single-right.html">
                    <img src={require("assets/images/recent_post1.jpg")} alt="" />
                  </a>
                    <div className="media-body">
                      <p> <a href="blog-single-right.html">Lorem ipsum dolor sitmet  amet consetetur </a> </p>
                      <div className="star-rating" title="Rated 4.50 out of 5"> <span style={{width:"90%"}}>
                        <strong className="rating">4.50</strong> out of 5
                      </span> </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="widget widget_recent_posts">
                <h3 className="widget-title poppins">Recent Posts</h3>
                <ul className="media-list">
                  <li className="media loop-color">
                    <div className="media-left media-middle"> <img src={require("assets/images/recent_post1.jpg")} alt="" /> </div>
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
                    <div className="media-left media-middle"> <img src={require("assets/images/recent_post2.jpg")} alt="" /> </div>
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
                    <div className="media-left media-middle"> <img src={require("assets/images/recent_post3.jpg")} alt="" /> </div>
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
                <h3 className="widget-title poppins">Archive widget</h3> <select name="arch" className="wrap-select-group">
                  <option value="-1" data-default="" selected="" disabled="">Select Month</option>
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
              <div className="widget widget_recent_comments">
                <h3 className="widget-title poppins">Recent Comments</h3>
                <ul className="highlightlinks">
                  <li>
                    <p>Flank alcatra beef, brisket ham hock biltong shoulder short loin rump cupim.</p> <a href="blog-single-right.html#comments" rel="external nofollow" className="url small-text weight-black">Genevieve Owens</a> </li>
                  <li>
                    <p>Turkey swine sirloin short loin. Venison cow shoulder meatloaf bresaola.</p> <a href="blog-single-right.html#comments" rel="external nofollow" className="url small-text weight-black">Alan Hicks</a> </li>
                  <li>
                    <p>Frankfurter pork belly drumstick kevin tenderloin spare ribs corned beef pastrami.</p> <a href="blog-single-right.html#comments" rel="external nofollow" className="url small-text weight-black">Celia Perkins</a> </li>
                </ul>
              </div>
              <div className="widget widget_recent_entries">
                <h3 className="widget-title poppins">Recent Entries</h3>
                <ul className="greylinks">
                  <li>
                    <p className="bottommargin_0"> <a href="blog-single-left.html">Rachel Featured As One Of TIME's Women</a> </p> <span className="entry-date small-text highlight">
                      <time className="entry-date" dateTime="2017-03-13T08:50:40+00:00">
                        April 04, 2017
                      </time>
                    </span> </li>
                  <li>
                    <p className="bottommargin_0"> <a href="blog-single-left.html">Rachel Covers Business Of Fashion's Print Edition</a> </p> <span className="entry-date small-text highlight">
                      <time className="entry-date" dateTime="2017-03-13T08:50:40+00:00">
                        March 26, 2017
                      </time>
                    </span> </li>
                </ul>
              </div>
              <div className="widget widget_categories">
                <h3 className="widget-title poppins">Categories</h3> <select name="cat" className="wrap-select-group">
                  <option value="-1" data-default="" selected="" disabled="">Select Category</option>
                  <option value="1">All</option>
                  <option value="2">News</option>
                  <option value="3">Music</option>
                  <option value="4">Songs</option>
                  <option value="5">Concerts</option>
                </select> </div>
              <div className="widget widget_flickr">
                <h3 className="widget-title poppins">Flickr</h3>
                <ul id="flickr"></ul>
              </div>
              <div className="widget widget_mailchimp">
                <h3 className="widget-title poppins">Mailchimp</h3>
                <form className="signup" action="http://html.modernwebtemplates.com/singer/" method="get">
                  <div className="form-group-wrap">
                    <div className="form-group"> <label htmlFor="mailchimp-aside" className="sr-only">Enter your email here</label> <input name="email" type="email" id="mailchimp-aside" className="mailchimp_email form-control" placeholder="Your Email Address" readOnly /> </div> <button type="submit" className="theme_button color1 no_bg_button">Subscribe</button>										</div>
                  <p>Enter Email here to be updated. We promise not to send you spam!</p>
                  <div className="response"></div>
                </form>
              </div>
              <div className="widget widget_meta">
                <h3 className="widget-title poppins">Meta Widget</h3>
                <ul className="greylinks">
                  <li> <a href="#">Site Admin</a> </li>
                  <li> <a href="#">Log out</a> </li>
                  <li> <a href="#" title="">Entries <abbr title="">RSS</abbr></a> </li>
                  <li> <a href="#" title="">Comments <abbr title="">RSS</abbr></a> </li>
                  <li> <a href="#" title="">WordPress.org</a> </li>
                </ul>
              </div>
              <div className="widget widget_nav_menu">
                <h3 className="widget-title poppins">Custom Menu</h3>
                <div>
                  <ul className="menu greylinks fontsize_16">
                    <li className=""> <a href="#">About Us</a> </li>
                    <li className=""> <a href="#">Our Services</a> </li>
                    <li className=""> <a href="#">Gallery Regular</a> </li>
                    <li className=""> <a href="#">Contact Us</a> </li>
                  </ul>
                </div>
              </div>
              <div className="widget widget_pages">
                <h3 className="widget-title poppins">Pages</h3>
                <ul className="greylinks">
                  <li> <a href="#">Dolor Sit</a> </li>
                  <li> <a href="#">Sit Amet Dolor</a> </li>
                  <li> <a href="#">Lorem Ipsum Dolor</a> </li>
                </ul>
              </div>
              <div className="widget widget_search">
                <h3 className="widget-title poppins">Search Widget</h3>
                <form method="get" className="searchform" action="http://html.modernwebtemplates.com/singer/" >
                  <div className="form-group"> <label className="sr-only" htmlFor="widget-search">Search for:</label> <input id="widget-search" type="text" value="" name="search" className="form-control" placeholder="Search Keyword" readOnly /> </div> <button type="submit" className="theme_button color1 no_bg_button">Search</button>									</form>
              </div>
              <div className="widget widget_tag_cloud">
                <h3 className="widget-title poppins">Tags</h3>
                <div className="tagcloud"> <a href="#" title="">Organic</a> <a href="#" title="">Food</a> <a href="#" title="">Farm</a> <a href="#" title="">Events</a> <a href="#" title="">farming</a> </div>
              </div>
              <div className="widget widget_text">
                <h3 className="widget-title poppins">Text Widget</h3>
                <div className="textwidget"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore </div>
              </div>
              <div className="widget widget_twitter">
                <h3 className="widget-title poppins">Twitter Widget</h3>
                <div className="twitter"></div>
              </div>
              <div className="widget widget_apsc_widget">
                <h3 className="widget-title poppins">Share</h3>
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
              <div className="widget widget_banner">
                <h3 className="widget-title poppins">Banner</h3>
                <div className="vertical-item content-absolute ds">
                  <div className="item-media"> <img src={require("assets/images/banner.jpg")} alt="" />
                    <div className="media-links"> <a href="#" className="abs-link"></a> </div>
                  </div>
                  <div className="item-content"> <span className="main_bg_color">
                    visit
                  </span>
                    <h3> The Rachel Salvarez Events </h3>
                  </div>
                </div>
              </div>
              <div className="widget widget_slider">
                <h3 className="widget-title poppins">Slider</h3>
                <div className="owl-carousel" data-nav="true" data-loop="true" data-autoplay="true" data-items="1" data-responsive-lg="1" data-responsive-md="1" data-responsive-sm="1" data-responsive-xs="1">
                  <div className="vertical-item">
                    <div className="item-media bottommargin_10"> <img src={require("assets/images/gallery/01.jpg")} alt="" /> </div>
                    <div className="item-content">
                      <h4 className="entry-title bottommargin_0">Consetetur sadipscing elitr</h4>
                      <p className="item-meta greylinks content-justify"> <span>
                        By <a href="#">Admin</a> on Oct 18, 2017
                      </span> <span>
                          <i className="rt-icon2-heart-outline highlight"></i> 325
                        </span> </p>
                    </div>
                  </div>
                  <div className="vertical-item">
                    <div className="item-media bottommargin_10"> <img src={require("assets/images/gallery/02.jpg")} alt="" /> </div>
                    <div className="item-content">
                      <h4 className="entry-title bottommargin_0">Consetetur sadipscing elitr</h4>
                      <p className="item-meta greylinks"> By <a href="#">Admin</a> on Oct 18, 2017 <span className="pull-right"><i className="rt-icon2-heart-outline highlight"></i> 221</span> </p>
                    </div>
                  </div>
                  <div className="vertical-item">
                    <div className="item-media bottommargin_10"> <img src={require("assets/images/gallery/03.jpg")} alt="" /> </div>
                    <div className="item-content">
                      <h4 className="entry-title bottommargin_0">Consetetur sadipscing elitr</h4>
                      <p className="item-meta greylinks"> By <a href="#">Admin</a> on Oct 18, 2017 <span className="pull-right"><i className="rt-icon2-heart-outline highlight"></i> 58</span> </p>
                    </div>
                  </div>
                  <div className="vertical-item">
                    <div className="item-media bottommargin_10"> <img src={require("assets/images/gallery/04.jpg")}  alt="" /> </div>
                    <div className="item-content">
                      <h4 className="entry-title bottommargin_0">Consetetur sadipscing elitr</h4>
                      <p className="item-meta greylinks"> By <a href="#">Admin</a> on Oct 18, 2017 <span className="pull-right"><i className="rt-icon2-heart-outline highlight"></i> 241</span> </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget widget_tabs widget_theme_post_tabs small-tabs">
                <h3 className="widget-title poppins">Tabs Posts</h3>
                <ul className="nav nav-tabs" role="tablist">
                  <li className="active"><a href="#widget-tab4" role="tab" data-toggle="tab">Recent</a></li>
                  <li><a href="#widget-tab5" role="tab" data-toggle="tab">Popular</a></li>
                  <li><a href="#widget-tab6" role="tab" data-toggle="tab">Rated</a></li>
                </ul>
                <div className="tab-content top-color-border no-border">
                  <div className="tab-pane fade in active" id="widget-tab4">
                    <div className="vertical-item">
                      <div className="item-media"> <img src={require("assets/images/gallery/01.jpg")}  alt="" />
                        <div className="media-links"> <a className="abs-link" title="" href="blog-single-left.html"></a> </div>
                      </div>
                      <div className="item-content">
                        <h4 className="bottommargin_0"> <a href="blog-single-right.html">Consetetur elitr</a> </h4>
                        <p className="item-meta greylinks"> By <a href="#">Admin</a> on Jan 18, 2017 <span className="pull-right"><i className="rt-icon2-heart-outline highlight"></i> 53</span> </p>
                      </div>
                    </div>
                    <div className="vertical-item">
                      <div className="item-media"> <img src={require("assets/images/gallery/02.jpg")} alt="" />
                        <div className="media-links"> <a className="abs-link" title="" href="blog-single-left.html"></a> </div>
                      </div>
                      <div className="item-content">
                        <h4 className="bottommargin_0"> <a href="blog-single-right.html">Lorem sadipscing elitr</a> </h4>
                        <p className="item-meta greylinks"> By <a href="#">Admin</a> on Jan 18, 2017 <span className="pull-right"><i className="rt-icon2-heart-outline highlight"></i> 221</span> </p>
                      </div>
                    </div>
                    <div className="vertical-item">
                      <div className="item-media"> <img src={require("assets/images/gallery/03.jpg")} alt="" />
                        <div className="media-links"> <a className="abs-link" title="" href="blog-single-left.html"></a> </div>
                      </div>
                      <div className="item-content">
                        <h4 className="bottommargin_0"> <a href="blog-single-right.html">Elitr onsetetur sadip</a> </h4>
                        <p className="item-meta greylinks"> By <a href="#">Admin</a> on Jan 18, 2017 <span className="pull-right"><i className="rt-icon2-heart-outline highlight"></i> 631</span> </p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="widget-tab5">
                    <div className="vertical-item">
                      <div className="item-media"> <img src={require("assets/images/gallery/03.jpg")} alt="" />
                        <div className="media-links"> <a className="abs-link" title="" href="blog-single-left.html"></a> </div>
                      </div>
                      <div className="item-content">
                        <h4 className="bottommargin_0"> <a href="blog-single-right.html">Elitr onsetetur sadip</a> </h4>
                        <p className="item-meta greylinks"> By <a href="#">Admin</a> on Jan 18, 2017 <span className="pull-right"><i className="rt-icon2-heart-outline highlight"></i> 631</span> </p>
                      </div>
                    </div>
                    <div className="vertical-item">
                      <div className="item-media"> <img src={require("assets/images/gallery/01.jpg")} alt="" />
                        <div className="media-links"> <a className="abs-link" title="" href="blog-single-left.html"></a> </div>
                      </div>
                      <div className="item-content">
                        <h4 className="bottommargin_0"> <a href="blog-single-right.html">Consetetur elitr</a> </h4>
                        <p className="item-meta greylinks"> By <a href="#">Admin</a> on Jan 18, 2017 <span className="pull-right"><i className="rt-icon2-heart-outline highlight"></i> 53</span> </p>
                      </div>
                    </div>
                    <div className="vertical-item">
                      <div className="item-media"> <img src={require("assets/images/gallery/02.jpg")} alt="" />
                        <div className="media-links"> <a className="abs-link" title="" href="blog-single-left.html"></a> </div>
                      </div>
                      <div className="item-content">
                        <h4 className="bottommargin_0"> <a href="blog-single-right.html">Lorem sadipscing elitr</a> </h4>
                        <p className="item-meta greylinks"> By <a href="#">Admin</a> on Jan 18, 2017 <span className="pull-right"><i className="rt-icon2-heart-outline highlight"></i> 221</span> </p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="widget-tab6">
                    <div className="vertical-item">
                      <div className="item-media"> <img src={require("assets/images/gallery/01.jpg")} alt="" />
                        <div className="media-links"> <a className="abs-link" title="" href="blog-single-left.html"></a> </div>
                      </div>
                      <div className="item-content">
                        <h4 className="bottommargin_0"> <a href="blog-single-right.html">Consetetur elitr</a> </h4>
                        <p className="item-meta greylinks"> By <a href="#">Admin</a> on Jan 18, 2017 <span className="pull-right"><i className="rt-icon2-heart-outline highlight"></i> 53</span> </p>
                      </div>
                    </div>
                    <div className="vertical-item">
                      <div className="item-media"> <img src={require("assets/images/gallery/03.jpg")} alt="" />
                        <div className="media-links"> <a className="abs-link" title="" href="blog-single-left.html"></a> </div>
                      </div>
                      <div className="item-content">
                        <h4 className="bottommargin_0"> <a href="blog-single-right.html">Elitr onsetetur sadip</a> </h4>
                        <p className="item-meta greylinks"> By <a href="#">Admin</a> on Jan 18, 2017 <span className="pull-right"><i className="rt-icon2-heart-outline highlight"></i> 631</span> </p>
                      </div>
                    </div>
                    <div className="vertical-item">
                      <div className="item-media"> <img src={require("assets/images/gallery/02.jpg")} alt="" />
                        <div className="media-links"> <a className="abs-link" title="" href="blog-single-left.html"></a> </div>
                      </div>
                      <div className="item-content">
                        <h4 className="bottommargin_0"> <a href="blog-single-right.html">Lorem sadipscing elitr</a> </h4>
                        <p className="item-meta greylinks"> By <a href="#">Admin</a> on Jan 18, 2017 <span className="pull-right"><i className="rt-icon2-heart-outline highlight"></i> 221</span> </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div className="col-sm-7 col-md-8 col-lg-8">
              <h1 className="entry-title topmargin_0">All Widgets</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <div className="row">
                <div className="col-md-6">
                  <h3>1/2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
                </div>
                <div className="col-md-6">
                  <h3>1/2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
                </div>
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
                </div>
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro.</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <div className="row">
                <div className="col-md-6">
                  <h3>1/2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
                </div>
                <div className="col-md-6">
                  <h3>1/2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
                </div>
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
                </div>
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro.</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <div className="row">
                <div className="col-md-6">
                  <h3>1/2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
                </div>
                <div className="col-md-6">
                  <h3>1/2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
                </div>
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
                </div>
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro.</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <div className="row">
                <div className="col-md-6">
                  <h3>1/2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
                </div>
                <div className="col-md-6">
                  <h3>1/2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
                </div>
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
                </div>
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro.</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <div className="row">
                <div className="col-md-6">
                  <h3>1/2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
                </div>
                <div className="col-md-6">
                  <h3>1/2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
                </div>
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
                </div>
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro.</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <div className="row">
                <div className="col-md-6">
                  <h3>1/2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
                </div>
                <div className="col-md-6">
                  <h3>1/2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
                </div>
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
                </div>
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro.</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <div className="row">
                <div className="col-md-6">
                  <h3>1/2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
                </div>
                <div className="col-md-6">
                  <h3>1/2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
                </div>
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
                </div>
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h3>1/2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
                </div>
                <div className="col-md-6">
                  <h3>1/2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
                </div>
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
                </div>
                <div className="col-md-4">
                  <h3>1/3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro.</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="page_footer ds section_padding_top_100 section_padding_bottom_100 columns_padding_25">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="widget widget_text">
                                <h4 className="widget-title with_line"> My Contacts </h4>
                                <div>
                                    <div className="media small-media inline-block">
                                        <div className="media-left"> <i className="fa fa-map-marker highlight" aria-hidden="true"></i> </div>
                                        <div className="media-body"> 140 Horizon Circle, New York, California </div>
                                    </div><br />
                                    <div className="media small-media inline-block">
                                        <div className="media-left"> <i className="fa fa-phone highlight" aria-hidden="true"></i> </div>
                                        <div className="media-body"> 1-888-652-2588 </div>
                                    </div><br />
                                    <div className="media small-media inline-block">
                                        <div className="media-left"> <i className="fa fa-pencil highlight" aria-hidden="true"></i> </div>
                                        <div className="media-body"> rachel_fan@example.com </div>
                                    </div><br />
                                    <div className="media small-media greylinks inline-block">
                                        <div className="media-left"> <i className="fa fa-internet-explorer highlight" aria-hidden="true"></i> </div>
                                        <div className="media-body"> <a href="#">https://www.rachelsalverz.com</a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 text-center">
                            <div className="widget widget_mailchimp">
                                <h4 className="widget-title with_line">My Newsletter</h4>
                                <form className="signup" action="http://html.modernwebtemplates.com/singer/" method="get">
                                    <p className="bottommargin_20">Subscribe to our mailing list to receive new updates and special offers:</p>
                                    <div className="form-group-wrap">
                                        <div className="form-group"> <label htmlFor="mailchimp" className="sr-only">Enter your email here</label> <input name="email" type="email" id="mailchimp" className="mailchimp_email form-control" placeholder="Your Email Address*" /> </div> <button type="submit" className="theme_button color1 no_bg_button">Subscribe</button>										</div>
                                    <div className="response"></div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 text-center">
                            <div className="widget widget_recent_entries">
                                <h4 className="widget-title with_line">Recent Posts</h4>
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
                        </div>
                    </div>
                </div>
            </footer>

            <section className="ds ms page_copyright section_padding_top_40 section_padding_bottom_40">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <p>&copy; Copyright 2017. All Rights Reserved.</p>
                            <div> <a className="social-icon color-bg-icon round-icon socicon-facebook" href="#" title="Facebook"></a> <a className="social-icon color-bg-icon round-icon socicon-twitter" href="#" title="Twitter"></a> <a className="social-icon color-bg-icon round-icon socicon-google"
                                href="#" title="Google"></a> </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

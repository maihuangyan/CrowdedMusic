import React from 'react'

export default function index() {
  return (
    <>
      <section className="page_breadcrumbs ls section_padding_top_25 section_padding_bottom_25 table_section table_section_md">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-center text-md-left">
              <h2 className="small highlight">Bootstrap</h2>
            </div>
            <div className="col-md-4 text-center text-md-right">
              <ol className="breadcrumb greylinks">
                <li> <a href="/">
                  Home
                </a> </li>
                <li> <a href="#">Shortcodes</a> </li>
                <li className="active">Bootstrap</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="ds section_padding_100">
        <div className="container">
          <h2 className="text-center topmargin_0">Bootstrap Alerts</h2>
          <div className="row">
            <div className="col-sm-12">
              <div className="alert alert-success" role="alert"> <button type="button" className="close" data-dismiss="alert"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button> <strong>Well done!</strong> You successfully read this important alert message. </div>
              <div className="alert alert-info"
                role="alert"> <button type="button" className="close" data-dismiss="alert"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button> <strong>Heads up!</strong> This alert needs your attention, but it's not super important. </div>
              <div className="alert alert-warning"
                role="alert"> <button type="button" className="close" data-dismiss="alert"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button> <strong>Warning!</strong> Better check yourself, you're not looking too good. </div>
              <div className="alert alert-danger"
                role="alert"> <button type="button" className="close" data-dismiss="alert"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button> <strong>Oh snap!</strong> Change a few things up and try submitting again. </div>
            </div>
          </div>
          <h2 className="text-center divider_40">Bootstrap Thumbnails</h2>
          <div className="row">
            <div className="col-sm-4">
              <div className="thumbnail"> <img src={require("assets/images/faces/01.jpg")} alt="" />
                <div className="caption">
                  <h3> <a href="team-single.html">Michael Bean</a> </h3>
                  <p>Director</p>
                  <p className="text-center social-icons"> <a className="social-icon socicon-facebook" href="#" title="Facebook" data-toggle="tooltip"></a> <a className="social-icon socicon-twitter" href="#" title="Twitter" data-toggle="tooltip"></a> <a className="social-icon socicon-google" href="#" title="Google"
                    data-toggle="tooltip"></a> </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="thumbnail"> <img src={require("assets/images/faces/02.jpg")} alt="" />
                <div className="caption">
                  <h3> <a href="team-single.html">Mohamed Rahum</a> </h3>
                  <p>SEO</p>
                  <p className="text-center social-icons"> <a className="social-icon socicon-facebook" href="#" title="Facebook" data-toggle="tooltip"></a> <a className="social-icon socicon-twitter" href="#" title="Twitter" data-toggle="tooltip"></a> <a className="social-icon socicon-google" href="#" title="Google"
                    data-toggle="tooltip"></a> </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="thumbnail"> <img src={require("assets/images/faces/03.jpg")} alt="" />
                <div className="caption">
                  <h3> <a href="team-single.html">Whitney Johnson</a> </h3>
                  <p>Developer</p>
                  <p className="text-center social-icons"> <a className="social-icon socicon-facebook" href="#" title="Facebook" data-toggle="tooltip"></a> <a className="social-icon socicon-twitter" href="#" title="Twitter" data-toggle="tooltip"></a> <a className="social-icon socicon-google" href="#" title="Google"
                    data-toggle="tooltip"></a> </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <h3>Bootstrap Pagination</h3>
              <ul className="pagination">
                <li><a href="#"><span className="sr-only">Prev</span><i className="fa  fa-angle-left"></i></a></li>
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#"><span className="sr-only">Next</span><i className="fa fa-angle-right"></i></a></li>
              </ul>
            </div>
            <div className="col-sm-6">
              <h3>Testimonials Carousel</h3>
              <div id="carousel-media" className="carousel slide testimonials-carousel" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carousel-media" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel-media" data-slide-to="1"></li>
                  <li data-target="#carousel-media" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="item active">
                    <div className="media"> <a className="pull-left" href="#">
                      <img className="media-object" src={require("assets/images/faces/01.jpg")} alt="" />
                    </a>
                      <div className="media-body">
                        <h5 className="bottommargin_0">Jhon Smith</h5>
                        <p> Google Inc. </p>
                      </div>
                    </div>
                    <p> Ullamco laboris nialiquid exea commodi consat. Ut enim minim veniam norud exotation. </p>
                  </div>
                  <div className="item">
                    <div className="media"> <a className="pull-left" href="#">
                      <img className="media-object" src={require("assets/images/faces/02.jpg")} alt="" />
                    </a>
                      <div className="media-body">
                        <h5 className="bottommargin_0">Michael Anderson</h5>
                        <p> Google Inc. </p>
                      </div>
                    </div>
                    <p> Ullamco laboris nialiquid exea commodi consat. Ut enim minim veniam norud exotation. </p>
                  </div>
                  <div className="item">
                    <div className="media"> <a className="pull-left" href="#">
                      <img className="media-object" src={require("assets/images/faces/03.jpg")} alt="" />
                    </a>
                      <div className="media-body">
                        <h5 className="bottommargin_0">Michael Anderson</h5>
                        <p> Google Inc. </p>
                      </div>
                    </div>
                    <p> Ullamco laboris nialiquid exea commodi consat. Ut enim minim veniam norud exotation. </p>
                  </div>
                </div>
                <a className="left carousel-control" href="#carousel-media" role="button" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left"></span>
                </a> <a className="right carousel-control" href="#carousel-media" role="button" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right"></span>
                </a> </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

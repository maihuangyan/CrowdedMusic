import React from 'react'

export default function index() {
  return (
    <>
      <section className="page_breadcrumbs ls section_padding_top_25 section_padding_bottom_25 table_section table_section_md">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-center text-md-left">
              <h2 className="small highlight">Progress Bars</h2>
            </div>
            <div className="col-md-4 text-center text-md-right">
              <ol className="breadcrumb greylinks">
                <li> <a href="/">
                  Home
                </a> </li>
                <li> <a href="#">Shortcodes</a> </li>
                <li className="active">Progress Bars</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="ds ms section_padding_100">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>Progress Bars:</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <p className="progress-bar-title">Progress</p>
              <div className="progress">
                <div className="progress-bar progress-bar-success" role="progressbar" data-transitiongoal="90"> <span>90%</span> </div>
              </div>
              <p className="progress-bar-title">Success</p>
              <div className="progress">
                <div className="progress-bar progress-bar-info" role="progressbar" data-transitiongoal="52"> <span>52%</span> </div>
              </div>
            </div>
            <div className="col-sm-6">
              <p className="progress-bar-title">Knowing</p>
              <div className="progress">
                <div className="progress-bar progress-bar-warning" role="progressbar" data-transitiongoal="75"> <span>75%</span> </div>
              </div>
              <p className="progress-bar-title">Rating</p>
              <div className="progress">
                <div className="progress-bar progress-bar-danger" role="progressbar" data-transitiongoal="95"> <span>95%</span> </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h2 className="divider_40">Pie Chars:</h2>
            </div>
            <div className="row text-center">
              <div className="col-sm-4">
                <div className="chart" data-size="250" data-percent="92" data-line="5" data-bgcolor="#292929" data-trackcolor="#f4a115" data-speed="3200">
                  <div className="chart-meta"> <strong className="percent grey">92</strong>
                    <h4>Photoshop</h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="chart" data-size="250" data-percent="98" data-line="10" data-bgcolor="#292929" data-trackcolor="#f08521" data-speed="4800">
                  <div className="chart-meta"> <strong className="percent grey">98</strong>
                    <h4>HTML,CSS</h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="chart" data-size="250" data-percent="91" data-line="15" data-bgcolor="#292929" data-trackcolor="#e84b3a" data-speed="4100">
                  <div className="chart-meta"> <strong className="percent grey">91</strong>
                    <h4>PHP</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h2 className="divider_40">Progress Counter Teasers:</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="teaser text-center">
                <div className="teaser_icon grey size_big"> <i className="rt-icon2-bulb"></i> </div>
                <h3 className="counter-wrap highlight" data-from="0" data-to="40" data-speed="1800"> <span className="counter" data-from="0" data-to="20" data-speed="1500">0</span><span className="counter-add">+</span> </h3>
                <p>Projects</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="teaser text-center">
                <div className="teaser_icon grey size_big"> <i className="rt-icon2-banknote"></i> </div>
                <h3 className="counter highlight" data-from="0" data-to="19350" data-speed="2100">0</h3>
                <p>Dollars</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="teaser text-center">
                <div className="teaser_icon grey size_big"> <i className="rt-icon2-user"></i> </div>
                <h3 className="counter highlight" data-from="0" data-to="1256" data-speed="1400">0</h3>
                <p>Users</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="teaser text-center">
                <div className="teaser_icon grey size_big"> <i className="rt-icon2-like"></i> </div>
                <h3 className="highlight counter-wrap"> <span className="counter" data-from="0" data-to="100000" data-speed="1500">0</span><span className="counter-add">+</span> </h3>
                <p>Likes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

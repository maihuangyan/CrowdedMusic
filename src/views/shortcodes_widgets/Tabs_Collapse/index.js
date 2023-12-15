import React from 'react'

export default function index() {
  return (
    <>
      <section className="page_breadcrumbs ls section_padding_top_25 section_padding_bottom_25 table_section table_section_md">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-center text-md-left">
              <h2 className="small highlight">Tabs &amp; Collapse</h2>
            </div>
            <div className="col-md-4 text-center text-md-right">
              <ol className="breadcrumb greylinks">
                <li> <a href="/">
                  Home
                </a> </li>
                <li> <a href="#">Shortcodes</a> </li>
                <li className="active">Tabs &amp; Collapse</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="ds section_padding_100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Unstyled Tabs:</h3>
              <ul className="nav-unstyled darklinks" role="tablist">
                <li className="active"><a href="#tab-unstyled-1" role="tab" data-toggle="tab">Quality</a></li>
                <li><a href="#tab-unstyled-2" role="tab" data-toggle="tab">Comfort</a></li>
                <li><a href="#tab-unstyled-3" role="tab" data-toggle="tab">Results</a></li>
              </ul>
              <div className="tab-content tab-unstyled">
                <div className="tab-pane fade in active" id="tab-unstyled-1">
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi minus tenetur sunt aspernatur vitae, corporis nostrum quibusdam molestias, laudantium quia in a natus facilis beatae culpa inventore quidem illo atque.</p>
                </div>
                <div className="tab-pane fade" id="tab-unstyled-2">
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, enim saepe libero iure tenetur optio nisi aliquam molestias ratione magnam ab ut quod possimus hic suscipit doloremque, deleniti ipsa quia!</p>
                </div>
                <div className="tab-pane fade" id="tab-unstyled-3">
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis est, dolores, ex ducimus cumque iusto ipsam odit voluptatum autem error impedit obcaecati quisquam molestiae, optio porro inventore nostrum deleniti cupiditate.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <h3>Featured Images:</h3>
                </div>
              </div>
              <ul className="nav nav-tabs" role="tablist">
                <li className="active"><a href="#tab7" role="tab" data-toggle="tab">Quality</a></li>
                <li><a href="#tab8" role="tab" data-toggle="tab">Comfort</a></li>
                <li><a href="#tab9" role="tab" data-toggle="tab">Results</a></li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade in active" id="tab7">
                  <p className="featured-tab-image"> <img src={require("assets/images/gallery/01.jpg")} alt="" /> </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi minus tenetur sunt aspernatur vitae, corporis nostrum quibusdam molestias.</p>
                </div>
                <div className="tab-pane fade" id="tab8">
                  <p className="featured-tab-image"> <img src={require("assets/images/gallery/02.jpg")} alt="" /> </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, enim saepe libero iure tenetur optio nisi aliquam molestias ratione magnam ab ut quod possimus quia!</p>
                </div>
                <div className="tab-pane fade" id="tab9">
                  <p className="featured-tab-image"> <img src={require("assets/images/gallery/03.jpg")} alt="" /> </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. quisquam molestiae, quisquam molestiae, optio porro inventore nostrum deleniti cupiditate.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <h3>Bordered Tabs:</h3>
                </div>
              </div>
              <ul className="nav nav-tabs" role="tablist">
                <li className="active"><a href="#tab4" role="tab" data-toggle="tab"><i className="rt-icon2-heart-outline"></i> Quality</a></li>
                <li><a href="#tab5" role="tab" data-toggle="tab"><i className="fa fa-paw"></i> Comfort</a></li>
                <li><a href="#tab6" role="tab" data-toggle="tab"><i className="rt-icon2-star-outline"></i>Results</a></li>
              </ul>
              <div className="tab-content top-color-border">
                <div className="tab-pane fade in active" id="tab4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi minus tenetur sunt aspernatur vitae, corporis nostrum quibusdam molestias, laudantium quia in a natus facilis beatae culpa inventore quidem illo atque. </p>
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className="tab-pane fade" id="tab5">
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, enim saepe libero iure tenetur optio nisi aliquam molestias ratione magnam ab ut quod possimus hic suscipit doloremque, deleniti ipsa quia!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, enim saepe libero iure tenetur optio nisi aliquam molestias ratione magnam ab ut quod possimus hic suscipit doloremque, deleniti ipsa quia!</p>
                </div>
                <div className="tab-pane fade" id="tab6">
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis est, dolores, ex ducimus cumque iusto ipsam odit voluptatum autem error impedit obcaecati quisquam molestiae, optio porro inventore nostrum deleniti cupiditate.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis est, dolores, ex ducimus cumque iusto ipsam odit voluptatum autem error impedit obcaecati quisquam molestiae, optio porro inventore nostrum deleniti cupiditate.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <h3>Vertical Tabs:</h3>
                </div>
              </div>
              <div className="row vertical-tabs">
                <div className="col-sm-4">
                  <ul className="nav" role="tablist">
                    <li className="active"> <a href="#vertical-tab1" role="tab" data-toggle="tab">
                      <i className="rt-icon2-home2"></i> Consectetur
                    </a> </li>
                    <li> <a href="#vertical-tab2" role="tab" data-toggle="tab">
                      <i className="rt-icon2-light-bulb"></i> Eveniet
                    </a> </li>
                    <li> <a href="#vertical-tab3" role="tab" data-toggle="tab">
                      <i className="rt-icon2-book"></i> Dolorum
                    </a> </li>
                    <li> <a href="#vertical-tab4" role="tab" data-toggle="tab">
                      <i className="rt-icon2-cog"></i> Nolestiae
                    </a> </li>
                  </ul>
                </div>
                <div className="col-sm-8">
                  <div className="tab-content">
                    <div className="tab-pane fade in active" id="vertical-tab1">
                      <p><i className="rt-icon2-anchor"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quia, ad natus corrupti inventore mollitia, dolor omnis nesciunt, molestias officiis eum debitis dolore. Minima magnam odit cupiditate labore accusantium
                        eaque!</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi minus tenetur sunt aspernatur vitae, corporis nostrum quibusdam molestias, laudantium quia in a natus facilis beatae culpa inventore quidem illo atque.</p>
                    </div>
                    <div className="tab-pane fade" id="vertical-tab2">
                      <p><i className="rt-icon2-compass"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptate, quas fugit facere possimus facilis odio delectus laborum id nobis expedita vitae molestiae a. Magnam aliquid architecto magni, quos
                        omnis.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, enim saepe libero iure tenetur optio nisi aliquam molestias ratione magnam ab ut quod possimus hic suscipit doloremque, deleniti ipsa quia!</p>
                    </div>
                    <div className="tab-pane fade" id="vertical-tab3">
                      <p><i className="rt-icon2-laptop"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque repellat, reiciendis sint officia quia iure nam! Dicta omnis ex ipsa fugiat maiores, vero expedita facilis, suscipit quam obcaecati veniam voluptate.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis est, dolores, ex ducimus cumque iusto ipsam odit voluptatum autem error impedit obcaecati quisquam molestiae, optio porro inventore nostrum deleniti cupiditate.</p>
                    </div>
                    <div className="tab-pane fade" id="vertical-tab4">
                      <p><i className="fa fa-trophy"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium impedit asperiores illum nulla sint itaque laborum perferendis deleniti quo cumque, quisquam repudiandae molestias sunt ea delectus porro odio
                        recusandae!</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus omnis quod eligendi mollitia vel optio neque id, assumenda! Quae at quisquam eum, dolorum ullam, maxime nesciunt ex modi minus illum!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-12">
                  <h3>Regular Collapse:</h3>
                </div>
              </div>
              <div className="panel-group" id="accordion1">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion1" href="#collapse1">

                      Category 1
                    </a> </h4>
                  </div>
                  <div id="collapse1" className="panel-collapse collapse in">
                    <div className="panel-body"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium amet ea dicta neque, ut quis omnis quos nam, pariatur, minus, fugit suscipit aspernatur sint ullam quas explicabo. Alias, officiis, dolor! </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion1" href="#collapse2" className="collapsed">

                      Category 3
                    </a> </h4>
                  </div>
                  <div id="collapse2" className="panel-collapse collapse">
                    <div className="panel-body"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facere doloremque ut dolores laudantium nihil at, repudiandae est numquam fuga tempora totam sequi quidem saepe officiis sint beatae, magni fugit. </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion1" href="#collapse3" className="collapsed">

                      3D Modeling
                    </a> </h4>
                  </div>
                  <div id="collapse3" className="panel-collapse collapse">
                    <div className="panel-body"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nobis omnis delectus, asperiores quo obcaecati et iste corporis necessitatibus tempora aspernatur doloribus. Ut deleniti commodi dicta distinctio sit enim quidem! </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion1" href="#collapse4" className="collapsed">

                      Developing
                    </a> </h4>
                  </div>
                  <div id="collapse4" className="panel-collapse collapse">
                    <div className="panel-body"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nobis omnis delectus, asperiores quo obcaecati et iste corporis necessitatibus tempora aspernatur doloribus. Ut deleniti commodi dicta distinctio sit enim quidem! </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-12">
                  <h3>Collapse with Media:</h3>
                </div>
              </div>
              <div className="panel-group" id="accordion2">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion2" href="#collapse5">
                      Lorem Ipsum
                    </a> </h4>
                  </div>
                  <div id="collapse5" className="panel-collapse collapse in">
                    <div className="panel-body">
                      <div className="media">
                        <div className="media-left"> <a href="#">
                          <img src={require("assets/images/recent_post1.jpg")} alt="" />
                        </a> </div>
                        <div className="media-body"> Consetetur sadipscing elitr, sed diam nonumy eirmod tempor. </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion2" href="#collapse6" className="collapsed">
                      Sit Amet
                    </a> </h4>
                  </div>
                  <div id="collapse6" className="panel-collapse collapse">
                    <div className="panel-body">
                      <div className="media">
                        <div className="media-left"> <a href="#">
                          <img src={require("assets/images/recent_post2.jpg")} alt="" />
                        </a> </div>
                        <div className="media-body"> Consetetur sadipscing elitr, sed diam nonumy eirmod tempor. </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion2" href="#collapse7" className="collapsed">
                      Sed Diam
                    </a> </h4>
                  </div>
                  <div id="collapse7" className="panel-collapse collapse">
                    <div className="panel-body">
                      <div className="media">
                        <div className="media-left"> <a href="#">
                          <img src={require("assets/images/recent_post1.jpg")} alt="" />
                        </a> </div>
                        <div className="media-body"> Consetetur sadipscing elitr, sed diam nonumy eirmod tempor. </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion2" href="#collapse8" className="collapsed">
                      Eirmod Tempor
                    </a> </h4>
                  </div>
                  <div id="collapse8" className="panel-collapse collapse">
                    <div className="panel-body">
                      <div className="media">
                        <div className="media-left"> <a href="#">
                          <img src={require("assets/images/recent_post2.jpg")} alt="" />
                        </a> </div>
                        <div className="media-body"> Consetetur sadipscing elitr, sed diam nonumy eirmod tempor. </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-12">
                  <h3>Unstyled Collapse:</h3>
                </div>
              </div>
              <div id="accordion3" className="panel-group collapse-unstyled">
                <div className="panel">
                  <h4 className="poppins"> <a data-toggle="collapse" data-parent="#accordion3" href="#collapse11">
                    Consectetur adipisicing elit
                  </a> </h4>
                  <div id="collapse11" className="panel-collapse collapse in">
                    <div className="panel-content"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium amet ea dicta neque, ut quis omnis quos nam, pariatur, minus, fugit suscipit aspernatur sint ullam quas explicabo. Alias, officiis, dolor! </div>
                  </div>
                </div>
                <div className="panel">
                  <h4 className="poppins"> <a data-toggle="collapse" data-parent="#accordion3" href="#collapse12" className="collapsed">
                    Repudiandae est numquam
                  </a> </h4>
                  <div id="collapse12" className="panel-collapse collapse">
                    <div className="panel-content"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facere doloremque ut dolores laudantium nihil at, repudiandae est numquam fuga tempora totam sequi quidem saepe officiis sint beatae, magni fugit. </div>
                  </div>
                </div>
                <div className="panel">
                  <h4 className="poppins"> <a data-toggle="collapse" data-parent="#accordion3" href="#collapse13" className="collapsed">
                    Deleniti commodi dicta
                  </a> </h4>
                  <div id="collapse13" className="panel-collapse collapse">
                    <div className="panel-content"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nobis omnis delectus, asperiores quo obcaecati et iste corporis necessitatibus tempora aspernatur doloribus. Ut deleniti commodi dicta distinctio sit enim quidem! </div>
                  </div>
                </div>
                <div className="panel">
                  <h4 className="poppins"> <a data-toggle="collapse" data-parent="#accordion3" href="#collapse14" className="collapsed">
                    Tempora aspernatur doloribus
                  </a> </h4>
                  <div id="collapse14" className="panel-collapse collapse">
                    <div className="panel-content"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nobis omnis delectus, asperiores quo obcaecati et iste corporis necessitatibus tempora aspernatur doloribus. Ut deleniti commodi dicta distinctio sit enim quidem! </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

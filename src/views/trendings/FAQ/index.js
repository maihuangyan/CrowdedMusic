import React, { useState } from 'react'

const panels1 = [
  {
    id: 1,
    head: "Tenderloin doner tongue shoulder?",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium amet ea dicta neque, ut quis omnis quos nam, pariatur, minus, fugit suscipit aspernatur sint ullam quas explicabo. Alias, officiis, dolor!",
  },
  {
    id: 2,
    head: "Ham alcatra ribeye doner pork?",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facere doloremque ut dolores laudantium nihil at, repudiandae est numquam fuga tempora totam sequi quidem saepe officiis sint beatae, magni fugit.",
  },
  {
    id: 3,
    head: "Jerky venison salami?",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nobis omnis delectus, asperiores quo obcaecati et iste corporis necessitatibus tempora aspernatur doloribus. Ut deleniti commodi dicta distinctio sit enim quidem!",
  },
  {
    id: 4,
    head: "capicola cupim tail ham hock?",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nobis omnis delectus, asperiores quo obcaecati et iste corporis necessitatibus tempora aspernatur doloribus. Ut deleniti commodi dicta distinctio sit enim quidem!",
  },
]

const panels2 = [
  {
    id: 1,
    head: "Brisket doner flank meatloaf?",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium amet ea dicta neque, ut quis omnis quos nam, pariatur, minus, fugit suscipit aspernatur sint ullam quas explicabo. Alias, officiis, dolor!",
  },
  {
    id: 2,
    head: "kielbasa ground round?",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facere doloremque ut dolores laudantium nihil at, repudiandae est numquam fuga tempora totam sequi quidem saepe officiis sint beatae, magni fugit.",
  },
  {
    id: 3,
    head: "hamburger pastrami frankfurter?",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nobis omnis delectus, asperiores quo obcaecati et iste corporis necessitatibus tempora aspernatur doloribus. Ut deleniti commodi dicta distinctio sit enim quidem!",
  },
  {
    id: 4,
    head: "Beef tail cupim andouille?",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nobis omnis delectus, asperiores quo obcaecati et iste corporis necessitatibus tempora aspernatur doloribus. Ut deleniti commodi dicta distinctio sit enim quidem!",
  },
]

export default function FAQ() {


  const [showTab, setShowTab] = useState(0)
  const [showTab1, setShowTab1] = useState(0)

  const changeTab = (id) => {
    showTab == id ? setShowTab(0) : setShowTab(id)
    setShowTab1(0)
  }

  const changeTab1 = (id) => {
    showTab1 == id ? setShowTab1(0) : setShowTab1(id)
    setShowTab(0)
  }
  return (
    <>
      <section className="page_breadcrumbs ls section_padding_top_25 section_padding_bottom_25 table_section table_section_md">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-center text-md-left">
              <h2 className="small highlight">FAQ</h2>
            </div>
            <div className="col-md-4 text-center text-md-right">
              <ol className="breadcrumb greylinks">
                <li> <a href="/">
                  Home
                </a> </li>
                <li> <a href="#">Pages</a> </li>
                <li className="active">FAQ</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="ds ms section_padding_top_150 section_padding_bottom_130">
        <div className="container" style={{minHeight:"80vh"}}>
          <div className="row">
            <div className="col-sm-6">
              <div className="panel-group" id="accordion1">
                {
                  panels1.map((item, index) => <div key={item.id} className="panel panel-default" onClick={() => changeTab(item.id)}>
                    <div className="panel-heading">
                      <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion1" href="#collapse1" className={`${showTab == item.id ? "" : "collapsed"}`}>
                        {item.head}
                      </a> </h4>
                    </div>
                    <div className={`panel-collapse collapse ${showTab == item.id ? "in" : ""}`}>
                      <div className="panel-body"> {item.body} </div>
                    </div>
                  </div>)
                }
              </div>
            </div>
            <div className="col-sm-6">
              <div className="panel-group" id="accordion2">

                {
                  panels2.map((item, index) => <div key={item.id} className="panel panel-default" onClick={() => changeTab1(item.id)}>
                    <div className="panel-heading">
                      <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion1" href="#collapse1" className={`${showTab1 == item.id ? "" : "collapsed"}`}>
                        {item.head}
                      </a> </h4>
                    </div>
                    <div className={`panel-collapse collapse ${showTab1 == item.id ? "in" : ""}`}>
                      <div className="panel-body"> {item.body} </div>
                    </div>
                  </div>)
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

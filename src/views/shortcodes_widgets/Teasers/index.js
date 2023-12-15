import React from 'react'

export default function index() {
  return (
    <>
      <section className="page_breadcrumbs ls section_padding_top_25 section_padding_bottom_25 table_section table_section_md">
				<div className="container">
					<div className="row">
						<div className="col-md-8 text-center text-md-left">
							<h2 className="small highlight">Timetable</h2>
						</div>
						<div className="col-md-4 text-center text-md-right">
							<ol className="breadcrumb greylinks">
								<li> <a href="/">
							Home
						</a> </li>
								<li> <a href="#">Pages</a> </li>
								<li className="active">Timetable</li>
							</ol>
						</div>
					</div>
				</div>
			</section>
			<section className="ds section_padding_top_100 section_padding_bottom_75">
				<div className="container">
					<div className="row">
						<div className="text-center filters col-sm-12">
							<ul id="timetable_filter" className="greylinks">
								<li> <a data-filter="all" href="#" className="selected">All</a> </li>
								<li> <a data-filter=".management" href="#">Management</a> </li>
								<li> <a data-filter=".training" href="#">Training</a> </li>
								<li> <a data-filter=".presentations" href="#">Presentations</a> </li>
								<li> <a data-filter=".meetings" href="#">Meetings</a> </li>
								<li> <a data-filter=".consultations" href="#">Consultations</a> </li>
							</ul>
							<div className="clearfix"></div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<div className="table-responsive">
								<table className="table_template darklinks" id="timetable">
									<thead>
										<tr>
											<th></th>
											<th>Monday</th>
											<th>Tuesday</th>
											<th>Wednesday</th>
											<th>Thursday</th>
											<th>Friday</th>
											<th>Saturday</th>
											<th>Sunday</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th>8:00 - 9:00</th>
											<td> <a href="event-single-left.html" className="management">
										Management
									</a> </td>
											<td> <a href="event-single-left.html" className="meetings">
										Meetings
									</a> </td>
											<td> </td>
											<td> <a href="event-single-left.html" className="consultations">
										Consultations
									</a> </td>
											<td> <a href="event-single-left.html" className="presentations">
										Presentations
									</a> </td>
											<td> <a href="event-single-left.html" className="management">
										Management
									</a> </td>
											<td> </td>
										</tr>
										<tr>
											<th>9:00 - 10:00</th>
											<td> </td>
											<td> <a href="event-single-left.html" className="training">
										Training
									</a> </td>
											<td> <a href="event-single-left.html" className="presentations">
										Presentations
									</a> </td>
											<td> <a href="event-single-left.html" className="meetings">
										Meetings
									</a> </td>
											<td> </td>
											<td> <a href="event-single-left.html" className="management">
										Management
									</a> </td>
											<td> <a href="event-single-left.html" className="presentations">
										Presentations
									</a> </td>
										</tr>
										<tr>
											<th>10:00 - 11:00</th>
											<td> <a href="event-single-left.html" className="presentations">
										Presentations
									</a> </td>
											<td> </td>
											<td> <a href="event-single-left.html" className="presentations">
										Presentations
									</a> </td>
											<td> <a href="event-single-left.html" className="meetings">
										Meetings
									</a> </td>
											<td> <a href="event-single-left.html" className="management">
										Management
									</a> </td>
											<td> </td>
											<td> <a href="event-single-left.html" className="consultations">
										Consultations
									</a> </td>
										</tr>
										<tr>
											<th>11:00 - 12:00</th>
											<td> <a href="event-single-left.html" className="training">
										Training
									</a> </td>
											<td> </td>
											<td> <a href="event-single-left.html" className="management">
										Management
									</a> </td>
											<td> <a href="event-single-left.html" className="training">
										Training
									</a> </td>
											<td> </td>
											<td> <a href="event-single-left.html" className="management">
										Management
									</a> </td>
											<td> <a href="event-single-left.html" className="meetings">
										Meetings
									</a> </td>
										</tr>
										<tr>
											<th>12:00 - 13:00</th>
											<td> <a href="event-single-left.html" className="presentations">
										Presentations
									</a> </td>
											<td> <a href="event-single-left.html" className="consultations">
										Consultations
									</a> </td>
											<td> <a href="event-single-left.html" className="presentations">
										Presentations
									</a> </td>
											<td> </td>
											<td> <a href="event-single-left.html" className="meetings">
										Meetings
									</a> </td>
											<td> <a href="event-single-left.html" className="management">
										Management
									</a> </td>
											<td> <a href="event-single-left.html" className="consultations">
										Consultations
									</a> </td>
										</tr>
										<tr>
											<th>13:00 - 14:00</th>
											<td> <a href="event-single-left.html" className="training">
										Training
									</a> </td>
											<td> <a href="event-single-left.html" className="consultations">
										Consultations
									</a> </td>
											<td> </td>
											<td> <a href="event-single-left.html" className="management">
										Management
									</a> </td>
											<td> <a href="event-single-left.html" className="meetings">
										Meetings
									</a> </td>
											<td> <a href="event-single-left.html" className="training">
										Training
									</a> </td>
											<td> <a href="event-single-left.html" className="management">
										Management
									</a> </td>
										</tr>
										<tr>
											<th>14:00 - 15:00</th>
											<td> <a href="event-single-left.html" className="presentations">
										Presentations
									</a> </td>
											<td> <a href="event-single-left.html" className="meetings">
										Meetings
									</a> </td>
											<td> </td>
											<td> <a href="event-single-left.html" className="consultations">
										Consultations
									</a> </td>
											<td> <a href="event-single-left.html" className="presentations">
										Presentations
									</a> </td>
											<td> <a href="event-single-left.html" className="meetings">
										Meetings
									</a> </td>
											<td> </td>
										</tr>
										<tr>
											<th>15:00 - 16:00</th>
											<td> </td>
											<td> <a href="event-single-left.html" className="management">
										Management
									</a> </td>
											<td> <a href="event-single-left.html" className="training">
										Training
									</a> </td>
											<td> <a href="event-single-left.html" className="management">
										Management
									</a> </td>
											<td> <a href="event-single-left.html" className="presentations">
										Presentations
									</a> </td>
											<td> <a href="event-single-left.html" className="consultations">
										Consultations
									</a> </td>
											<td> <a href="event-single-left.html" className="meetings">
										Meetings
									</a> </td>
										</tr>
										<tr>
											<th>16:00 - 17:00</th>
											<td> <a href="event-single-left.html" className="presentations">
										Presentations
									</a> </td>
											<td> <a href="event-single-left.html" className="meetings">
										Meetings
									</a> </td>
											<td> <a href="event-single-left.html" className="consultations">
										Consultations
									</a> </td>
											<td> </td>
											<td> <a href="event-single-left.html" className="meetings">
										Meetings
									</a> </td>
											<td> <a href="event-single-left.html" className="management">
										Management
									</a> </td>
											<td></td>
										</tr>
										<tr>
											<th>17:00 - 18:00</th>
											<td> <a href="event-single-left.html" className="presentations">
										Presentations
									</a> </td>
											<td> <a href="event-single-left.html" className="meetings">
										Meetings
									</a> </td>
											<td> <a href="event-single-left.html" className="consultations">
										Consultations
									</a> </td>
											<td> </td>
											<td> <a href="event-single-left.html" className="meetings">
										Meetings
									</a> </td>
											<td> <a href="event-single-left.html" className="presentations">
										Presentations
									</a> </td>
											<td></td>
										</tr>
										<tr>
											<th>18:00 - 19:00</th>
											<td> <a href="event-single-left.html" className="management">
										Management
									</a> </td>
											<td></td>
											<td> <a href="event-single-left.html" className="meetings">
										Meetings
									</a> </td>
											<td> <a href="event-single-left.html" className="presentations">
										Presentations
									</a> </td>
											<td></td>
											<td> <a href="event-single-left.html" className="presentations">
										Presentations
									</a> </td>
											<td></td>
										</tr>
										<tr>
											<th>19:00 - 20:00</th>
											<td> <a href="event-single-left.html" className="presentations">
										Presentations
									</a> </td>
											<td> <a href="event-single-left.html" className="meetings">
										Meetings
									</a> </td>
											<td> </td>
											<td> <a href="event-single-left.html" className="consultations">
										Consultations
									</a> </td>
											<td> <a href="event-single-left.html" className="meetings">
										Meetings
									</a> </td>
											<td> <a href="event-single-left.html" className="presentations">
										Presentations
									</a> </td>
											<td></td>
										</tr>
										<tr>
											<th>20:00 - 21:00</th>
											<td> <a href="event-single-left.html" className="meetings">
										Meetings
									</a> </td>
											<td> <a href="event-single-left.html" className="meetings">
										Meetings
									</a> </td>
											<td> <a href="event-single-left.html" className="consultations">
										Consultations
									</a> </td>
											<td> </td>
											<td> <a href="event-single-left.html" className="meetings">
										Meetings
									</a> </td>
											<td></td>
											<td></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</section>
    </>
  )
}

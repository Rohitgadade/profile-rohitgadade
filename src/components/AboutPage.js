import React, { Component } from "react";
import "./styles/about.scss";
import Images from "../Images/profile.jpg";
// import "../sass/style.scss";

class AboutPage extends Component {
	render() {
		return (
			<div class="container-fluid">
				<div class="row ">
					<div class="col-sm  ">
						<div class="d-flex align-items-center justify-content-center  ">
							<div class="card shadow-lg mb-5 rounded m-5">
								<div class="card-body-about p-4">
									<h3 class="card-title text-center">
										<strong>About me </strong>
									</h3>
									<div class="col-sm  d-flex align-items-center justify-content-center mt-3 mb-3">
										<img
											src={Images}
											alt="Rohit_Gadade_Profile"
											
											style={{
												width: "25vh",
												height: "25vh",
											}}
										/>
									</div>
									<div class="col-sm ">
										<p class="card-text">
											I am fresher and looking for a job in Web Development
											field .I don't have any experience about the work, Because
											I did not get any opportunity in a company. I am good in
											Corejava, Reactjs, JavaScript . My skills are Reactjs,
											JavaScript, HTML, CSS, MySQL, CPP.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm ">
						<div class="d-flex align-items-center justify-content-center ">
							<div class="card shadow-lg  m-5 rounded bg-light ">
								<div class="card-body-about p-4">
									<h4 class="card-title text-center">
										<strong>Skills </strong>
									</h4>
									<p class="card-text ">
										<ul>
											<strong>Front-end</strong>
											<li> ReactJs.</li>
											<li>JavaScript.</li>
											<li>HTML.</li>
											<li>CSS.</li>
											<li>Bootstrap.</li>
											<li>Redux</li>
										</ul>

										<ul>
											<strong>Back-end</strong>
											<li> MySQL.</li>
											<li>MongoDB (Beginner).</li>
											<li>Express (Beginner).</li>
										</ul>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutPage;

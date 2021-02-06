import React, { Component } from "react";
import "./styles/project.scss";

class ProjectPage extends Component {
	render() {
		return (
			<div class="container-fluid ">
				<div class="row">
					<h1 class="text-center mt-2">
						<strong>Projects</strong>
					</h1>
					<div class="col-sm ">
						<div class="d-flex align-items-center justify-content-center  ">
							<div class="card  shadow-lg  m-5 rounded  ">
								<div class="card-body-project p-4">
									<p class="card-text text-left">
										<h5 class="card-title">
											1. Energy wastage prediction using machine learning
											approach.
										</h5>
										It was our BE final year project. For this project we used
										Naive Bayes algorithm. For Backend we used PHP. Also we used
										some hardware like arduino Uno ans ACS 712 Current Senser.
										We developed android app for UI part in which app aslo able
										to give push notification in case of energy wastage.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm">
						<div class="d-flex align-items-center justify-content-center  ">
							<div class="card shadow-lg m-5 rounded bg-light mt-5">
								<div class="card-body-project  p-3">
									<p class="card-text text-left">
										<h5 class="card-title">
											2. Blood Bank Application in android
										</h5>
										It was our Diploma final year project.This app developed for
										end user only. This app mantain blood groups stock and also
										save the information about the accepter and donor.In this
										app donor section, It gives donor information like blood
										group, age, gender, name etc and accepter information will
										be saved by admin to save information SQLite database is
										used. Android Development Tool bundle is used to develop app
										and also we use eclipse editor.
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

export default ProjectPage;

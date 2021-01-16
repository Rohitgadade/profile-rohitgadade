import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.scss";

class NavbarPage extends Component {
	render() {
		return (
			<div class="header-page">
				<nav class="navbar navbar-dark bg-dark">
					<div class=" d-flex container-fluid justify-content-end ml-3">
						<div className=" justify-content-center d-inline-flex  ">
							<Link to="/" class="navbar-brand">
								Home
							</Link>

							<Link to="/about" class="navbar-brand ">
								About me
							</Link>
							<Link to="/project" class="navbar-brand ">
								Project
							</Link>
							<Link to="/contact" class="navbar-brand ">
								Contact me
							</Link>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default NavbarPage;

import React, { Component } from "react";
import "./styles/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedinIn,
	faGithub,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

class FooterPage extends Component {
	render() {
		return (
			<div class="footer-page ">
				<div class="navbar bg-dark text-white py-0 ">
					<div class=" container-fluid justify-content-center">
						<div>
							<a
								href="https://www.linkedin.com/in/rohit-gadade-73b0b9127/"
								target="_blank"
								rel="noreferrer"
								className="mr-4 text-light py-0"
							>
								<FontAwesomeIcon icon={faLinkedinIn} />
							</a>
						</div>
						<div>
							<a
								href="https://github.com/Rohitgadade "
								target="_blank"
								rel="noreferrer"
								className="mr-4 text-light py-0"
							>
								<FontAwesomeIcon icon={faGithub} />
							</a>
						</div>
						<div>
							<a
								href="https://twitter.com/rohitgadade_123"
								target="_blank"
								rel="noreferrer"
								className="mr-4 text-light py-0"
							>
								<FontAwesomeIcon icon={faTwitter} />
							</a>
						</div>

						<div>
							<p className=" mr-4 mt-3 text-light text-decoration-none py-0">
								&copy; {new Date().getFullYear()} Copyright.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FooterPage;

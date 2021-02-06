import React from "react";
import "./styles/contact.scss";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactPage = () => {
	return (
		<div class="container-fluid">
			<div class="row " >
				<div  class="d-flex align-items-center justify-content-center mt-5 ">
					<div class="card shadow-lg  m-5 rounded bg-light mt-5">
						<div class="card-body-contact p-4">
						<legend class="text-center mt-3">
							<strong>Contact me</strong>
						</legend>
						<div class=" mb-1 mt-4">
							<p className="text-dark text-decoration-none text-center">
								<FontAwesomeIcon icon={faPhone} className="mr-2 " />: 7020019544
							</p>
						</div>
						<div class=" mb-4">
							<a
								href="mailto:rohitgadade1997@gmail.com"
								rel="noreferrer"
								className="text-dark text-decoration-none text-center"
							>
								<FontAwesomeIcon icon={faEnvelope} />: rohitgadade1997@gmail.com
							</a>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;

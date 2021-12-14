import React from "react";

const About = () => {
	return (
		<>
			<div className="container">
				<div className="row about">
					<div className="col-md-6 about-header d-flex justify-content-center align-items-center">
						<h1 className="text-center mt-lg-5">
							This is <br />
							<span className="dct">Vision Capital</span>
						</h1>
					</div>
					<div className="col-md-6 mt-lg-5 about-des d-flex justify-content-center align-items-center flex-column">
						<p>
							Vision Capital invests in firms that are focused on
							funding the innovation in the decentralization
							movement, we Help Projects to Grow & Increase Crypto
							adoption.
							<br />
							Our core mission is to become a great supporter for
							ambitious founders in blockchain who are building
							the foundation of the decentralized web.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;

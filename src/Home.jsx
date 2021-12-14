import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
	return (
		<>
			<div className="container">
				<div className="row mt-5">
					<div className="common col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
						<h1>Vision Capital</h1>
						<h2>
							A community-backed venture capital firm. We Invest &
							Incubate in Early Passionate Teams.
							<br /> Early Stage Supporters - Blockchain
							Investment Firm.
						</h2>
						<div className="mt-3">
							<a
								href="https://t.me/Vision_crypt0/"
								className="get-started "
							>
								Join us
							</a>
						</div>
					</div>
					<div className="common-img col-lg-6 order-1 order-lg-2 header-img">
						<img
							// src="https://image.freepik.com/free-vector/server-room-rack-blockchain-technology-token-api-access-data-center_39422-442.jpg"
							src="https://justpaste.it/img/small/f31ba80349a68280dce325e505910c58.png"
							alt="Blockchain"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;

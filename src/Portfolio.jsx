import React from "react";
import { NavLink } from "react-router-dom";
import Data from "./Data";
import Card from "./Card";

const Portfolio = () => {
	return (
		<>
			<h1 className="text-center">Our Portfolio</h1>
			<div className="container-fluid nav_bg mb-5">
				<div className="row">
					<div className="col-10 mx-auto">
						<div className="row gy-4 mt-5">
							{/* <Card */}
							{/* 	imgsrc={Data.imgsrc} */}
							{/* 	description={Data.description} */}
							{/* 	link={Data.link} */}
							{/* 	title={Data.title} */}
							{/* /> */}
							{Data.map((val, ind) => {
								return (
									<Card
										key={ind}
										imgsrc={val.imgsrc}
										title={val.title}
										description={val.description}
										link={val.link}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Portfolio;

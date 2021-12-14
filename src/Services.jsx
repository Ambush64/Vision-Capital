import React from "react";
import { NavLink } from "react-router-dom";
import Scard from "./Scard";
import Sdata from "./Sdata";

const Services = (props) => {
	return (
		<>
			<div className="container mt-lg-5 mt-1">
				<div className=" service row d-flex justify-content-center align-items-center">
					{Sdata.map((e, ind) => {
						return (
							<Scard
								key={ind}
								icon={e.icon}
								title={e.title}
								para={e.para}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Services;

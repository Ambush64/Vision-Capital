import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
	return (
		<>
			<div className="col-md-4 col-10 ">
				<div className="card">
					<div className="card-img d-flex justify-content-center pt-2">
						<img
							src={props.imgsrc}
							className="card-img-top"
							alt="..."
						/>
					</div>
					<div className="card-body">
						<h5 className="card-title font-weight-bold">
							{props.title}
						</h5>
						<p className="card-text">{props.description}</p>
						<a href={props.link} className="btn btn-primary">
							Learn More
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;

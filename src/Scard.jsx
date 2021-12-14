import React from "react";
import { NavLink } from "react-router-dom";
import Sdata from "./Sdata";
import ScienceIcon from "@mui/icons-material/Science";
import PsychologyIcon from "@mui/icons-material/Psychology";

const Scard = (props) => {
	return (
		<>
			<div className="col-md-3 col-6 service_grid gx-2 p-2 mt-2 mx-auto">
				<div className="icon">{props.icon}</div>
				<h2>{props.title}</h2>
				<p>{props.para}</p>
			</div>
		</>
	);
};

export default Scard;

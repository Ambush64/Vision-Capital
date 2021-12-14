import React from "react";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

const Sdata = [
	{
		icon: <PsychologyIcon sx={{ fontSize: 70 }} />,
		title: "Research & Analysis",
		para: "Fundamental and in-depth analysis of promising projects, Nothing is Perfect without Proper Research.",
	},
	{
		icon: <AccountBalanceWalletIcon sx={{ fontSize: 70 }} />,
		title: "Early Funding",
		para: "We fund the early seed stage startup, accelerate and connect with our networks to form strategic partnerships.",
	},
	{
		icon: <ConnectWithoutContactIcon sx={{ fontSize: 70 }} />,
		title: "Advisory",
		para: "We will consult network of contacts within all alliance of the crypto ecosystem allows for efficient transition from idea to realisation and beyond.",
	},
	{
		icon: <AddBusinessIcon sx={{ fontSize: 70 }} />,
		title: "Marketing",
		para: "We will connect to the right network for the maximum exposure for the project",
	},
];

export default Sdata;

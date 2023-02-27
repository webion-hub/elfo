import { Height } from "@mui/icons-material";
import { styled } from "@mui/material";

export const Section = styled('section')((props) => ({
	maxWidth: 1200,
	margin: "auto",
	marginTop: 100,

	[props.theme.breakpoints.up("xs")]: {
		paddingInline: 20,
	},
	[props.theme.breakpoints.up("sm")]: {
		paddingInline: 25,
	},
}));
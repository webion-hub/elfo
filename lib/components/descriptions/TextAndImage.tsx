import { Paper, Stack, Typography } from "@mui/material";
import Img from "../image/Img";
import TextAndDescriptionSideBar from "./TextAndDescriptionSideBar";
import { TitleAndDescriptionContent } from "./TitleAndDescriptionContent";

export default function TextAndImage(props: TitleAndDescriptionContent) {
	return (
		<Stack
			flexDirection="row"
			maxWidth="90%"
			width="100%"
			margin="auto"
		>
			<Paper
				sx={{
					height: '130px',
					position: 'relative',
					width: '60%',
					borderRadius: '2%'
				}} >
				<Img
					src={props.img!}
					alt={props.title}
					fill
					sx={{
						objectFit: "cover",
						borderRadius: '2%'
					}} />
			</Paper>
			<TextAndDescriptionSideBar
				data={props.data}
				title={props.title}
				text={props.text}
			/>
		</Stack>
	);
}
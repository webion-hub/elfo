import { Paper, Stack, Typography } from "@mui/material";
import Img from "./Img";

interface TitleAndImageContent {
	readonly title: string;
	readonly img: string;
}

export default function TitleAndImage(props: TitleAndImageContent) {
	return (
		<Stack>
			<Typography
				sx={{ paddingInline: '23px' }}
				variant="h4"
				component="h4"
				fontSize="16pt">{props.title}</Typography>
			<Stack>
				<Paper
					sx={{
						height: '68px',
						position: 'relative',
						width: '70%',
						margin: 'auto',
						borderRadius: '2%'
					}} >
					<Img
						src={props.img}
						alt={props.title}
						fill
						sx={{
							objectFit: "cover",
							borderRadius: '2%',
							cursor: "pointer"
						}} />
				</Paper>
			</Stack>
		</Stack>
	);
}
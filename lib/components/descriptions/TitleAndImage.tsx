import { Paper, Stack, Typography } from "@mui/material";
import { Images } from "../images/Images";
import Img from "../images/Img";



export default function TitleAndImage(props: Images) {
	return (
		<Stack>
			<Typography
				sx={{ paddingInline: '23px' }}
				variant="h4"
				component="h4"
				fontSize="16pt">{props.alt}</Typography>
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
						src={props.path}
						alt={props.alt}
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


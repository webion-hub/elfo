import { Box, Paper, Stack } from "@mui/material";
import Img from "./Img";
import TitleAndDescription from "./TitleAndDescription";
import { TitleAndDescriptionContent } from '@/lib/components/TitleAndDescriptionContent';
import { Section } from "./Section";



export default function AllSection(props: TitleAndDescriptionContent) {
	return (
			<Stack
				sx={{
					flexDirection: {
						xs: 'column-reverse',
						md: 'row'
					},
					maxWidth: '100%',
					width: '100%',
					height: '100%',
				}}>
				<Paper
					sx={{
						height: '500px',
						position: 'relative',
						width: {
							xs: '100%',
							md: '60%'
						},
						marginTop: 10,
						borderRadius: '2%',
						marginRight: 10
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
				<TitleAndDescription
					data = {props.data}
					title={props.title}
					text={props.text}
					action={props.action!}
					path={props.path!}
				/>
			</Stack>
	);
}
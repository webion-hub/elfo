import { Box, Paper, Stack } from "@mui/material";
import Img from "./Img";
import TitleAndDescription from "./TitleAndDescription";
import { TitleAndDescriptionContent } from '@/lib/components/TitleAndDescriptionContent';
import { Section } from "./Section";
import TextAndDescriptionBacheca from "./TextAndDescriptionBacheca";



export default function SectionBacheca(props: Partial<TitleAndDescriptionContent>) {
	return (
		<Stack
			sx={{
				flexDirection: {
					xs: 'column-reverse',
					md: 'row'
				},
				width: '100%',
				height: '100%',
			}}>
			{props.img ?
				<Paper
					sx={{
						height: '300px',
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
						alt={props.title!}
						fill
						sx={{
							objectFit: "cover",
							borderRadius: '2%'
						}} />
				</Paper> : null
			}
			<TextAndDescriptionBacheca
				title={props.title ?? ''}
				text={props.text ?? ''}
			/>
		</Stack>
	);
}
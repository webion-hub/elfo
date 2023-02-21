
import { TitleAndDescriptionContent } from "@/lib/components/TitleAndDescriptionContent";
import { Paper, Stack } from "@mui/material";
import AllSection from "./AllSection";
import ImageCard from "./ImageCard";
import Img from "./Img";


export default function PageDetails(props: TitleAndDescriptionContent) {
	return (
		<Stack
			sx={{
				flexDirection: 'column',
				maxWidth: '100%',
				width: '100%'
			}}
		>
			<AllSection
				data={props.data}
				img={props.img}
				title={props.title}
				text={props.text}
				action={props.action}
				path={props.path}
			/>

			<Stack
				sx={{
					flexDirection: {
						xs: 'column',
						md: 'row'
					},
					justifyContent: 'center',
					'& > *': {
						marginLeft: {
							xs: 0,
							md: 5
						}
					},
					maxWidth: '100%',
					width: '100%',
					height: '100%',
				}}
			>
				{props.i!.map((item) => (
					<ImageCard
						path={item.path}
						alt={item.alt}
					></ImageCard>
				))}
			</Stack>
		</Stack>
	)
}
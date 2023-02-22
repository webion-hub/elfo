
import { TitleAndDescriptionContent } from "@/lib/components/descriptions/TitleAndDescriptionContent";
import {Stack } from "@mui/material";
import AllSection from "./AllSection";
import SlideShow from "../image/SlideShow";


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
					justifyContent: 'center',
					maxWidth: '100%',
					width: '100%',
					height: '100%',
				}}
			>
				<SlideShow></SlideShow>
			</Stack>
		</Stack>
	)
}
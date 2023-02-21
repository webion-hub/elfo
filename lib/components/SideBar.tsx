import { Paper, Stack, Typography } from "@mui/material";
import ColoredLine from "./ColoredLine";
import Img from "./Img";

import { contentsSideBar } from "./ContentSideBar";
import TextAndImage from "./TextAndImage";
import TitleAndImage from "./TitleAndImage";

export default function SideBar() {
	return (
		<Stack
			flexDirection="column"
			maxWidth={'40%'}
			marginTop='85px'
			width="100%"
			height="100%"
			sx={{
				'& > *': {
					marginTop: '7px'
				},
				display: {
					xs: 'none',
					md: 'flex'
				},
				boxShadow: '2px 2px 3px 3px lightgray'
			}}

		>
			<TitleAndImage img="/assets/images/bannerR.jpeg" title="Sostienici"/>
			<TitleAndImage img="/assets/images/BannerQ.jpeg" title="Quaderno"/>
			<Typography sx={{ paddingInline: '23px' }} variant="h4" component="h4" fontSize="16pt">Progetti in atto</Typography>
			<Stack

				sx={{
					'& > *': {
						marginBottom: 4
					}
				}}>

				{contentsSideBar.slice(0, 3).map((item) => (
					<TextAndImage img={item.img} title={item.title} text={item.text}></TextAndImage>
				))}
			</Stack>
			<Typography sx={{ paddingInline: '23px' }} variant="h4" component="h4" fontSize="16pt">Calendario</Typography>
			<Stack
				sx={{
					'& > *': {
						marginBottom: 4
					}
				}}>
				{contentsSideBar.slice(3, 6).map((item) => (
					<TextAndImage data={item.data!} img={item.img} title={item.title} text={item.text}></TextAndImage>
				))}
			</Stack>

		</Stack>
	);
}

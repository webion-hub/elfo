import { Paper, Stack, Typography } from "@mui/material";
import ColoredLine from "../../other/ColoredLine";
import Img from "../../image/Img";

import { contentsSideBar } from "../sideBar/ContentSideBar";
import TextAndImage from "../../descriptions/TextAndImage";
import TitleAndImage from "../../descriptions/TitleAndImage";

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
			<TitleAndImage path="/assets/images/bannerR.jpeg" alt="Sostienici"/>
			<TitleAndImage path="/assets/images/BannerQ.jpeg" alt="Quaderno"/>
			<Typography sx={{ paddingInline: '23px' }} variant="h4" component="h4" fontSize="16pt">Progetti in atto</Typography>
			<Stack

				sx={{
					'& > *': {
						marginBottom: theme => theme.spacing(4, '!important')
					}
				}}>

				{contentsSideBar.slice(0, 3).map((item, index) => (
					<TextAndImage key={index} img={item.img} title={item.title} text={item.text}></TextAndImage>
				))}
			</Stack>
			<Typography sx={{ paddingInline: '23px' }} variant="h4" component="h4" fontSize="16pt">Calendario</Typography>
			<Stack
				sx={{
					'& > *': {
						marginBottom: theme => theme.spacing(4, '!important')
					}
				}}>
				{contentsSideBar.slice(3, 6).map((item, index) => (
					<TextAndImage key={index} data={item.data!} img={item.img} title={item.title} text={item.text}></TextAndImage>
				))}
			</Stack>

		</Stack>
	);
}

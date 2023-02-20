import { Box, Button, Stack, Typography } from "@mui/material";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import Img from "./Img";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNextNavigator } from "@/hooks/useNextNavigator";

interface ContentFooterAction {
	readonly iban: string;
}

export default function FooterAction(props: ContentFooterAction) {
	const { clickNavigate } = useNextNavigator();
	return (
		<Stack>
			<Box
				width={180}
				height={100}
				position="relative"
			>
				<Img
					src="/assets/images/elfoavventure.png"
					alt="logo"
					fill
					sx={{ objectFit: "contain" }} />
			</Box>
			<Typography
				variant='subtitle1'
				component='p'
			>
				IBAN: {props.iban}
			</Typography>
			<Button
				color="primary"
				variant="contained"
				size='small'
				endIcon={<FavoriteIcon />}
			>
				Dona
			</Button>
			<Box
				width={180}
				height={100}
				position="relative"
			>
				<Img
					src="/assets/images/bannerR.jpeg"
					alt="logo2"
					fill
					onClick={clickNavigate("/sostienici")}
					sx={{ objectFit: "contain" }} />
			</Box>
		</Stack>
	);
}


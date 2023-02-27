import { IconButton, Stack, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNextNavigator } from "@/hooks/useNextNavigator";

export default function Social() {

	const {clickNavigate} = useNextNavigator();
	return (
		<Stack>
			<Typography
				variant='h3'
				component='h3'
			>
				Social
			</Typography>
			<Stack
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					marginTop: '15px'
				}}
			>
				<IconButton color="inherit" aria-label="facebookIcon" onClick={clickNavigate("https://www.facebook.com/elfoavventure.pagina")}><FacebookIcon fontSize="large" /></IconButton>
				<IconButton color="inherit"  arial-label="instagramIcon" onClick={clickNavigate("https://www.instagram.com/elfoavventure/")}><InstagramIcon fontSize="large" /></IconButton>
			</Stack>
		</Stack>
	);
}
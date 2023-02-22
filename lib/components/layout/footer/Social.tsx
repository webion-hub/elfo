import { IconButton, Stack, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Social() {
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
				<IconButton color="inherit" aria-label="facebookIcon"><FacebookIcon fontSize="large" /></IconButton>
				<IconButton color="inherit"  arial-label="instagramIcon"><InstagramIcon fontSize="large" /></IconButton>
			</Stack>
		</Stack>
	);
}
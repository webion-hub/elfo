import { IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Form from "../contact/Form";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function ContactUs() {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<Stack
			sx={{
				flexDirection: {
					xs: 'column',
					md: 'row',
				},
				maxWidth: '100%',
				width: '100%',
				height: '100%'
			}}>
			<Stack
				sx={{
					marginRight: {
						xs: 0,
						md: 20
					},
					width: {
						xs: '100%',
						md: '70%'
					},
					'& > *': {
						textAlign: {
							xs: 'center',
							md: 'left'
						}
					}

				}} >
				<Typography
					variant={isMd ? 'h2' : 'h3'}
					component="h2"
					sx={{
						fontSize: {
							xs: '35pt',
							md: '40pt'
						},
					}}
				>
					Contattaci
				</Typography>
				<Typography
					variant="subtitle2"
					component="p"
				>
					Siamo convinti che dhjdshfuhsdiofhsdoifhiosdhf iosdhiofhdifhjhvjdhfdshf dfdfdfdfdfdffdiuo dfhiodhfudshfuhsdpfhdspfhspdhfpa
				</Typography>
				<Stack sx={{
					display: 'flex',
					flexDirection: 'row',
					marginTop: '15px',
					justifyContent: {
						xs: 'center',
						md: 'left'
					}
				}}>
					<IconButton color="inherit"><FacebookIcon fontSize="large" /></IconButton>
					<IconButton color="inherit"><InstagramIcon fontSize="large" /></IconButton>
				</Stack>
			</Stack>
			<Form />
		</Stack>
	);
} 
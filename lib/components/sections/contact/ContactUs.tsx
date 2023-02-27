import { IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Form from "../contact/Form";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNextNavigator } from "@/hooks/useNextNavigator";

export default function ContactUs() {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'));

	const { clickNavigate } = useNextNavigator()

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
			<Stack spacing={2}
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
					Per comunicare con Elfo Avventure utilizzate i campi sottostanti, i vostri dati non saranno resi pubblici e non riceverete email indesiderate se non dietro esplicita richiesta.
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
					<IconButton color="inherit" onClick={clickNavigate("https://www.facebook.com/elfoavventure.pagina")}><FacebookIcon fontSize="large" /></IconButton>
					<IconButton color="inherit" onClick={clickNavigate("https://www.instagram.com/elfoavventure/")}><InstagramIcon fontSize="large" /></IconButton>
				</Stack>
			</Stack>
			<Form />
		</Stack>
	);
} 
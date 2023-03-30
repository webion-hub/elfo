
import PaginationCardAdozioni from '@/lib/components/cards/PaginationCardAdozioni';
import { Section } from '@/lib/components/layout/Section'
import { Typography, useMediaQuery, useTheme } from '@mui/material'



export default function Notizie() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

	return (
	  <Section>
		   <Typography
				   textAlign={"center"}
				   variant={isMd ? 'h2' : 'h3'}
				   component="h1"
				   sx={{
					   fontSize: {
						  xs: '35pt',
						  md: '40pt'
					   }
				   }}
			   >
				    Adozioni
			   </Typography>
			 <PaginationCardAdozioni pageSize={10}></PaginationCardAdozioni>
		</Section>
	)
}
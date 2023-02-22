import PaginationCard from '@/lib/components/cards/PaginationCard'
import { Section } from '@/lib/components/layout/Section'
import { contentNotizie } from '@/lib/components/other/ContentsNotizie'
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
				Notizie
			</Typography>
			<PaginationCard count={Math.ceil(contentNotizie.length / 10)}></PaginationCard>
		</Section>
	)
}
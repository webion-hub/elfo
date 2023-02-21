import PaginationCard from '@/lib/components/PaginationCard'
import { Section } from '@/lib/components/Section'
import { contentNotizie } from '@/lib/components/ContentsNotizie'
import { Typography } from '@mui/material'


export default function Notizie() {
	return (

		<Section>
			<Typography textAlign={"center"} variant="h2" component="h2">Notizie</Typography>
			<PaginationCard count={Math.ceil(contentNotizie.length / 10)}></PaginationCard>
		</Section>
	)
}
import PaginationCard from '@/lib/components/PaginationCard'
import { Section } from '@/lib/components/Section'
import { contentNotizie } from '@/lib/components/ContentsNotizie'


export default function Notizie() {
	return (

		<Section>
			<PaginationCard count={Math.ceil(contentNotizie.length / 10)}></PaginationCard>
		</Section>
	)
}
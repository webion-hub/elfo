import PaginationCard from '@/components/PaginationCard'
import { Section } from '@/components/Section'
import { contentNotizie, contentsBigCard } from '@/lib/ContentBigElfoCard'


contentNotizie

export default function Notizie() {
  return (

      <Section>
        <PaginationCard count={Math.ceil(contentNotizie.length / 10)}></PaginationCard>
      </Section>
  )
}
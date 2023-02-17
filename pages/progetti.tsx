
import PaginationCard from '@/components/PaginationCard'
import { Section } from '@/components/Section'
import { contentProgetti } from '@/lib/ContentBigElfoCard'

contentProgetti

export default function Progetti() {
  return (

      <Section>
        <PaginationCard count={Math.ceil(contentProgetti.length / 10)}></PaginationCard>
      </Section>
  )
}
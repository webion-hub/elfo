import BigElfoCard from '@/components/BigElfoCard'
import ElfoCard from '@/components/ElfoCard'
import HeroSection from '@/components/HeroSection'
import { Section } from '@/components/Section'
import { contentsBigCard } from '@/lib/ContentBigElfoCard'
import { contentsCard } from '@/lib/ContentCard'
import { Box, Button, Stack, Typography } from '@mui/material'


export default function Home() {
  return (
    <>
      <Section
        sx={{
          maxWidth: '100vw !important',
          width: '100vw',
          marginTop: theme => theme.mixins.toolbar.minHeight + 'px',
          background: theme => theme.palette.background.paper,
        }}
      >
        <Box
          sx={{
            maxWidth: 1200,
            height: 800, 
            margin: 'auto',
          }}
        >
          <HeroSection></HeroSection>
        </Box>
      </Section>
      <Section>
          <Typography textAlign={'center'} variant="h2" component="h2">Notizie</Typography>
          <Stack direction="column" alignItems={"center"} sx={{
            '& > *': {
              margin: 5,
            },
          }} paddingTop={10}  paddingBottom={10}>
              {contentsBigCard.map((cb, i) =>
                <BigElfoCard img={cb.img} data={cb.data} title={cb.title} text={cb.title}></BigElfoCard>
              )}
              <Button sx={{border: "1px solid"}}>leggi le altre notizie</Button>
          </Stack>
      </Section>
      <Section>
        <Typography textAlign={'center'} variant="h2" component="h2">Adozioni</Typography>
        <Stack direction={'row'} flexWrap="wrap" justifyContent={'center'} paddingTop={10}  paddingBottom={10} sx={{
          "& > *": {
            maxWidth: 330,
            margin: 3
          }
        }}>
          {contentsCard.map((c, i) => 
            <ElfoCard img={c.img} title={c.title} text={c.text}></ElfoCard>
          )}
        </Stack>
      </Section>
    </>
  )
}

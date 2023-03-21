import BigElfoCard from '@/lib/components/cards/BigElfoCard/BigElfoCard'
import { Section } from '@/lib/components/layout/Section'
import { calendar } from '@/lib/components/other/ContentsCalendar'
import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { trimDescriptions } from '.';


export default function Calendar() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const arr = trimDescriptions(calendar)

  return (
    <Section>
      <Typography
        textAlign={'center'}
        variant={isMd ? 'h2' : 'h3'}
        component="h1"
        sx={{
          fontSize: {
            xs: '35pt',
            md: '40pt'
          }
        }}
      >
        Calendario
      </Typography>
      <Stack
        direction="column"
        alignItems={"center"}
        sx={{
          '& > *': {
            marginTop: 5,
          },
        }}>
        {arr.map((cb, i) =>
          <BigElfoCard
            key={i}
            img={cb.img}
            data={cb.data}
            title={cb.title}
            text={cb.text}
          />
        )}
      </Stack>
    </Section>
  );
}


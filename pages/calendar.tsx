import BigElfoCard from '@/components/BigElfoCard'
import { Section } from '@/components/Section'
import { calendar } from '@/lib/ContentBigElfoCard'
import {Stack, Typography } from '@mui/material'

calendar

export default function Calendar() {
    return (
            <Section>
                <Typography textAlign={'center'} variant="h2" component="h2">Calendario</Typography>
                <Stack direction="column" alignItems={"center"} sx={{
                    '& > *': {
                    margin: 5,
                    },
                }} paddingTop={10}  paddingBottom={10}>
                    {calendar.map((cb, i) =>
                        <BigElfoCard img={cb.img} data={cb.data} title={cb.title} text={cb.title}></BigElfoCard>
                    )}
                </Stack>
            </Section>
    );}


import BigElfoCard from '@/lib/components/BigElfoCard'
import { Section } from '@/lib/components/Section'
import { calendar } from '@/lib/components/ContentsCalendar'
import { Stack, Typography } from '@mui/material'

calendar

export default function Calendar() {
	return (
		<Section>
			<Typography
				textAlign={'center'}
				variant="h2"
				component="h2"
			>
				Calendario
			</Typography>
			<Stack
				direction="column"
				alignItems={"center"}
				sx={{
					'& > *': {
						margin: 5,
					},
				}}
				paddingTop={3}
				paddingBottom={3}>
				{calendar.map((cb, i) =>
					<BigElfoCard
						img={cb.img}
						data={cb.data}
						title={cb.title}
						text={cb.title}
					/>
				)}
			</Stack>
		</Section>
	);
}


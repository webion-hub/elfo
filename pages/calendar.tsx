import BigElfoCard from '@/lib/components/cards/BigElfoCard/BigElfoCard'
import { Section } from '@/lib/components/layout/Section'
import { calendar } from '@/lib/components/other/ContentsCalendar'
import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material'


export default function Calendar() {

	const theme = useTheme();

	const isMd = useMediaQuery(theme.breakpoints.up('md'));

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
				{calendar.map((cb, i) =>
					<BigElfoCard
						key={i}
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


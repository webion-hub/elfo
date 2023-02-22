import BigElfoCard from '@/lib/components/cards/BigElfoCard/BigElfoCard'
import ElfoCard from '@/lib/components/cards/ElfoCard/ElfoCard'
import HeroSection from '@/lib/components/sections/HeroSection'
import { Section } from '@/lib/components/layout/Section'
import { contentsBigCard } from '@/lib/components/cards/BigElfoCard/ContentsBigEfloCard'
import { contentCard } from '@/lib/components/cards/ElfoCard/ContentsCard'
import { Box, Button, Stack, Typography } from '@mui/material'
import SideBar from '@/lib/components/layout/sideBar/SideBar'


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
				<Typography
					textAlign={'center'}
					variant="h2"
					component="h2"
				>
					Notizie
				</Typography>
				<Stack
					flexDirection={'row'}>
					<Stack
						direction="column"
						alignItems={"center"}

						sx={{
							marginRight: {
								xs: 0,
								md: 5
							},
							width: '100%'
						}}

						spacing={{
							xs: 1,
							sm: 3
						}}
						paddingTop={10}
						paddingBottom={10}>
						{contentsBigCard.map((cb, i) =>
							<BigElfoCard
								key={i}
								img={cb.img}
								data={cb.data}
								title={cb.title}
								text={cb.text}
							/>

						)}
					</Stack>
					<SideBar></SideBar>
				</Stack>
				<Box
					width="100%"
					sx={{
						display: 'flex',
						justifyContent: 'center'
					}}
				>

					<Button
						variant="contained"
						sx={{ border: "1px solid" }}
					>
						leggi le altre notizie
					</Button>
				</Box>
			</Section>
			<Section>
				<Typography
					textAlign={'center'}
					variant="h2"
					component="h2"
				>
					Adozioni
				</Typography>
				<Stack
					direction={'row'}
					flexWrap="wrap"
					justifyContent={'center'}
					paddingTop={10}
					paddingBottom={10}
					sx={{
						"& > *": {
							maxWidth: 330,
							margin: 2,
						}
					}}>
					{contentCard.map((c, i) =>
						<ElfoCard
							key={i}
							img={c.img}
							title={c.title}
							text={c.text}
						/>
					)}
				</Stack>
			</Section>
		</>
	)
}

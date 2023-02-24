import BigElfoCard from '@/lib/components/cards/BigElfoCard/BigElfoCard'
import ElfoCard from '@/lib/components/cards/ElfoCard/ElfoCard'
import HeroSection from '@/lib/components/sections/HeroSection'
import { Section } from '@/lib/components/layout/Section'
import { contentsBigCard } from '@/lib/components/cards/BigElfoCard/ContentsBigEfloCard'
import { contentCard } from '@/lib/components/cards/ElfoCard/ContentsCard'
import { Box, Button, Stack, Typography } from '@mui/material'
import SideBar from '@/lib/components/layout/sideBar/SideBar'
import { useEffect } from 'react'
import CardSlider from '@/lib/components/other/CardSlider'
import { TitleAndDescriptionContent } from '@/lib/components/descriptions/TitleAndDescriptionContent'


export const changeText = (array1: TitleAndDescriptionContent[], array2: TitleAndDescriptionContent[]) => {
	let i : number;
	for(i= 0; i < array2.length; i++){
		array1[i] = {...array2[i]};
		
		if(array1[i].text.length > 150)
			array1[i].text = array1[i].text.substring(0, 150) + "...";
		
	}
}


export default function Home() {
	const arr : TitleAndDescriptionContent[] = [];
	const arr2 : TitleAndDescriptionContent[] = []



	changeText(arr, contentsBigCard)
	changeText(arr2, contentCard)

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
						sx={{ 
							padding: 1.5,
							border: "0px" ,
							transition: "0.3s",
							"&:hover":
							{
								backgroundColor: 'blue',
								boxShadow: theme => ({
									xs: 'none',
									lg: theme.shadows[10]})
							}
					}}
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
					{arr2.map((c, i) =>
						<ElfoCard
							key={i}
							img={c.img}
							title={c.title}
							text={c.text}
						/>
					)}
				</Stack>
			</Section>
			<Section>
				<Typography
						textAlign={'center'}
						variant="h2"
						component="h2"
						paddingTop={10}
						paddingBottom={10}
					>
						Siti amici
					</Typography>
				<CardSlider></CardSlider>
			</Section>
		</>
	)
}

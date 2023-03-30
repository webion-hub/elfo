import BigElfoCard from '@/lib/components/cards/BigElfoCard/BigElfoCard'
import ElfoCard from '@/lib/components/cards/ElfoCard/ElfoCard'
import HeroSection from '@/lib/components/sections/HeroSection'
import { Section } from '@/lib/components/layout/Section'
import { contentsBigCard } from '@/lib/components/cards/BigElfoCard/ContentsBigEfloCard'
import { contentCard } from '@/lib/components/cards/ElfoCard/ContentsCard'
import { Box, Button, Stack, Typography } from '@mui/material'
import SideBar from '@/lib/components/layout/sideBar/SideBar'
import CardSlider from '@/lib/components/other/CardSlider'
import { TitleAndDescriptionContent } from '@/lib/components/descriptions/TitleAndDescriptionContent'
import { useEffect, useState } from 'react'
import { GetArticlesResponse } from './api/articles'
import { Article } from './api/articles'
import { Adoption, GetAdoptionsResponse } from './api/adoptions'
import { useNextNavigator } from '@/hooks/useNextNavigator'


export const trimDescriptions = (arr: TitleAndDescriptionContent[]) => {
  return arr.map(e => ({
    ...e,
    text: e.text.length > 150
      ? e.text.substring(0, 150) + "..."
      : e.text,
  }));
}

interface NArticle {
	id: number
}

export default function Home(props: NArticle) {
	const arr = trimDescriptions(contentsBigCard);
	const arr2 = trimDescriptions(contentCard);
	const [articles, setarticles] = useState<Article[]>([]);
	const [adoptions, setadoptions] = useState<Adoption[]>([]);
	const { clickNavigate } = useNextNavigator();

  useEffect(() => {
	  fetch('/api/articles?page=1&pageSize=5')
	    .then(r => r.json())
			.then((r: GetArticlesResponse) => {
				setarticles(r.articles)
			});
  },[])

	useEffect(() => {
		fetch('/api/adoptions?page=1&pageSize=5')
		.then(r => r.json()).then((r: GetAdoptionsResponse) => {
			setadoptions(r.adoptions)
		});
	}, [])

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
						{articles.map((cb, i) =>
							<BigElfoCard
								key={i}
								img={cb.cover}
								data={new Date(cb.publishDate).toLocaleDateString()}
								title={cb.title}
								text={cb.text}
								path={cb.id.toString()}
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
						onClick={clickNavigate(`/notizie`)}
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
					{adoptions.map((c, i) =>
						<ElfoCard
							key={i}
							img={c.cover}
							title={c.name}
							text={c.text}
							path={c.id.toString()}
						/>
					)}
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
						onClick={clickNavigate(`/notizie`)}
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
						continua a leggere
					</Button>
				</Box>
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



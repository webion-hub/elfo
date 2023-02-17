
import { ContentBigElfoCard } from "@/lib/ContentBigElfoCard";
import { BorderAll } from "@mui/icons-material";
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Chip, Stack, SxProps, Theme } from "@mui/material";

interface BigElfoCardProps extends ContentBigElfoCard {
	sx?: SxProps<Theme>
}

export default function BigElfoCard(props: BigElfoCardProps)
{

	return (
		<Stack
			component={Card}
			direction={{ xs: 'column', md: 'row' }}
			sx={{
				maxWidth: "800px",
				width: "100%",
				borderRadius: '2%',
				...props.sx
			}}

			border='1px solid #E6E4E4'
		>

			<CardMedia
				component="img"
				image= {props.img}
				alt="green iguana"
				sx={{
					maxWidth: { xs: 'auto', md: 250 },
					height: { xs: 200, md: 'auto' },
					width: '100%'
				}}
				>
			</CardMedia>
			<Stack
				direction="column"
			>
				<CardContent>
					<Chip label={props.data} />
					<Typography gutterBottom variant="h5" component="div" fontSize={40}>
							{props.title}
					</Typography>
					<Typography variant="body2" color="text.secondary" fontSize={16}>
							{props.text}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" color="primary" variant="contained">
							scopri di più
					</Button>
				</CardActions>
			</Stack>
		</Stack>
	);
}
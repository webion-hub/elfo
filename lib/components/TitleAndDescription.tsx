import { Box, Button, Chip, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { TitleAndDescriptionContent } from '@/lib/components/TitleAndDescriptionContent';
import { useNextNavigator } from '@/hooks/useNextNavigator';

export default function TextAndDescription(props: TitleAndDescriptionContent) {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'));
	const { clickNavigate } = useNextNavigator();

	console.log(props.path)

	return (
		<Stack
			margin="auto"
			sx={{
				'& > *': {
					marginBottom: {
						xs: 2,
						md: 0
					}
				},
				width: {
					xs: '100%',
					md: '80%'
				}
			}}>
			{props.data ? <Chip variant="outlined" label={props.data!} /> : null}
			<Typography
				variant={isMd ? 'h2' : 'h3'}
				component='h1'
				sx={{ marginTop: theme => theme.mixins.toolbar.minHeight + 'px' }}
			>
				{props.title}
			</Typography>
			<Typography
				variant='subtitle1'
				component='p'
			>
				{props.text}
			</Typography>
			{(props.action != null && props.path != null)  ? <Button endIcon={<FavoriteIcon />} color="primary" variant="contained" onClick={clickNavigate(props.path!)}>  {props.action!} </Button> : null}
		</Stack>
	);
}



// }
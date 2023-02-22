import { Box, Button, Chip, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { TitleAndDescriptionContent } from '@/lib/components/descriptions/TitleAndDescriptionContent';
import { useNextNavigator } from '@/hooks/useNextNavigator';

export default function TextAndDescriptionSideBar(props: TitleAndDescriptionContent) {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'));
	const { clickNavigate } = useNextNavigator();


	return (
		<Stack
			marginLeft="5px"
			sx={{
				'& > *': {
					marginBottom: {
						xs: 2,
						md: 0
					}
				},
				width: {
					xs: '100%',
					md: '100%'
				}
			}}>
			{props.data ? <><Chip variant="outlined" sx={{ width: '60%' }} size="small" label={props.data!} /></>: null}
			<Typography
				variant={isMd ? 'h2' : 'h3'}
				component='h3'
				fontSize="11pt"
				sx={{
					fontWeight: "bold",
					marginTop: "4px"
				}}
			>
				{props.title}
			</Typography>
			<Typography
				variant='subtitle1'
				component='p'
				fontSize="10pt"
				
			>
				{props.text}
			</Typography>
			{(props.action != null && props.path != null) ? <Button endIcon={<FavoriteIcon />} color="primary" variant="contained" onClick={clickNavigate(props.path!)}>  {props.action!} </Button> : null}
		</Stack>
	);
}
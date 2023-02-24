import { Typography, Stack, useTheme, useMediaQuery, Chip } from "@mui/material";
import { TitleAndDescriptionContent } from "./TitleAndDescriptionContent";
import { useNextNavigator } from '@/hooks/useNextNavigator';


export default function TextAndDescriptionBacheca(props: TitleAndDescriptionContent) {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'));
	const { clickNavigate } = useNextNavigator();


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
				width: '100%'
			}}>
			<Typography
				variant={isMd ? 'h3' : 'h4'}
				component='h1'
        fontSize="12pt"
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
		</Stack>
	);
}

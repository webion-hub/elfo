import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface TextAndDescriptionContent
{
    title: string;
    text: string;
    action?: string;
}
export default function TextAndDescription(props: TextAndDescriptionContent){
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    return(
        <Box margin="auto" sx={{
            '& > *': {
                marginBottom: {
                    xs: 2,
                    md: 0
                }
            }
        }}>
            <Typography variant={isMd ? 'h2' : 'h3'} component='h1' sx={{marginTop: theme => theme.mixins.toolbar.minHeight + 'px'}}>{props.title}</Typography>
            <Typography variant='subtitle1' component='p'>{props.text}</Typography>
            {props.action ? <Button endIcon={<FavoriteIcon/>} color="primary" variant="contained">  {props.action!} </Button> : null}
        </Box>
    );
    }

// }
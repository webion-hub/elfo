import { Box, Button, Chip, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { TitleAndDescriptionContent } from '@/lib/components/descriptions/TitleAndDescriptionContent';
import { useNextNavigator } from '@/hooks/useNextNavigator';

export default function TitleAndDescription(props: TitleAndDescriptionContent) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const { clickNavigate } = useNextNavigator();



  return (
    <Stack
      margin="auto"
      spacing={2}
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
        component='h2'
        sx={{
          marginTop: theme => theme.mixins.toolbar.minHeight + 'px',
          fontSize: {
            xs: '35pt',
            md: '40pt'
          }
        }}
      >
        {props.title}
      </Typography>
      <Typography
        variant='subtitle1'
        component='p'
      >
        {props.text}
      </Typography>
      {(props.action != null && props.path != null) 
        ? <Button endIcon={<FavoriteIcon />} 
      sx={{
        transition: "0.3s", 
        "&:hover": {
          backgroundColor: 'blue', 
          boxShadow: theme => ({
            xs: 'none',
            lg: theme.shadows[10]
          })
        }, 
        width: '180px', 
        padding: 1.5
      }} color="primary" variant="contained" onClick={clickNavigate(props.path!)}>  {props.action!} </Button> : null}
    </Stack>
  );
}



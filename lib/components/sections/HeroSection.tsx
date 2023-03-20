import { Paper, Stack } from '@mui/material';
import * as React from 'react';
import Img from '../images/Img';
import TitleAndDescription from '../descriptions/TitleAndDescription';
import { NextImg } from '../other/NextImg';


export default function HeroSection() {
  return (
    <Stack
      sx={{
        flexDirection: {
          xs: 'column',
          md: 'row'
        },
        maxWidth: '100%',
        width: '100%',
        height: '100%'
      }} >
      <TitleAndDescription
        title="Adozioni a distanza e progetti di aiuto e sostegno"
        text='Siamo convinti che "Se cresce la cultura, cresce la pace", per questo la nostra associazione no-profit sostiene gli studi e cerca di migliorare le vite dei piu sfortunati.'
        action="Dona"
        path="/sostienici"
      />
      <Paper
        sx={{
          height: '650px',
          position: 'relative',
          width: '100%',
          borderRadius: '2%',
          marginLeft: {
            xs: 0,
            md: 5
          },
          marginTop: {
            xs: 3,
            md: 10
          }
        }} >
        <NextImg
          src="/assets/images/image 2.png"
          alt="hero section image"
          fill
          sx={{
            objectFit: "cover",
            borderRadius: '2%'
          }} />
      </Paper>
    </Stack>
  );
}
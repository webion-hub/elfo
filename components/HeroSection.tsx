import { Paper, Stack, Box } from '@mui/material';
import * as React from 'react';
import Img from './Img';
import TitleAndDescription from './TitleAndDescription';


export default function HeroSection()
{
    return(
        <Stack sx={{
            flexDirection: {xs: 'column', md: 'row'}, maxWidth: '100%', width: '100%', height: '100%'
        }} >
            <TitleAndDescription title="Adozioni a distanza e progetti di aiuto e sostegno" text='Siamo convinti che "Se cresce la cultura, cresce la pace", per questo la nostra associazione no-profit sostiene gli studi e cerca di migliorare le vite dei piu sfortunati.' action="Dona"></TitleAndDescription>
            <Paper sx={{ height: '650px', position: 'relative', width: '100%', marginTop: 10, borderRadius: '2%'}} >
                 <Img src="/assets/images/image 2.png" alt="..." fill sx={{ objectFit: "cover", borderRadius: '2%'}}/>
            </Paper>
        </Stack>
    );
}
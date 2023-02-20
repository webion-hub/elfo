import { IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Form from "./Form";
import { Section } from "./Section";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { BorderRight } from "@mui/icons-material";

export default function ContactUs() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Stack
      sx={{
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        maxWidth: '100%',
        width: '100%',
        height: '100%'
      }}>
      <Stack
        sx={{
          marginRight: {
            xs: 0,
            md: 20
          },
          width: {
            xs: '100%',
            md: '70%'
          }

        }} >
        <Typography
          variant={isMd ? 'h2' : 'h3'}
          component="h1"
        >
          Contattaci
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
        >
          Siamo convinti che "Se cresceiorare le vite dei piu sfortunati iamo convinti che "Se cresce la cultura, cresce la pace", per questo la nostra associazione no-profit sostiene gli studi e cerca di migliorare le vite dei piu sfortunati, iamo convinti che "Se cresce la cultura, cresce la pace", per questo la nostra associazione no-profit sostiene gli studi e cerca di migliorare le vite dei piu sfortunati, iamo convinti che "Se cresce la cultura, cresce la pace", per questo la nostra associazione no-profit sostiene gli studi e cerca di migliorare le vite dei piu sfortunati, iamo convinti che "Se cresce la cultura, cresce la pace", per questo la nostra associazione no-profit sostiene gli studi e cerca di migliorare le vite dei piu sfortunati, iamo convinti che "Se cresce la cultura, cresce la pace", per questo la nostra associazione no-profit sostiene gli studi e cerca di migliorare le vite dei piu sfortunati, iamo convinti che "Se cresce la cultura, cresce la pace", per questo la nostra associazione no-profit sostiene gli studi e cerca di migliorare le vite dei piu sfortunati
        </Typography>
        <Stack sx={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '15px',
          justifyContent: {
            xs: 'center',
            md: 'left'
          }
        }}>
          <IconButton color="inherit"><FacebookIcon fontSize="large" /></IconButton>
          <IconButton color="inherit"><InstagramIcon fontSize="large" /></IconButton>
        </Stack>
      </Stack>
      <Form />
    </Stack>
  );
}
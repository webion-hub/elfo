import { createTheme, GlobalStyles, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import ResponsiveAppBar from '@/lib/components/layout/appBar/ResponsiveAppBar'
import Footer from '@/lib/components/layout/footer/Footer';
import Head from 'next/head';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(37 99 235)',
      contrastText: '#fff'
    },
    secondary:
    {
      main: "#fff",
      contrastText: 'black'
    },
    info: {
      main: '#646377'
    },
    background: {
      default: '#fff',
      paper: '#F4FCFE',
    }

    
  },


  typography: {
    fontFamily: [
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Noto Sans"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"'

    ].join(','),
    h2: {
      fontWeight: "bold"
    },
    h5: {
      fontWeight: "bold"
    }
   
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles 
        styles={{
          "body": {
            background: theme.palette.background.default,
            fontFamily: theme.typography.fontFamily
          },
          

        }}
      />
      <Head>
        <title>Elfoavventure</title>
      </Head>
      <ResponsiveAppBar/>
      <Component {...pageProps} />
      <Footer></Footer>
    </ThemeProvider>
  )
}

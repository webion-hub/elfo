import { createTheme, GlobalStyles, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import ResponsiveAppBar from '@/lib/components/ResponsiveAppBar'
import Footer from '@/lib/components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#196BA8',
      contrastText: '#fff'
    },
    info: {
      main: '#646377'
    },
    background: {
      default: '#fff',
      paper: '#F4FCFE'
    }

    
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles 
        styles={{
          "body": {
            background: theme.palette.background.default
          }
        }}
      />
      <ResponsiveAppBar/>
      <Component {...pageProps} />
      <Footer></Footer>
    </ThemeProvider>
  )
}

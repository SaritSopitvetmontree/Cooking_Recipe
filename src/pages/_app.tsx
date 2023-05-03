import { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import { Container } from '@mui/material';

const theme = createTheme();

export default function MyApp({ Component, pageProps } : AppProps) {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar />
      <SideBar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
  
}
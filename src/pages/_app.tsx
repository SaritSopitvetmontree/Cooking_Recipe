import { AppProps } from 'next/app';
import { CssBaseline, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import { Container } from '@mui/material';

const theme = createTheme();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar />
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={12} sm={4} md={3}>
            <SideBar />
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Component {...pageProps} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialUIThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import { CssBaseline, Container } from '@material-ui/core';
import theme from '../styles/theme';
import AppHeader from '../components/app-header';
import AppFooter from '../components/app-footer';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const jssStyles: Element | null = document.querySelector(
      '#jss-server-side',
    );
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <StylesProvider injectFirst>
      <MaterialUIThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <CssBaseline />
          <AppHeader></AppHeader>
          <Container maxWidth="sm">
            <div className="g-spacer"></div>
            <Component {...pageProps} />
            <div className="g-spacer-t"></div>
          </Container>
          <AppFooter></AppFooter>
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>
    </StylesProvider>
  );
};

export default App;

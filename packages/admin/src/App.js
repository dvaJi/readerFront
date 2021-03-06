import React from 'react';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'react-intl';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { CDN } from './config';
import setupIcons from './setupIcons';
import Routes from './Routes';
import Header from './layout/header';
import { useGlobalState } from './state';
import translations from '@readerfront/shared/build/lang';
import { theme as rfTheme } from '@readerfront/ui';

const { primaryColor, bodyColor, bodyBackgroundColor, scrollBackground } =
  rfTheme;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${bodyBackgroundColor} !important;
    color: ${bodyColor} !important;
  }

  a {
    color: ${primaryColor} !important;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${scrollBackground};
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: ${primaryColor};
    }
  }

  .show-loading-animation {
    animation: react-placeholder-pulse 1.5s infinite;
  }
  
  @keyframes react-placeholder-pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
`;

setupIcons();

function App() {
  const [themeSelected] = useGlobalState('theme');
  const [language] = useGlobalState('language');
  return (
    <IntlProvider locale={language} messages={translations[language]}>
      <ThemeProvider theme={{ mode: themeSelected }}>
        <>
          <GlobalStyle />
          <Helmet defer={false}>
            {CDN === 'photon' && <link rel="preconnect" href="//i0.wp.com" />}
            {CDN === 'photon' && <link rel="preconnect" href="//i1.wp.com" />}
            {CDN === 'photon' && <link rel="preconnect" href="//i2.wp.com" />}
          </Helmet>
          <div className="App">
            <Header />
            {Routes}
          </div>
        </>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;

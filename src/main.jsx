import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Home } from './view/Home';
// import { Details } from './view/Details';
// import { SignIn } from './view/SignIn';
// import { SignUp } from './view/SignUp';
// import { Profile } from './view/Profile';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
)

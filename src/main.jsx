import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
// import { SignIn } from './view/SignIn';
// import { SignUp } from './view/SignUp';
// import { Home } from './view/Home';
import { New } from './view/New';
// import { Details } from './view/Details';
// import { Profile } from './view/Profile';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <New />
    </ThemeProvider>
  </React.StrictMode>
)

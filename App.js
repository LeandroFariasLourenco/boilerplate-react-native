import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import Routes from '@Routes';
import theme from '@Theme';
import store from '@Store';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>
);

export default App;

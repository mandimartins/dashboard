import React from 'react';

import { ThemeProvider } from 'styled-components';

import Layout from './Components/Layout';
import Dashboad from './Pages/Dashboard';
import List from './Pages/List';
import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <List />
      </Layout>
    </ThemeProvider>
  );
};

export default App;

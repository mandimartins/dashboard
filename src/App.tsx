import React from 'react';

import Dashboad from './Pages/Dashboard';

import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Dashboad />
    </>
  );
};

export default App;

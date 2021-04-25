import React from "react";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;

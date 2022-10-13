import React from "react";
import { createBrowserHistory } from "history";
import Routes, { Navigator } from "./routes";
import { ThemeProvider } from "styled-components";
import {
  globalStyle as GlobalStyle,
  breakpoints,
  darkColors,
  lightColors,
  shapes,
  spacings,
} from "./theme";
import { useStores } from "./utils";
import { observer } from "mobx-react";

const browserHistory = createBrowserHistory();

const App: React.FC = () => {
  const { global } = useStores();
  const colors = global.userTheme === "light" ? lightColors : darkColors;

  const theme = {
    ...colors,
    ...spacings,
    ...shapes,
    ...breakpoints,
  };

  return (
    <ThemeProvider theme={theme}>
      <Navigator history={browserHistory}>
        <React.StrictMode>
          <Routes />
          <GlobalStyle />
        </React.StrictMode>
      </Navigator>
    </ThemeProvider>
  );
};

export { browserHistory };
export default observer(App);

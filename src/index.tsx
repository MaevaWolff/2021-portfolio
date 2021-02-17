import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./theme/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

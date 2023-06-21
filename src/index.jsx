import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter";
import {
  StyledEngineProvider,
  CssBaseline,
} from "@mui/material";

import "./themes/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      {/*<ThemeProvider theme={defaultTheme}>*/}
        <CssBaseline />
        <AppRouter />
      {/*</ThemeProvider>*/}
    </StyledEngineProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter";
import {
  ThemeProvider,
  StyledEngineProvider,
  CssBaseline,
} from "@mui/material";
import defaultTheme from "./themes/defaultTheme";
import "./themes/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);

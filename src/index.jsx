import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store/store";
import {
  ThemeProvider,
  StyledEngineProvider,
  CssBaseline,
} from "@mui/material";
import defaultTheme from "./themes/defaultTheme";
import "./themes/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <AppRouter/>
        </ThemeProvider>
      </StyledEngineProvider>
    </ReduxProvider>
  </React.StrictMode>
);

import React from "react";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import App01 from "App01";
import App02 from "App02";
import { darkTheme, lightTheme } from "theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={darkTheme}>
    <App02 />
  </ThemeProvider>
);

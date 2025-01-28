import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/'
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const theme = createTheme();
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import GlobalStyle from "./globalStyles";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

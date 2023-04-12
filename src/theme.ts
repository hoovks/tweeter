import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#2e90fc",
      main: "#2f80ed",
      dark: "#2e6fd9",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
    },
    success: {
      main: "#27ae60",
    },
    error: {
      main: "#eb5757",
    },
    grey: {
      50: "#fff",
      100: "#fafafa",
      200: "#f5f5f5",
      300: "#f0f0f0",
      400: "#dedede",
      500: "#c2c2c2",
      600: "#979797",
      700: "#818181",
      800: "#818181",
      900: "#3c3c3c",
    },
  },
});

import React, { useRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Intro } from "./components/intro";

import { Portfolio } from "./components/portfolio";
import "./App.css";

let theme = createTheme();
theme = createTheme(theme, {
  palette: {
    primary: {
      light: "#ABC2D9",
      main: "#4D7AA8",
      dark: "#5785B2",
      contrastText: "#1C212E",
    },
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: ["Montserrat", "Yeseva One"].join(","),
    h1: {
      fontSize: "7.5rem",
      fontFamily: "Yeseva One",
      [theme.breakpoints.down("md")]: {
        fontSize: "6rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "4.5rem",
      },
    },
    h2: {
      fontSize: "5rem",
      fontFamily: "Yeseva One",
      [theme.breakpoints.down("md")]: {
        fontSize: "3.5rem",
      },
    },
    h4: {
      fontFamily: "Montserrat",
      fontSize: "2rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "1.5rem",
      },
    },
    h6: {
      fontFamily: "Montserrat",
      fontSize: "1rem",
      [theme.breakpoints.down("md")]: {
        fontSize: ".8rem",
      },
    },
  },
});

function App() {
  const portfolioRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="App"
        sx={{
          px: { xs: "50px", md: "80px" },
        }}
      >
        <Intro portfolioRef={portfolioRef} />
        <Portfolio portfolioRef={portfolioRef} />
      </Box>
    </ThemeProvider>
  );
}

export default App;

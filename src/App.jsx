import React from "react";
import { CssBaseline, useMediaQuery } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import { themeOptions } from "./theme";
import NavBar from "./Layout/NavBar";
import { CountriesContextProvider } from "./store/CountriesContext";
import ScrollToTop from "./helpers/ScrollToTop";
const App = () => {
  const [lightMode, setLightMode] = React.useState("dark");
  const preferredTheme = themeOptions(lightMode);
  let theme = createTheme(preferredTheme);
  theme = responsiveFontSizes(theme);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  ScrollToTop();
  return (
    <div className="app">
      <CountriesContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar
            lightMode={lightMode}
            setLightMode={setLightMode}
            matches={matches}
          />
          <Outlet />
        </ThemeProvider>
      </CountriesContextProvider>
    </div>
  );
};

export default App;

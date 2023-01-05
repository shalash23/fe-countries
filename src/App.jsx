import React from "react";
import {
  Paper,
  Typography,
  CssBaseline,
  Container,
  Box,
  useMediaQuery,
} from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { themeOptions } from "./theme";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import GridCards from "./Layout/GridCards";
import { CountriesContextProvider } from "./store/CountriesContext";
const App = () => {
  const [lightMode, setLightMode] = React.useState("light");
  const preferredTheme = themeOptions(lightMode);
  console.log(themeOptions);
  let theme = createTheme(preferredTheme);
  theme = responsiveFontSizes(theme);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className="app">
      <CountriesContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Paper
            elevation={4}
            square
            sx={{
              py: 5,
              px: {
                xs: 1,
                sm: 2,
                md: 5,
                lg: 6,
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="h1"
              variant={matches ? "h6" : "h5"}
              sx={{
                fontWeight: "800",
              }}
            >
              Where in the world?
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              <DarkModeOutlinedIcon
                fontSize={"large"}
                sx={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  setLightMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                  );
                }}
              />
              <Typography
                component="p"
                variant="body1"
                sx={{
                  ml: 2,
                }}
              >
                {" "}
                Dark Mode
              </Typography>
            </Box>
          </Paper>
          <Container fixed maxWidth={"xs"}>
            <GridCards />
          </Container>
        </ThemeProvider>
      </CountriesContextProvider>
    </div>
  );
};

export default App;

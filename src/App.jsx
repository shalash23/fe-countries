import React from "react";
import { Paper, Typography, CssBaseline,Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./theme";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import CardCountry from "./Layout/CardCountry";

const App = () => {
  const theme = createTheme(themeOptions);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper
          elevation={2}
          sx={{
            py: 2,
            px: 8,
            display:'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            component="h1"
            variant="subtitle1"
            sx={{
              fontWeight: "800",
              color:'text.primary'
            }}
          >
            Where in the world?
          </Typography>
          <DarkModeOutlinedIcon />
        </Paper>
        <Container fixed maxWidth={'xs'}>
            <CardCountry/>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;

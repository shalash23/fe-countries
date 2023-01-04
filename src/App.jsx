import React from "react";
import { Paper, Typography, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./theme";

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
            px: 1,
          }}
        >
          <Typography
            component="h1"
            variant="body2"
            sx={{
              fontWeight: "800",
            }}
          >
            Where in the world?
          </Typography>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default App;

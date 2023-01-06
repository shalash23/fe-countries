import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
const NavBar = ({ lightMode, setLightMode, matches }) => {
  return (
    <Paper
      elevation={2}
      square
      sx={{
        py: 5,
        px: {
          xs: 2,
          sm: 3,
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
        variant={matches ? "body1" : "h5"}
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
        {lightMode === "light" ? (
          <DarkModeOutlinedIcon
            fontSize={matches ? "small" : "medium"}
            sx={{
              cursor: "pointer",
            }}
            onClick={() => {
              setLightMode((prevMode) =>
                prevMode === "light" ? "dark" : "light"
              );
            }}
          />
        ) : (
          <LightModeOutlinedIcon
            fontSize={matches ? "small" : "large"}
            sx={{
              cursor: "pointer",
            }}
            onClick={() => {
              setLightMode((prevMode) =>
                prevMode === "light" ? "dark" : "light"
              );
            }}
          />
        )}

        <Typography
          component="p"
          variant={matches ? "subtitle2" : "body1"}
          sx={{
            ml: 2,
            textTransform: "capitalize",
          }}
        >
          {lightMode} Mode
        </Typography>
      </Box>
    </Paper>
  );
};

export default NavBar;

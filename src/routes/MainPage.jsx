import React from "react";
import { useTheme, useMediaQuery, Container } from "@mui/material";
import GridCards from "../Layout/GridCards";
const MainPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container maxWidth={matches ? "xs" : "xl"} fixed>
      <GridCards />
    </Container>
  );
};

export default MainPage;

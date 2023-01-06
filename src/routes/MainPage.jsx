import React from "react";
import { useTheme, useMediaQuery, Container } from "@mui/material";
import GridCards from "../Layout/GridCards";
import { getCountries } from "../helpers/getData";
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

export async function loader() {
  const countries = await getCountries();
  return { countries };
}

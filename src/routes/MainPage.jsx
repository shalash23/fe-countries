import React from "react";
import { useTheme, useMediaQuery, Container } from "@mui/material";
import GridCards from "../Layout/GridCards";
import { getCountries } from "../helpers/getData";
import AnimatedPage from "../Layout/AnimatedPage";
const MainPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AnimatedPage>
      <Container maxWidth={matches ? "xs" : "xl"}>
        <GridCards />
      </Container>
    </AnimatedPage>
  );
};

export default MainPage;

export async function loader() {
  const countries = await getCountries();
  return { countries };
}

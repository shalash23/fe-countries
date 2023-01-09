import React from "react";
import { useTheme, useMediaQuery, Container, Box } from "@mui/material";
import GridCards from "../Layout/GridCards";
import { getCountries } from "../helpers/getData";
import AnimatedPage from "../Layout/AnimatedPage";
import SelectionTab from "../Layout/SelectionTab";
import SearchBar from "../Layout/SearchBar";
const MainPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AnimatedPage>
      <Container maxWidth={matches ? "xs" : "xl"}>
        <Box
          sx={{
            display: {
              xs: "block",
              lg: "flex",
            },
            justifyContent: {
              lg: "space-between",
            },
            alignItems: {
              lg: "flex-end",
            },
            mt: 3,
          }}
        >
          <SearchBar />
          <SelectionTab />
        </Box>
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

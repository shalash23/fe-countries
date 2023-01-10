import React from "react";
import { useTheme, useMediaQuery, Container, Box } from "@mui/material";
import GridCards from "../Layout/GridCards";
import { getCountries } from "../helpers/getData";
import SelectionTab from "../Layout/SelectionTab";
import SearchBar from "../Layout/SearchBar";
const MainPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container maxWidth={matches ? "xs" : false} fixed>
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
            lg: "center",
          },
          mt: 5,
          mb: 4,
        }}
      >
        <SearchBar />
        <SelectionTab />
      </Box>
      <GridCards />
    </Container>
  );
};

export default MainPage;

export async function loader() {
  const countries = await getCountries();
  return { countries };
}

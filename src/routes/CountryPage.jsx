import React from "react";
import { countriesContext } from "../store/CountriesContext";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { Container, Grid, Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import Country from "../Layout/Country";

const CountryPage = () => {
  const [_, allCountries] = React.useContext(countriesContext);
  const { name } = useParams();
  const countryParams = allCountries.filter(
    (country) => country.name.common === name
  )[0];
  return (
    <>
      <Container
        fixed
        maxWidth={false}
        sx={{
          py: 5,
        }}
      >
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <Button
            variant="contained"
            startIcon={<KeyboardBackspaceRoundedIcon />}
            sx={{
              backgroundColor: "background.paper",
              color: "text.primary",
              px: 3.5,
              mb: 9,
              ml: 2,
            }}
          >
            Back
          </Button>
        </Link>
        <Grid
          sx={{
            m: "auto",
            p: { xs: 2, lg: 0 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr",
              lg: "repeat(3,1fr)",
            },
            gridTemplateRows: {
              xs: "1fr",
              md: "1fr",
              lg: "1fr",
            },
            alignItems: "flex-start",
            justifyContent: "center",
            columnGap: 5,
          }}
        >
          <Country countryParams={countryParams} />
        </Grid>
      </Container>
    </>
  );
};

export default CountryPage;

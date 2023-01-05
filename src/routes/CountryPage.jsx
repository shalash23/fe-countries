import React from "react";
import { countriesContext } from "../store/CountriesContext";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { Container, Typography, Grid, Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import Country from "../Layout/Country";

const CountryPage = () => {
  const [_, allCountries] = React.useContext(countriesContext);
  console.log(allCountries);
  const { name } = useParams();
  const countryParams = allCountries.filter(
    (country) => country.name.common === name
  )[0];
  console.log(countryParams);
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
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          xs={12}
          spacing={1}
          sx={{
            m: "auto",
            p: 2,
          }}
        >
          <Country countryParams={countryParams} />
        </Grid>
      </Container>
    </>
  );
};

export default CountryPage;

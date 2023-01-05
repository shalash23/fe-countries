import React, { useContext } from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import CardCountry from "./CardCountry";
import { countriesContext } from "../store/CountriesContext";
const GridCards = () => {
  const [randomCountries, loading] = useContext(countriesContext);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Grid
      container
      spacing={5}
      sx={{
        mb: 5,
      }}
    >
      {randomCountries.map((country) => {
        return (
          <React.Fragment key={country.id}>
            <Grid item xs={matches ? 3 : 12}>
              <CardCountry
                id={country.id}
                name={country.name.common}
                flag={country.flags.svg}
                population={Intl.NumberFormat("en-US").format(
                  country.population
                )}
                capital={country.capital[0]}
                region={country.region[0]}
              />
            </Grid>
          </React.Fragment>
        );
      })}
    </Grid>
  );
};

export default GridCards;

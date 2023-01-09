import React, { useContext } from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import CardCountry from "./CardCountry";
import { countriesContext } from "../store/CountriesContext";
import AnimatedPage from "./AnimatedPage";
import { AnimatePresence } from "framer-motion";
const GridCards = () => {
  const [randomCountries, loading] = useContext(countriesContext);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Grid
      container
      spacing={6}
      sx={{
        mb: 5,
      }}
    >
      {randomCountries.map((country) => {
        return (
          <React.Fragment key={country.area}>
            <Grid item xs={matches ? 3 : 12}>
              <AnimatePresence>
                <AnimatedPage>
                  <CardCountry
                    id={country.id}
                    name={country.name.common}
                    flag={country.flags.svg}
                    population={Intl.NumberFormat("en-US").format(
                      country.population
                    )}
                    capital={
                      country.capital ? country.capital[0] : "No Capital"
                    }
                    region={country.region}
                    area={country.area}
                  />
                </AnimatedPage>
              </AnimatePresence>
            </Grid>
          </React.Fragment>
        );
      })}
    </Grid>
  );
};

export default GridCards;

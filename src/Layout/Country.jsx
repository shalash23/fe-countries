import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useContext } from "react";
import { countriesContext } from "../store/CountriesContext";
import { Link } from "react-router-dom";

const Country = ({ countryParams }) => {
  const { borders } = countryParams;
  const [_, allCountries] = useContext(countriesContext);
  const borderCountries = [];
  for (const property in allCountries) {
    const border = allCountries[property].cca3;
    if (borders.includes(border)) {
      borderCountries.push(allCountries[property].name.common);
    }
  }

  return (
    <>
      <Grid item xs={12}>
        <img
          src={countryParams.flags.svg}
          alt={`flag of ${countryParams.name.common}`}
          style={{
            width: "100%",
          }}
        />
        <Typography
          component="h4"
          variant="h4"
          sx={{
            my: 7,
          }}
        >
          {countryParams.name.official}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography component="p" variant="h6" color="text.main">
            Native Name:
          </Typography>
          <Typography
            component="p"
            variant="h6"
            color="text.main"
            sx={{
              opacity: "0.8",
              ml: 1,
            }}
          >
            {countryParams.altSpellings[1]}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Typography component="p" variant="h6" color="text.main">
            Population:
          </Typography>
          <Typography
            component="p"
            variant="h6"
            color="text.main"
            sx={{
              opacity: "0.8",
              ml: 1,
            }}
          >
            {Intl.NumberFormat("en-US").format(countryParams.population)}
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography component="p" variant="h6" color="text.main">
            Region:
          </Typography>
          <Typography
            component="p"
            variant="h6"
            color="text.main"
            sx={{
              opacity: "0.8",
              ml: 1,
            }}
          >
            {countryParams.region}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Typography component="p" variant="h6" color="text.main">
            Subregion:
          </Typography>
          <Typography
            component="p"
            variant="h6"
            color="text.main"
            sx={{
              opacity: "0.8",
              ml: 1,
            }}
          >
            {countryParams.subregion}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Typography component="p" variant="h6" color="text.main">
            Capital:
          </Typography>
          <Typography
            component="p"
            variant="h6"
            color="text.main"
            sx={{
              opacity: "0.8",
              ml: 1,
            }}
          >
            {countryParams.capital[0]}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          width: "100%",
          mt: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Typography component="p" variant="h6" color="text.main">
            Top Level Domain:
          </Typography>
          <Typography
            component="p"
            variant="h6"
            color="text.main"
            sx={{
              opacity: "0.8",
              ml: 1,
            }}
          >
            {countryParams.tld}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Typography component="p" variant="h6" color="text.main">
            Currencies:
          </Typography>

          <Typography
            component="p"
            variant="h6"
            color="text.main"
            sx={{
              opacity: "0.8",
              ml: 1,
            }}
          >
            {
              countryParams.currencies[Object.keys(countryParams.currencies)[0]]
                .name
            }
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Typography component="p" variant="h6" color="text.main">
            Languages:
          </Typography>

          {Object.keys(countryParams.languages).map((language, idx, arr) => {
            return idx === arr.length - 1 ? (
              <Typography
                component="p"
                variant="h6"
                color="text.main"
                sx={{
                  opacity: "0.8",
                  ml: 1,
                }}
              >
                {countryParams.languages[language]}
              </Typography>
            ) : (
              <Typography
                component="p"
                variant="h6"
                color="text.main"
                sx={{
                  opacity: "0.8",
                  ml: 1,
                }}
              >
                {countryParams.languages[language]},
              </Typography>
            );
          })}
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          width: "100%",
          mt: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Typography component="h5" variant="h5">
            Border Countries:
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            mt: 3,
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          {borderCountries.map((country) => {
            return (
              <Link
                style={{ textTransform: "none" }}
                to={`../country/${country}`}
                preventScrollReset={true}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "background.paper",
                    color: "text.primary",
                  }}
                >
                  {country}
                </Button>
              </Link>
            );
          })}
        </Box>
      </Grid>
    </>
  );
};

export default Country;

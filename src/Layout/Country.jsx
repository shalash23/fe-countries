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
  console.log(countryParams.languages);

  return (
    <>
      <Grid
        item
        sx={{
          gridRow: {
            xs: "1",
            lg: "1 /3 ",
          },
          gridColumn: {
            xs: "1",
            lg: "1",
          },
        }}
      >
        <img
          src={countryParams.flags.svg}
          alt={`flag of ${countryParams.name.common}`}
          style={{
            width: "100%",

            height: "100%",
            imageRendering: "auto",
          }}
        />
      </Grid>

      <Grid
        item
        sx={{
          width: "100%",
          gridRow: {
            xs: "2",
            lg: "1",
          },
          gridColumn: {
            lg: "2 / 3",
          },
        }}
      >
        <Typography
          component="h4"
          variant="h4"
          sx={{
            mb: {
              xs: 4,
              lg: 2,
            },
            mt: {
              xs: 4,
              lg: 0,
            },
          }}
        >
          {countryParams.name.official}
        </Typography>
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
        md={3}
        sx={{
          width: "100%",
          mt: 4,
          gridRow: {
            xs: "3",
            lg: "1",
          },
          gridColumn: {
            lg: "3",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            mt: 4,
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
            noWrap
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

          {Object.keys(countryParams.languages)
            .slice(0, 3)
            .map((language, idx, arr) => {
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
        md={3}
        sx={{
          width: "100%",
          mt: 3,
          gridColumn: { lg: "2 / 4" },
          gridRow: { xs: "4", lg: "2 / 3" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
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
            alignItems: "flex-start",
            mt: 2,
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          {borderCountries.slice(0, 3).map((country) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
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

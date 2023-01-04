import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import CardCountry from "./CardCountry";
import axios from "axios";
const GridCards = () => {
  const [countries, setCountries] = React.useState([]);
  const [allCountries, setAllCountries] = React.useState([]);
  const [randomCountries, setRandomCountries] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [countriesLoading, setCountriesLoading] = React.useState(false);
  const baseUrl = `https://restcountries.com/v3.1/name/egypt`;

  React.useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setCountries(response.data[0]);
      setLoading(true);
    });
  }, []);

  React.useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
      setAllCountries(response.data);
      setCountriesLoading(true);
    });
  }, []);

  console.log(randomCountries);
  const numFor = Intl.NumberFormat("en-US");
  const newFor = numFor.format(countries.population);

  return (
    <>
      {!loading && (
        <div className="cirl">
          <CircularProgress />
        </div>
      )}
      {loading && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CardCountry
              name={countries.name.common}
              population={newFor}
              flag={countries.flags.png}
              region={countries.region}
              capital={countries.capital}
            />
          </Grid>
        </Grid>
      )}

      {!countriesLoading && (
        <div className="cirl">
          <CircularProgress />
        </div>
          )}
          {
              countriesLoading && allCountries.slice(0, 10).map((country) => {
                  return (
                    <>
                      <CardCountry
                        name={country.name.common}
                        population={newFor}
                        flag={country.flags.png}
                        region={country.region}
                        capital={country.capital}
                      />
                    </>
                  );
              })
          }
    </>
  );
};

export default GridCards;

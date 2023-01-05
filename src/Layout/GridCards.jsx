import React, { useContext } from "react";
import { Grid, CircularProgress } from "@mui/material";
import CardCountry from "./CardCountry";
import { countriesContext } from "../store/CountriesContext";
const GridCards = () => {
  const [randomCountries, loading] = useContext(countriesContext);
  console.log(randomCountries);

  const numFor = Intl.NumberFormat("en-US");
  const newFor = numFor.format(countries.population);

  return {};
};

export default GridCards;

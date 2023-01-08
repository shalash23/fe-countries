import React, { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const countriesContext = createContext();
export const randomCountriesContext = createContext(null);

export const CountriesContextProvider = ({ children }) => {
  const { countries } = useLoaderData();

  console.log(countries);
  const [allCountries, setAllCountries] = useState(countries);

  const randomCountries = [];
  for (let i = 0; i < 8; i++) {
    let randomNumber = Math.floor(Math.random() * allCountries.length);
    randomCountries.push(allCountries[randomNumber]);
  }

  return (
    <countriesContext.Provider value={[randomCountries, allCountries]}>
      {children}
    </countriesContext.Provider>
  );
};

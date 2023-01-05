import React, { createContext, useState } from "react";
import axios from "axios";

export const countriesContext = createContext();
export const randomCountriesContext = createContext(null);

export const CountriesContextProvider = ({ children }) => {
  const baseUrl = `https://restcountries.com/v3.1/all`;
  const [allCountries, setAllCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setAllCountries(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;
  const randomCountries = [];
  for (let i = 0; i < 8; i++) {
    let randomNumber = Math.floor(Math.random() * allCountries.length);
    randomCountries.push(allCountries[randomNumber]);
    console.log(randomCountries);
  }

  return (
    <countriesContext.Provider value={[randomCountries, loading]}>
      {children}
    </countriesContext.Provider>
  );
};

import React, { createContext, useState, useMemo, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getResults } from "../helpers/searchResults";

export const countriesContext = createContext();
export const randomCountriesContext = createContext(null);
export const searchContext = createContext();
export const queryContext = createContext();

export const CountriesContextProvider = ({ children }) => {
  const { countries } = useLoaderData();
  const [search, setSearch] = useState("All");
  const [allCountries, setAllCountries] = useState(countries);
  const [query, setQuery] = useState("");

  const randomCountries = useMemo(() => {
    const randomCountry = allCountries.filter((country) => {
      if (query !== "") {
        return country.name.common.toLowerCase().includes(query.toLowerCase());
      }
      if (search === "All") {
        if (country.name.common === "Brazil") return country;
        if (country.name.common === "Canada") return country;
        if (country.name.common === "Belgium") return country;
        if (country.name.common === "Denmark") return country;
        if (country.name.common === "France") return country;
        if (country.name.common === "Italy") return country;
        if (country.name.common === "Jamaica") return country;
        if (country.name.common === "Egypt") return country;
      }
      if (search === "Americas") {
        if (country.region === "Americas") return country;
      }
      if (search === "Africa") {
        return country.region === "Africa";
      }
      if (search === "Europe") {
        return country.region === "Europe";
      }
      if (search === "Oceania") {
        return country.region === "Oceania";
      }
      if (search === "Asia") {
        return country.region === "Asia";
      }
    });

    return randomCountry;
  }, [search, query]);

  return (
    <countriesContext.Provider value={[randomCountries, allCountries]}>
      <searchContext.Provider value={[search, setSearch]}>
        <queryContext.Provider value={[query, setQuery]}>
          {children}
        </queryContext.Provider>
      </searchContext.Provider>
    </countriesContext.Provider>
  );
};

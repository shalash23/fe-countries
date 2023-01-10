export function getResults(countries, searchString) {
  console.log(countries);
  if (!searchString) return countries;

  const countriesFiltered = countries.filter((country) => {
    return country.name.common
      .toLowerCase()
      .includes(searchString.toLowerCase());
  });
  return countriesFiltered;
}

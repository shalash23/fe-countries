export async function getCountries() {
  const data = await fetch("https://restcountries.com/v3.1/all");
  const countries = await data.json();
  return countries;
}

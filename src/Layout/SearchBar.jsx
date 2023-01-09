import { InputAdornment, Input, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { queryContext } from "../store/CountriesContext";
import { useContext } from "react";

export default function SearchBar() {
  const [query, setQuery] = useContext(queryContext);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  console.log(query);
  return (
    <FormControl
      variant="filled"
      sx={{
        width: {
          xs: "100%",
          md: "40%",
        },
      }}
    >
      <Input
        id="input-search-country"
        placeholder="Search for a Country"
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon
              sx={{
                mb: 2,
              }}
            />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

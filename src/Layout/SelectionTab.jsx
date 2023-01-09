import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Paper,
} from "@mui/material";
import { useContext } from "react";
import { searchContext } from "../store/CountriesContext";

export default function SelectionTab() {
  const [search, setSearch] = useContext(searchContext);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Paper
      sx={{
        minWidth: {
          xs: 50,
          lg: 150,
        },
        maxWidth: "auto",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="region-select-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="region-select"
          label="Region"
          value={search}
          onChange={handleChange}
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Africa"}>Africa</MenuItem>
          <MenuItem value={"Americas"}>America</MenuItem>
          <MenuItem value={"Asia"}>Asia</MenuItem>
          <MenuItem value={"Europe"}>Europe</MenuItem>
          <MenuItem value={"Oceania"}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
}

import { InputAdornment, InputLabel, Input, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <FormControl
      variant="filled"
      sx={{
        width: {
          xs: "100%",
          md: "50%",
        },
      }}
    >
      <Input
        id="input-search-country"
        placeholder="Search for a Country"
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

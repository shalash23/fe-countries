import { InputAdornment, InputLabel, Input, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <FormControl
      variant="filled"
      sx={{
        mb: 3,
        border: "1px solid text.primary",
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

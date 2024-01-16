import { InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "../../../ui/button/Button";
export const SearchBar = () => {
  return (
    <>
      <Paper sx={{ p: 1.25, mb: -1, display: "flex", alignItems: "center" }}>
        <SearchIcon sx={{ color: "grey.500" }} />
        <InputBase
          fullWidth
          placeholder="Search"
          sx={{
            paddingX: 1.25,
            fontSize: 16,
            fontWeight: "fontWeightRegular",
            color: "grey.500",
          }}
        ></InputBase>
        <Button>Search</Button>
      </Paper>
    </>
  );
};

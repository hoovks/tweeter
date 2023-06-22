import { Typography, MenuItem } from "@mui/material";
import { ItemProps } from "./Item.types";

export const Item = ({ name, icon, color }: ItemProps) => {
  return (
    <MenuItem
      sx={{
        minWidth: 165,
        py: 1,
        display: "flex",
        alignContent: "center",
        borderRadius: 3,
        "& > * ": { color: color },
      }}
    >
      {icon}
      <Typography variant="subtitle2">{name}</Typography>
    </MenuItem>
  );
};

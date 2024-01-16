import { MenuItem as MuiMenuItem, ListItemText } from "@mui/material";
import { MenuIcon } from "../menu-icon/MenuIcon";
import { MenuItemProps } from "./MenuItem.types";

export const MenuItem = ({ text, icon, onClick }: MenuItemProps) => (
  <MuiMenuItem onClick={onClick} key={text}>
    <MenuIcon icon={icon} />
    <ListItemText
      primary={text}
      primaryTypographyProps={{
        variant: "subtitle2",
      }}
    />
  </MuiMenuItem>
);

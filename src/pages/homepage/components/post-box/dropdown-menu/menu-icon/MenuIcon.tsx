import React from "react";
import { ListItemIcon } from "@mui/material";
import { MenuIconProps } from "./MenuIcon.types";

export const MenuIcon = ({ icon }: MenuIconProps) => {
  return (
    <ListItemIcon>
      {React.cloneElement(icon, {
        fontSize: "small",
      })}
    </ListItemIcon>
  );
};

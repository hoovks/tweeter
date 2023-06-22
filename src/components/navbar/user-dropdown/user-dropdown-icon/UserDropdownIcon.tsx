import React from "react";
import { Group, AccountCircle, Settings, Logout } from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { UserDropdownIconProps } from "./UserDropdownIcon.types";

export const menuIcon = {
  profile: <AccountCircle />,
  chat: <Group />,
  settings: <Settings />,
  logout: <Logout />,
};

export const UserDropdownIcon = ({ variant }: UserDropdownIconProps) => {
  return (
    <ListItemIcon>
      {React.cloneElement(menuIcon[variant], { fontSize: "medium" }, null)}
    </ListItemIcon>
  );
};

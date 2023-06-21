import { Divider, Menu } from "@mui/material";
import { UserDropdownProps } from "./UserDropdown.types";
import { UserDropdownIcon } from "./user-dropdown-icon/UserDropdownIcon";
import { Item } from "./item/Item";

export const UserDropdown = ({
  anchorElUser,
  setAnchorElUser,
}: UserDropdownProps) => {
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const menuList = [
    { name: "My Profile", icon: <UserDropdownIcon variant="profile" /> },
    { name: "Group Chat", icon: <UserDropdownIcon variant="chat" /> },
    { name: "Settings", icon: <UserDropdownIcon variant="settings" /> },
  ];

  return (
    <Menu
      sx={{
        mt: 7,
      }}
      PaperProps={{
        style: {
          padding: 14,
        },
      }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {menuList.map((menuItem) => (
        <Item name={menuItem.name} icon={menuItem.icon} color="grey.800" />
      ))}

      <Divider />
      <Item
        name="Logout"
        icon={<UserDropdownIcon variant="logout" />}
        color="error.main"
      />
    </Menu>
  );
};

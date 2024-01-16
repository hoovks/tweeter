import { Menu, ListItemText } from "@mui/material";
import { Public, People } from "@mui/icons-material";
import { DropdownMenuProps } from "./DropdownMenu.types";
import { MenuItem } from "./menu-item/MenuItem";

export const DropdownMenu = ({
  anchorEl,
  setAnchorEl,
  selectedOption,
  setSelectedOption,
}: DropdownMenuProps) => {
  const menuItems = [
    { text: "Everyone", icon: <Public /> },
    { text: "People you follow", icon: <People /> },
  ];

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = (option: string, icon: JSX.Element) => {
    if (selectedOption.text !== option) {
      setSelectedOption({ text: option, icon });
    }

    handleClose();
  };

  return (
    <Menu
      style={{ marginTop: "20px" }}
      PaperProps={{
        style: {
          paddingInline: 14,
          minWidth: 235,
        },
      }}
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <ListItemText
        primary="Who can reply?"
        secondary="Choose who can reply to this Tweet."
        primaryTypographyProps={{
          fontSize: 12,
          fontFamily: "Poppins",
          fontWeight: "fontWeightMedium",
          color: "grey.900",
        }}
        secondaryTypographyProps={{
          variant: "subtitle2",
          color: "grey.700",
        }}
      />

      {menuItems.map((item) => (
        <MenuItem
          text={item.text}
          icon={item.icon}
          onClick={() => handleOptionSelect(item.text, item.icon)}
          key={item.text}
        />
      ))}
    </Menu>
  );
};

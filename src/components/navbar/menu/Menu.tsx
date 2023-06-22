import { NavLink, useLocation } from "react-router-dom";
import { Box, ListItemButton } from "@mui/material";

export const Menu = () => {
  const location = useLocation();

  const menuList = [
    ["/", "Home"],
    ["/explore", "Explore"],
    ["/bookmarks", "Bookmarks"],
  ];

  return (
    <Box display={{ xs: "none", md: "flex" }} height={1} gap={8}>
      {menuList.map((item) => {
        return (
          <ListItemButton
            disableRipple
            key={item[0]}
            selected={item[0] === location.pathname}
            component={NavLink}
            to={item[0]}
            sx={{
              fontFamily: "Poppins",
              fontWeight: "fontWeightRegular",
              fontSize: 14,
              color: "grey.700",
              borderBottom: "3px solid transparent",
              "&.Mui-selected": {
                borderColor: "primary.main",
                color: "primary.main",
                bgcolor: "transparent",
              },
            }}
          >
            {item[1]}
          </ListItemButton>
        );
      })}
    </Box>
  );
};

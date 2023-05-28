import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { MobileNavIcon } from "./mobile-nav-icon/MobileNavIcon";
import { Home, Explore, Bookmark } from "@mui/icons-material";

export const MobileNav = () => {
  const navItems = [
    { pathname: "/", icon: <MobileNavIcon icon={<Home />} /> },
    {
      pathname: "/explore",
      icon: <MobileNavIcon icon={<Explore />} />,
    },
    {
      pathname: "/bookmarks",
      icon: <MobileNavIcon icon={<Bookmark />} />,
    },
  ];

  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);
  const handleChange = (
    _event: React.SyntheticEvent<Element, Event>,
    selected: string
  ) => {
    setSelected(selected);
  };
  return (
    <BottomNavigation
      value={selected}
      onChange={handleChange}
      sx={{
        display: { md: "none" },
      }}
    >
      {navItems.map((item) => (
        <BottomNavigationAction
          key={item.pathname}
          component={Link}
          to={item.pathname}
          value={item.pathname}
          icon={item.icon}
        />
      ))}
    </BottomNavigation>
  );
};

import { AppBar, Toolbar } from "@mui/material";
import { User } from "./user/User";
import { ProductLogo } from "../../ui/product-logo/ProductLogo";
import { Menu } from "./menu/Menu";

export const Navbar = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ height: 68 }}>
      <Toolbar
        disableGutters
        sx={{
          height: 1,
          mx: { xs: 2, md: 9 },
          justifyContent: "space-between",
        }}
      >
        <ProductLogo />
        <Menu />
        <User />
      </Toolbar>
    </AppBar>
  );
};

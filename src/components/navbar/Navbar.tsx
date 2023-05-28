import { AppBar, Toolbar } from "@mui/material";
import { Menu } from "./menu/Menu";
import { User } from "./user/User";
import { ProductLogo } from "../../ui/product-logo/ProductLogo";

export const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ bgcolor: "grey.50", height: 68 }}
    >
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

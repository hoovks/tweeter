import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import desktopLogo from "../../images/tweeter.svg";
import mobileLogo from "../../images/tweeter-small.svg";

export const ProductLogo = () => {
  return (
    <Link to="/">
      <Box
        sx={{
          backgroundImage: {
            xs: `url(${mobileLogo})`,
            md: `url(${desktopLogo})`,
          },
          width: { xs: 41, md: 126 },
          height: 30,
        }}
      />
    </Link>
  );
};

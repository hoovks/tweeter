import { Typography } from "@mui/material";
import { CardTitleProps } from "./CardTitle.types";

export const CardTitle = ({ children }: CardTitleProps) => {
  return (
    <Typography
      sx={{
        pb: 1,
        fontFamily: "Poppins",
        fontWeight: "fontWeightMedium",
        fontSize: 12,
        color: "grey.900",
      }}
    >
      {children}
    </Typography>
  );
};

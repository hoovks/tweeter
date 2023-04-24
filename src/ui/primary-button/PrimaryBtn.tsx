import Button from "@mui/material/Button";
import { PrimaryBtnProps } from "./PrimaryBtn.types";

export const PrimaryBtn = ({ children, icon }: PrimaryBtnProps) => {
  return (
    <Button
      startIcon={icon}
      sx={{
        px: 3,
        fontSize: 12,
        bgcolor: "primary.main",
        color: "grey.50",
        "&:hover": {
          bgcolor: "primary.dark",
        },
      }}
    >
      {children}
    </Button>
  );
};

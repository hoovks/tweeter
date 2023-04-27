import Button from "@mui/material/Button";
import { PrimaryBtnProps } from "./PrimaryBtn.types";

export const PrimaryBtn = ({ children, startIcon }: PrimaryBtnProps) => {
  return (
    <Button
      startIcon={startIcon}
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

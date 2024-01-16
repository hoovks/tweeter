import { Button as MaterialButton } from "@mui/material";
import { ButtonProps } from "./Button.types";

export const Button = ({ children, startIcon, onClick }: ButtonProps) => {
  return (
    <MaterialButton
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
      onClick={onClick}
    >
      {children}
    </MaterialButton>
  );
};

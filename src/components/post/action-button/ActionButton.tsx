import { useState } from "react";
import Button from "@mui/material/Button";
import { ActionButtonProps } from "./ActionButton.types";

export const ActionButton = ({ children, icon, color }: ActionButtonProps) => {
  const [flag, setFlag] = useState<boolean>(true);

  const handleColorChange = () => {
    setFlag(!flag);
  };

  return (
    <Button
      onClick={handleColorChange}
      startIcon={icon}
      disableRipple
      sx={{
        py: 1.25,
        width: 1,
        color: flag ? "grey.500" : color,
        "&:hover": {
          bgcolor: "grey.100",
        },
      }}
    >
      {children}
    </Button>
  );
};

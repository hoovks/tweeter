import { Paper } from "@mui/material";
import { CardProps } from "./Card.types";

export const Card = ({ children, sx }: CardProps) => {
  return <Paper sx={sx}>{children}</Paper>;
};

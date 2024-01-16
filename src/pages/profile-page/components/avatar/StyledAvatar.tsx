import { Avatar } from "@mui/material";
import { AvatarProps } from "./StyledAvatar.types";

export const StyledAvatar = ({ src, sx }: AvatarProps) => {
  return (
    <Avatar
      src={src}
      sx={{
        ...sx,

        width: { xs: 122, md: 152 },
        height: { xs: 122, md: 152 },
        borderRadius: 2,
        border: "4px solid",
        borderColor: "grey.50",
      }}
    />
  );
};

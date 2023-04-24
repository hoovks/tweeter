import { Avatar } from "@mui/material";
import { AvatarProps } from "./StyledAvatar.types";

export const StyledAvatar = ({ src }: AvatarProps) => {
  return (
    <Avatar
      src={src}
      sx={{
        width: 40,
        height: 40,
        borderRadius: 2,
      }}
    />
  );
};

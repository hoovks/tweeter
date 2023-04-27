import { Avatar as MaterialAvatar } from "@mui/material";
import { AvatarProps } from "./Avatar.types";

export const Avatar = ({ src }: AvatarProps) => {
  return (
    <MaterialAvatar
      src={src}
      sx={{
        width: 40,
        height: 40,
        borderRadius: 2,
      }}
    />
  );
};

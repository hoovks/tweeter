import { Box, IconButton, InputBase } from "@mui/material";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import { CommentInputProps } from "./CommentInput.types";
import { Avatar } from "../../../ui/avatar/Avatar";

export const CommentInput = ({ avatar }: CommentInputProps) => {
  return (
    <Box
      display="flex"
      gap={2}
      sx={{
        pt: 1.25,
      }}
    >
      <Avatar src={avatar} />

      <Box
        component="form"
        display="flex"
        flexGrow={1}
        sx={{
          border: 1,
          borderRadius: 2,
          borderColor: "grey.100",
          bgcolor: "grey.50",
        }}
      >
        <InputBase
          fullWidth
          placeholder="Tweet your reply"
          sx={{
            paddingX: 1.5,
            fontSize: 14,
            fontFamily: "Noto Sans",
            fontWeight: "500",
            color: "grey.700",
          }}
        />

        <IconButton disableRipple sx={{ p: 1.5 }} aria-label="insert photo">
          <InsertPhotoOutlinedIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

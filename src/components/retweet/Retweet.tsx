import { RetweetProps } from "./Retweet.types";
import { Post } from "../post/Post";
import { Typography, Box } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import avatar from "../../assets/images/profile-picture.png";

export const Retweet = ({ children }: RetweetProps) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      gap={1.25}
      color="grey.700"
    >
      <AutorenewIcon fontSize="small" />

      <Typography fontSize={14}>
        {children}
        Retweeted
      </Typography>

      <Post
        avatar={avatar}
        username="Kyle Simpson"
        date="24 March 2021"
        time="21:12"
        description="string"
        commentsNumber={3}
        retweetsNumber={24}
        savedNumber={45}
      />
    </Box>
  );
};

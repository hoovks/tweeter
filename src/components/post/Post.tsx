import CardActions from "@mui/material/CardActions";
import {
  ModeCommentOutlined,
  FavoriteBorder,
  Sync,
  BookmarkBorder,
} from "@mui/icons-material";
import {
  Box,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Divider,
  Paper,
} from "@mui/material";
import { CommentInput } from "./comment-input/CommentInput";
import { ActionButton } from "./action-button/ActionButton";
import { CommentSection } from "./comment-section/CommentSection";
import { PostProps } from "./Post.types";
import { formatCompactNumber } from "../../utils";
import loggedUserAvatar from "../../assets/images/profile-picture.png";
import { Avatar } from "../../ui/avatar/Avatar";

export const Post = ({
  avatar,
  username,
  date,
  time,
  description,
  image,
  commentsNumber,
  retweetsNumber,
  savedNumber,
}: PostProps) => {
  return (
    <Paper sx={{ padding: 2.5 }}>
      <CardHeader
        sx={{ p: "0" }}
        avatar={<Avatar src={avatar} />}
        titleTypographyProps={{
          variant: "subtitle1",
          color: "grey.900",
        }}
        subheaderTypographyProps={{
          variant: "subtitle2",
          color: "grey.200",
        }}
        title={username}
        subheader={`${date} at ${time}`}
      />
      <CardContent sx={{ px: 0 }}>
        <Typography
          variant="body1"
          sx={{
            color: "grey.500",
          }}
        >
          {description}
        </Typography>
      </CardContent>

      <CardMedia
        component="img"
        image={image}
        sx={{
          mb: 0.5,
          borderRadius: 2,
        }}
      />
      <Box
        display="flex"
        justifyContent="flex-end"
        gap={2}
        sx={{
          "& > :not(style)": {
            paddingY: 1,
            color: "grey.200",
          },
        }}
      >
        <Typography variant="subtitle2">
          {formatCompactNumber(commentsNumber)} Comments
        </Typography>
        <Typography variant="subtitle2">
          {formatCompactNumber(retweetsNumber)} Retweets
        </Typography>
        <Typography variant="subtitle2">
          {formatCompactNumber(savedNumber)} Saved
        </Typography>
      </Box>
      <Divider light />
      <CardActions sx={{ py: 0.5 }}>
        <ActionButton icon={<ModeCommentOutlined />} color="grey.500">
          Comment
        </ActionButton>
        <ActionButton icon={<Sync />} color="success.main">
          Retweet
        </ActionButton>
        <ActionButton icon={<FavoriteBorder />} color="error.main">
          Like
        </ActionButton>
        <ActionButton icon={<BookmarkBorder />}>Save</ActionButton>
      </CardActions>
      <Divider light />
      <CommentInput avatar={loggedUserAvatar} />
      <CommentSection />
    </Paper>
  );
};

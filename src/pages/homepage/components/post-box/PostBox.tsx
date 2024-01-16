import React, { useState } from "react";
import {
  Button as MuiButton,
  Box,
  CardContent,
  IconButton,
  InputBase,
  Divider,
  Paper,
  Avatar,
  Button,
} from "@mui/material";
import { PhotoOutlined, Public } from "@mui/icons-material";
import { DropdownMenu } from "./dropdown-menu/DropdownMenu";
import { useUser } from "../../../../contexts/UserContext";
import { CardTitle } from "../../../../ui/card-title/CardTitle";

export const PostBox = () => {
  const { profileImage } = useUser();
  // const { profileImage } = "dd";

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [tweetContent, setTweetContent] = useState("");
  const [selectedOption, setSelectedOption] = useState({
    text: "Everyone can reply",
    icon: <Public />,
  });

  const handleOpenClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTweetClick = () => {
    setTweetContent("");
  };

  const handleTweetContentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTweetContent(event.target.value);
  };

  return (
    <Paper>
      <CardContent
        sx={{
          p: 0,
          "&:last-child": { pb: 0 },
          marginX: 2.5,
          marginY: 1.5,
        }}
      >
        <CardTitle>Tweet someting</CardTitle>
        <Divider />

        <Box display="flex" sx={{ mt: 1 }}>
          <Avatar src={profileImage} />
          <Box
            component="form"
            display="flex"
            sx={{
              flex: 1,
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <InputBase
              value={tweetContent}
              onChange={handleTweetContentChange}
              fullWidth
              placeholder="What’s happening?"
              multiline={true}
              sx={{
                alignItems: "flex-start",
                paddingX: 1.5,
                minHeight: 80,
                fontSize: 16,
                fontWeight: "fontWeightRegular",
                fontFamily: "Noto Sans",
                color: "grey.500",
              }}
            />
            <Box display="flex" sx={{ maxHeight: 32 }}>
              <IconButton disableRipple sx={{ color: "#2F80ED" }}>
                <PhotoOutlined fontSize="medium" />
              </IconButton>
              <MuiButton
                startIcon={selectedOption.icon}
                disableRipple
                onClick={handleOpenClick}
                sx={{
                  fontSize: 12,
                  fontFamily: "Noto Sans",
                  fontWeight: "fontWeightRegular",
                  ":hover": { bgcolor: "transparent" },
                }}
              >
                {selectedOption.text} can replay
              </MuiButton>
            </Box>
            <DropdownMenu
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <Button onClick={handleTweetClick}>Tweet</Button>
          </Box>
        </Box>
      </CardContent>
    </Paper>
  );
};

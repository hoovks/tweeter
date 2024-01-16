import React from "react";
import { Box, Typography, Divider, Button, Grid } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import avatar from "../../../assets/images/profile-picture.png";
import { Avatar } from "../../../ui/avatar/Avatar";

export const CommentSection = () => {
  const [flag, setFlag] = React.useState(true);

  const handleColorChange = () => {
    setFlag(!flag);
  };
  return (
    <>
      <Divider sx={{ marginY: 1.25 }} />
      <Grid container wrap="nowrap" spacing={1.25}>
        <Grid item>
          <Avatar src={avatar} />
        </Grid>
        <Grid item xs={11}>
          <Box
            display="flex"
            flexWrap="wrap"
            sx={{
              minHeight: 40,
              padding: "10px 15px",
              bgcolor: "grey.50",
              borderRadius: 2,
            }}
          >
            <Typography
              sx={{
                mr: 1.5,
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: 14,
                color: "grey.900",
              }}
            >
              Waqar Bloom
            </Typography>
            <Typography
              sx={{
                flexGrow: 1,
                margin: "auto 0",
                fontFamily: "Noto Sans",
                fontWeight: " 500",
                fontSize: 12,
                color: "grey.500",
              }}
            >
              24 August at 20:43
            </Typography>
            <Typography
              sx={{
                fontFamily: "Noto Sans",
                fontWeight: "400",
                fontSize: 16,
                color: "grey.500",
              }}
            >
              I’ve seen awe-inspiring things that I thought I’d never be able to
              explain to another person.
            </Typography>
          </Box>
          <Button
            onClick={handleColorChange}
            startIcon={<FavoriteBorder />}
            sx={{
              fontSize: 12,
              fontWeight: "fontWeightMedium",
              color: flag ? "grey.500" : "error.main",

              ":hover": { bgcolor: "transparent" },
            }}
          >
            Like
          </Button>
          <Typography
            display="inline"
            sx={{
              fontFamily: "Noto Sans",
              fontSize: 12,
              fontWeight: "fontWeightMedium",
              color: "grey.500",
            }}
          >
            12k Likes
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      display={{ xs: "none", md: "flex" }}
      justifyContent="center"
      sx={{
        pt: 10,
        pb: 3,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontWeight: "fontWeightRegular",
          fontSize: 14,
          color: "grey.500",
        }}
      >
        created by hoovks - devChallenges.io
      </Typography>
    </Box>
  );
};

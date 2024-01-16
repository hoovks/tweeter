import Typography from "@mui/material/Typography";
import { Box, CardContent, useMediaQuery, useTheme } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Button } from "../../../../../ui/button/Button";
// import { useUser } from "../../../../../contexts/UserContext";

export const ProfileSummaryContent = () => {
  // const { firstName, lastName } = useUser();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <CardContent
      sx={{
        width: 1,
        paddingInline: 0,
        mt: { xs: 4, md: 1.25 },
        pl: { md: 21.5 },
        pt: 1.75,
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Box display={{ md: "flex" }} alignItems="center">
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "fontWeightMedium",
            fontSize: 24,
            color: "grey.900",
            display: "inline",
          }}
        >
          {/* {`${firstName} ${lastName}`} */}
        </Typography>
        <Box
          display="flex"
          sx={{
            paddingBlock: 0.5,
            gap: 4,
            justifyContent: "center",
            mr: "auto",
            ml: { md: 3 },

            span: {
              color: "grey.900",
            },
            ">*": {
              fontFamily: "Poppins",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: "fontWeightMedium",
              fontSize: 12,
              color: "grey.500",
            }}
          >
            <span>2,569</span> Following
          </Typography>
          <Typography
            sx={{
              fontWeight: "fontWeightMedium",
              fontSize: 12,
              color: "grey.500",
            }}
          >
            <span>10.8K</span> Followers
          </Typography>
        </Box>
        {isMobile ? null : (
          <Button startIcon={<PersonAddIcon />}>Follow</Button>
        )}
      </Box>
      <Typography
        sx={{
          fontFamily: "Noto Sans",
          fontWeight: "fontWeightRegular",
          fontSize: 18,
          color: "grey.500",
          mt: { xs: 1.25, md: 3 },
          mb: 3,
        }}
      >
        Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
      </Typography>
      {isMobile ? <Button startIcon={<PersonAddIcon />}>Follow</Button> : null}
    </CardContent>
  );
};

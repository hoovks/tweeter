import { Box, Card } from "@mui/material";
import { StyledAvatar } from "../avatar/StyledAvatar";
import { ProfileSummaryContent } from "./profil-summary-content/ProfileSummaryContent";
import { useUser } from "../../../../contexts/UserContext";

export const ProfileSummary = () => {
  const { profileImage } = useUser();

  return (
    <Box
      sx={{
        position: "relative",
        top: { xs: -40, md: -90 },
        mb: { xs: -3, md: -8 },
        width: 1,
        maxWidth: { sm: 745, md: 1 },
        marginInline: "auto",
      }}
    >
      <Card
        sx={{
          minHeight: 165,
          paddingInline: 3.5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <StyledAvatar
          sx={{
            position: "absolute",
            mt: { xs: -11, md: -8 },
            left: { md: 24 },
          }}
          src={profileImage}
        />
        <ProfileSummaryContent />
      </Card>
    </Box>
  );
};

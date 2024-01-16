import { Box, CardHeader, CardMedia, Divider, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import avatar from "../../../../../assets/images/profile-picture.png";
import image from "../../../../../assets/images/bieszczady.jpg";
import { Avatar } from "../../../../../ui/avatar/Avatar";
import { Button } from "../../../../../ui/button/Button";

export const Account = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      <CardHeader
        sx={{ p: "0" }}
        avatar={<Avatar src={avatar} />}
        titleTypographyProps={{
          variant: "subtitle1",
          color: "grey.900",
        }}
        subheaderTypographyProps={{
          variant: "subtitle2",
          color: "grey.600",
        }}
        title="Mikael Stanley"
        subheader="230k followers"
      />
      <Button startIcon={<PersonAddIcon />}>Follow</Button>
      <Typography
        width={1}
        marginTop={1.5}
        fontFamily="Noto Sans"
        fontStyle=" normal"
        fontWeight=" 500"
        fontSize=" 14px"
        color="grey.600"
      >
        Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
      </Typography>
      <CardMedia
        component="img"
        image={image}
        sx={{
          mt: 2,
          borderRadius: 2,
          maxHeight: "77px",
        }}
      />
      <Divider sx={{ width: 1, marginBlock: 3 }} />
      <CardHeader
        sx={{ p: "0" }}
        avatar={<Avatar src={avatar} />}
        titleTypographyProps={{
          variant: "subtitle1",
          color: "grey.900",
        }}
        subheaderTypographyProps={{
          variant: "subtitle2",
          color: "grey.600",
        }}
        title="Mikael Stanley"
        subheader="230k followers"
      />
      <Button startIcon={<PersonAddIcon />}>Follow</Button>
      <Typography
        width={1}
        marginTop={1.5}
        fontFamily="Noto Sans"
        fontStyle=" normal"
        fontWeight=" 500"
        fontSize=" 14px"
        color="grey.600"
      >
        Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
      </Typography>
      <CardMedia
        component="img"
        image={image}
        sx={{
          mt: 2,
          borderRadius: 2,
          maxHeight: "77px",
        }}
      />
    </Box>
  );
};

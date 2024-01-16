import Paper from "@mui/material/Paper";
import Image from "../../../../assets/images/pies.jpg";

export const CoverPhoto = () => {
  return (
    <Paper
      sx={{
        height: 280,
        borderRadius: 0,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundImage: `url(${Image})`,
      }}
    />
  );
};

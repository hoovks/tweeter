import Box from "@mui/material/Box/Box";
import { PageWrapperProps } from "./PageWrapper.types";

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: { xs: 2, md: 3 },
        marginInline: "auto",
        paddingInline: 2,
        maxWidth: 1111,
      }}
    >
      {children}
    </Box>
  );
};

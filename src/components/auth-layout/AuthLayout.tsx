import { Footer } from "../footer/Footer";
import { AuthLayoutProps } from "./AuthLayout.types";
import { Box, Container } from "@mui/material";

export const Layout = ({ children }: AuthLayoutProps) => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Container component="main" maxWidth="xs" sx={{ flex: 1 }}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

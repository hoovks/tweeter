import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { MobileNav } from "../mobile-nav/MobileNav";
import { ProfileLayoutProps } from "./ProfileLayout.types";
import { Box } from "@mui/material";
import { PageTemplate } from "../../ui/page-template/PageTemplate";
import { PageWrapper } from "../../ui/page-wrapper/PageWrapper";

export const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* <Navbar /> */}
      <PageWrapper>
        <PageTemplate>{children}</PageTemplate>
      </PageWrapper>
      <Footer />
      <MobileNav />
    </Box>
  );
};

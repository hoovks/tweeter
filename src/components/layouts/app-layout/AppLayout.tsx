import { PageWrapper } from "../../../ui/page-wrapper/PageWrapper";
import { Footer } from "../../footer/Footer";
import { Navbar } from "../../navbar/Navbar";
import { MobileNav } from "../../mobile-nav/MobileNav";
import { PageTemplate } from "../../../ui/page-template/PageTemplate";
import { AppLayoutProps } from "./AppLayout.types";
import { Box } from "@mui/material";

export const Layout = ({ children }: AppLayoutProps) => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <PageWrapper>
        <PageTemplate>{children}</PageTemplate>
      </PageWrapper>
      <Footer />
      <MobileNav />
    </Box>
  );
};

import { PageTemplate } from "../../ui/page-template/PageTemplate";
import { PageWrapper } from "../../ui/page-wrapper/PageWrapper";
import { Footer } from "../footer/Footer";
import { MobileNav } from "../mobile-nav/MobileNav";
import { LayoutProps } from "./Layout.types";
import { Box } from "@mui/material";

export const Layout = ({ children }: LayoutProps) => {
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

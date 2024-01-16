import { ProfileSummary } from "../components/profile-summary/ProfileSummary";
import { CoverPhoto } from "../components/cover-photo/CoverPhoto";

import avatar from "../../../assets/images/profile-picture.png";
import { Feed } from "@mui/icons-material";
import { Aside } from "../../../components/aside/Aside";
import { Footer } from "../../../components/footer/Footer";
import { Post } from "../../../components/post/Post";
import { TabMenu } from "../../../components/tab-menu/TabMenu";
import { PageTemplate } from "../../../ui/page-template/PageTemplate";
import { PageWrapper } from "../../../ui/page-wrapper/PageWrapper";
import { Navbar } from "../../../components/navbar/Navbar";

export const ProfileLayout = () => {
  return (
    <>
      <Navbar />

      <CoverPhoto />

      <PageWrapper>
        <ProfileSummary />

        <PageTemplate>
          <Aside>
            <TabMenu variant="bookmarksPage" />
          </Aside>
          <Feed>
            <Post
              avatar={avatar}
              username="Kyle Simpson"
              date="24 March 2021"
              time="21:12"
              description="string"
              commentsNumber={3}
              retweetsNumber={24}
              savedNumber={45}
            />
          </Feed>
        </PageTemplate>
        <Footer />
      </PageWrapper>
    </>
  );
};

import { CoverPhoto } from "./components/cover-photo/CoverPhoto";
import { ProfileSummary } from "./components/profile-summary/ProfileSummary";
import avatar from "../../assets/images/profile-picture.png";
import { ProfileLayout } from "./profile-layout/ProfileLayout";
import { Aside } from "../../components/aside/Aside";
import { Feed } from "@mui/icons-material";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { Post } from "../../components/post/Post";
import { TabMenu } from "../../components/tab-menu/TabMenu";
import { PageTemplate } from "../../ui/page-template/PageTemplate";
import { PageWrapper } from "../../ui/page-wrapper/PageWrapper";

const ProfilePage = () => {
  return (
    <>
      <ProfileLayout />
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

export default ProfilePage;

import avatar from "../../assets/images/profile-picture.png";
import image from "../../assets/images/bieszczady.jpg";
import { Aside } from "../../components/aside/Aside";
import { Feed } from "@mui/icons-material";
import { Post } from "../../components/post/Post";
import { TabMenu } from "../../components/tab-menu/TabMenu";

const Bookmarks = () => {
  return (
    <>
      <Aside>
        <TabMenu variant="bookmarksPage" />
      </Aside>
      <Feed>
        <Post
          avatar={avatar}
          username="Mikael Stanley"
          date="24 August"
          time="20:45"
          description="Traveling – it leaves you speechless, then turns you into a
          storyteller. Traveling – it leaves you speechless, then turns you into
          a storyteller. Traveling – it leaves you speechless, then turns you
          into a storyteller."
          image={image}
          commentsNumber={34}
          retweetsNumber={34}
          savedNumber={34}
        />
      </Feed>
    </>
  );
};

export default Bookmarks;

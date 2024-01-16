import { TagsBox } from "./components/tags-box/TagsBox";
import { PostBox } from "./components/post-box/PostBox";
import avatar from "../../assets/images/profile-picture.png";
import image from "../../assets/images/bieszczady.jpg";
import { Feed } from "@mui/icons-material";
import { Aside } from "../../components/aside/Aside";
import { Post } from "../../components/post/Post";
import { Retweet } from "../../components/retweet/Retweet";
import { FollowSuggestions } from "./components/follow-suggestions/FollowSuggestions";
import { Layout } from "../../components/layout/Layout";
import { Navbar } from "../../components/navbar/Navbar";

const Homepage = () => {
  return (
    <Layout>
      <Navbar />
      <Feed>
        <PostBox />
        <Retweet>Daniel Jensen </Retweet>
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
      <Aside>
        <TagsBox />
        <FollowSuggestions />
      </Aside>
    </Layout>
  );
};

export default Homepage;

import avatar from "../../assets/images/profile-picture.png";
import { Feed } from "@mui/icons-material";
import { Aside } from "../../components/aside/Aside";
import { Post } from "../../components/post/Post";
import { TabMenu } from "../../components/tab-menu/TabMenu";
import { SearchBar } from "./components/SearchBar";

const Explore = () => {
  return (
    <>
      <Aside>
        <TabMenu variant="explorePage" />
      </Aside>

      <Feed>
        <SearchBar />
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
    </>
  );
};

export default Explore;

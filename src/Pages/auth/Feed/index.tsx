import { useEffect, useState } from "react";
import { Container, Content } from "./styles";
import Stories from "./components/Stories";
import { getPosts } from "./api";
import { FeedPostProps } from "./types";
import { FullDogLoader } from "../../../components/FullDogLoader";
import Posts from "./Posts";
import { useUser } from "../../../context/UserProvider";

export const Feed = () => {
  const [posts, setPosts] = useState<FeedPostProps[]>();
  const { user } = useUser();

  useEffect(() => {
    api();
  }, []);

  async function api() {
    const posts = await getPosts(user.username);
    setPosts(posts);
  }

  console.log(posts);

  if (!posts) return <FullDogLoader />;
  else
    return (
      <Container>
        <Content>
          <Stories />
          <Posts api={api} posts={posts} />
        </Content>
      </Container>
    );
};

export default Feed;

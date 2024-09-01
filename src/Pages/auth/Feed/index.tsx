import { useEffect, useState } from "react";
import { Container } from "./styles";
import Stories from "./components/Stories";
import { getPosts } from "./api";
import { FeedPostProps } from "./types";
import { FullDogLoader } from "../../../components/FullDogLoader";
import Posts from "./Posts";

export const Feed = () => {
  const [posts, setPosts] = useState<FeedPostProps[]>();

  useEffect(() => {
    api();
  }, []);

  async function api() {
    const posts = await getPosts();
    setPosts(posts);
  }

  console.log(posts);

  if (!posts) return <FullDogLoader />;
  else
    return (
      <Container>
        <Stories />
        <Posts api={api} posts={posts} />
      </Container>
    );
};

export default Feed;

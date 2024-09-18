import { useEffect, useState } from "react";
import { Container, Content } from "./styles";
import Stories from "./components/Stories";
import { getPosts } from "./api";

import { FullDogLoader } from "../../../components/FullDogLoader";
import Posts from "./Posts";
import { useUser } from "../../../context/UserProvider";
import { PostProps } from "../../../types/post";

export const Feed = () => {
  const [posts, setPosts] = useState<PostProps[]>();
  const { user } = useUser();

  useEffect(() => {
    api();
  }, []);

  async function api() {
    const posts = await getPosts(user?.username!);
    setPosts(posts);
  }

  if (!posts) return <FullDogLoader />;
  else
    return (
      <Container>
        <Content>
          <Stories />
          <Posts posts={posts} setPosts={setPosts} />
        </Content>
      </Container>
    );
};

export default Feed;

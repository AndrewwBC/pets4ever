import { memo } from "react";
import { Container, Content } from "./styles";
import Stories from "./components/Stories";

import Posts from "./Posts";

export const Feed = () => {
  return (
    <Container>
      <Content>
        <Stories />
        <Posts />
      </Content>
    </Container>
  );
};

export default memo(Feed);

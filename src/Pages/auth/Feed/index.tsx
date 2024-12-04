import { memo } from "react";
import { Container, Content } from "./styles";
import Stories from "./components/Stories";

import Posts from "./Posts";
import { Outlet } from "react-router-dom";

export const Feed = () => {
  return (
    <Container>
      <Content>
        <Stories />
        <Posts />
        <Outlet />
      </Content>
    </Container>
  );
};

export default memo(Feed);

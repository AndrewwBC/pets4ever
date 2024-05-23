import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { Container, Content, Header, HeaderContent } from "./styles";

import CreatePostModal from "../components/CreatePostModal";

const InsideLayout = () => {
  const [createPostModal, setCreatePostModal] = useState(false);

  return (
    <Container>
      {createPostModal && <CreatePostModal />}
      <Content>
        <Header>
          <HeaderContent>
            <div className="pets4EverTitle">
              <h1>
                <Link to={"/"}>Pets4Ever</Link>
              </h1>
            </div>

            <nav className="menuContent">
              <li>
                <Link to={"/me"}>Meu Perfil</Link>
              </li>

              <li>
                <Link to={"/me/feed"}>Feed</Link>
              </li>
              <li>
                <Link to={"/me/config"}>Configurações</Link>
              </li>

              <li>
                <button onClick={() => setCreatePostModal(true)}>Postar</button>
              </li>
            </nav>
          </HeaderContent>
        </Header>

        <div className="outletContainer">
          <Outlet />
        </div>
      </Content>
    </Container>
  );
};

export default InsideLayout;

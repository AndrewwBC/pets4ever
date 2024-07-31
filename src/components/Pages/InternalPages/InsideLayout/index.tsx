import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { Container, Content, Header, HeaderContent } from "./styles";

import CreatePostModal from "../components/CreatePostModal";

const InsideLayout = () => {
  const [createPostModal, setCreatePostModal] = useState(false);

  const userId = localStorage.getItem("userId");

  return (
    <Container>
      {createPostModal && (
        <CreatePostModal setCreatePostModal={setCreatePostModal} />
      )}
      <Content>
        <Header>
          <HeaderContent>
            <div>
              <Link className="pets4EverTitle" to={"/feed"}>
                Pets4Ever
              </Link>
            </div>

            <nav className="menuContent">
              <li>
                <Link to={`/profile/${userId}`}>Meu Perfil</Link>
              </li>

              <li>
                <Link to={"/feed"}>Feed</Link>
              </li>
              <li>
                <Link to={"/config"}>Configurações</Link>
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

import { Link, Outlet } from "react-router-dom";
import { Container, Content, MenuContainer } from "./styles";

import { CgProfile } from "react-icons/cg";
import { CgFeed } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";

const InsideLayout = () => {
  return (
    <Container>
      <Content>
        <MenuContainer>
          <nav className="menuContent">
            <li>
              <Link to={"/me"}>
                <CgProfile size={24} color="#222" />
                Meu Perfil
              </Link>
            </li>

            <li>
              <Link to={"/me/feed"}>
                <CgFeed size={24} color="#222" />
                Feed
              </Link>
            </li>
            <li>
              <Link to={"/me/feed"}>
                <TiMessages size={24} color="#222" />
                Mensagens
              </Link>
            </li>
          </nav>
        </MenuContainer>

        <div className="outletContainer">
          <Outlet />
        </div>
      </Content>
    </Container>
  );
};

export default InsideLayout;

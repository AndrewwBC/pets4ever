import { Link, Outlet } from "react-router-dom";
import { Container, Content, MenuContainer } from "./styles";

const InsideLayout = () => {
  return (
    <Container>
      <Content>
        <MenuContainer>
          <nav className="menuContent">
            <li>
              <Link to={"/me"}>Perfil BTN</Link>
            </li>
            <li>
              <Link to={"/me/feed"}>Feed BTN</Link>
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

import { FormEvent, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, Content, SideMenu, SideMenuContent } from "./styles";
import CreatePostModal from "../../Pages/auth/modals/CreatePostModal";
import { CgLogOut, CgProfile, CgSun, CgToolbox } from "react-icons/cg";
import { IoCreateOutline, IoHomeOutline } from "react-icons/io5";

import { useTheme } from "../../context/MyThemeProvider";
import LogoutModal from "./LogoutModal";
import { useUser } from "../../context/UserProvider";

const ProtectedRoutesLayout = () => {
  const { setSystemTheme } = useTheme();

  const [logoutModal, setLogoutModal] = useState(false);
  const [createPostModal, setCreatePostModal] = useState(false);

  const { user } = useUser();

  function handleClick(e: FormEvent) {
    e.preventDefault();
    setCreatePostModal(true);
  }

  function handleLogout(e: FormEvent) {
    e.preventDefault();
    setLogoutModal(true);
  }

  function handleTheme(e: FormEvent) {
    e.preventDefault();
    setSystemTheme();
  }

  return (
    <Container>
      {createPostModal && (
        <CreatePostModal setCreatePostModal={setCreatePostModal} />
      )}
      <LogoutModal logoutModal={logoutModal} setLogoutModal={setLogoutModal} />
      <Content>
        <SideMenu>
          <SideMenuContent>
            <div>
              <Link className="pets4EverTitle" to={"/"}>
                <p>Pets4Ever</p>
              </Link>
            </div>

            <nav className="menuContent">
              <li>
                <Link to={"/"}>
                  <IoHomeOutline size={28} />
                  <p>Postagens</p>
                </Link>
              </li>

              <li>
                <Link to={""} onClick={(e) => handleClick(e)}>
                  <IoCreateOutline size={28} />
                  <p>Postar</p>
                </Link>
              </li>

              <li>
                <Link to={`/${user?.username}`}>
                  <CgProfile size={28} />
                  <p>Meu Perfil</p>
                </Link>
              </li>

              <li>
                <Link to={""} onClick={(e) => handleTheme(e)}>
                  <CgSun size={28} />
                  <p>Mudar Tema</p>
                </Link>
              </li>

              <li>
                <Link to={`/config`}>
                  <CgToolbox size={28} />
                  <p>Configurações</p>
                </Link>
              </li>

              <li>
                <Link to={""} onClick={(e) => handleLogout(e)}>
                  <CgLogOut size={28} />
                  <p>Encerrar sessão</p>
                </Link>
              </li>
            </nav>
          </SideMenuContent>
        </SideMenu>

        <div className="outletContainer">
          <Outlet />
        </div>
      </Content>
    </Container>
  );
};

export default ProtectedRoutesLayout;

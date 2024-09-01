import { FormEvent, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, Content, SideMenu, SideMenuContent } from "./styles";
import CreatePostModal from "../../Pages/auth/components/CreatePostModal";
import { CgProfile, CgSun, CgToolbox } from "react-icons/cg";
import { IoCreateOutline, IoHomeOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

import { useTheme } from "../../context/themeProvider";
import LogoutModal from "./LogoutModal";

const ProtectedRoutesLayout = () => {
  const { setSystemTheme } = useTheme();

  const [logoutModal, setLogoutModal] = useState(false);
  const [createPostModal, setCreatePostModal] = useState(false);

  const userId = localStorage.getItem("userId");

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
                <Link to={`/profile/${userId}`}>
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
                  <CiLogout size={28} />
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

import { FormEvent, useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { Container, Content, SideMenu, SideMenuContent } from "./styles";

import CreatePostModal from "../components/CreatePostModal";
import { CgProfile, CgSun, CgToolbox } from "react-icons/cg";
import { IoCreateOutline, IoHomeOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import LogoutModal from "./LogoutModal";
import { ThemeContext } from "../../../context/ThemeContext";

const InsideLayout = () => {
  const { systemTheme, setSystemTheme } = useContext(ThemeContext);

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
    if (systemTheme === "light") {
      setSystemTheme("darkTheme");
      localStorage.setItem("color_theme:", "darkTheme");
      return;
    }
    setSystemTheme("light");
    localStorage.setItem("color_theme:", "light");
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
              <Link className="pets4EverTitle" to={"/feed"}>
                <p>Pets4Ever</p>
              </Link>
            </div>

            <nav className="menuContent">
              <li>
                <Link to={"/feed"}>
                  <IoHomeOutline size={32} />
                  Postagens
                </Link>
              </li>

              <li>
                <Link to={""} onClick={(e) => handleClick(e)}>
                  <IoCreateOutline size={32} />
                  <p>Postar</p>
                </Link>
              </li>

              <li>
                <Link to={`/profile/${userId}`}>
                  <CgProfile size={32} />
                  <p>Meu Perfil</p>
                </Link>
              </li>

              <li>
                <Link to={""} onClick={(e) => handleTheme(e)}>
                  <CgSun size={32} />
                  <p>Mudar Tema</p>
                </Link>
              </li>

              <li>
                <Link to={`/config`}>
                  <CgToolbox size={32} />
                  <p>Configurações</p>
                </Link>
              </li>

              <li>
                <Link to={""} onClick={(e) => handleLogout(e)}>
                  <CiLogout size={32} />
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

export default InsideLayout;

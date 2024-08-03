import { FormEvent, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { Container, Content, SideMenu, SideMenuContent } from "./styles";

import CreatePostModal from "../components/CreatePostModal";
import { CgProfile } from "react-icons/cg";
import { IoCreateOutline, IoHomeOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import LogoutModal from "./LogoutModal";

const InsideLayout = () => {
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

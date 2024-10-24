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

  const [isActiveLabel, setIsActiveLabel] = useState("");
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

  const menuItems = [
    {
      to: "/",
      icon: <IoHomeOutline size={28} />,
      label: "Postagens",
    },
    {
      to: "",
      icon: <IoCreateOutline size={28} />,
      label: "Postar",
      onClick: (e: any) => handleClick(e),
    },
    {
      to: `/${user?.username}`,
      icon: <CgProfile size={28} />,
      label: "Meu Perfil",
    },
    {
      to: "",
      icon: <CgSun size={28} />,
      label: "Mudar Tema",
      onClick: (e: any) => handleTheme(e),
    },
    {
      to: "/config",
      icon: <CgToolbox size={28} />,
      label: "Configurações",
    },
    {
      to: "",
      icon: <CgLogOut size={28} />,
      label: "Encerrar sessão",
      onClick: (e: any) => handleLogout(e),
    },
  ];

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
              {menuItems.map((item) => (
                <li onClick={() => setIsActiveLabel(item.label)}>
                  <Link
                    style={{
                      color: isActiveLabel === item.label ? "#fff" : "initial",
                      backgroundColor:
                        isActiveLabel === item.label ? "#8A05BE" : "initial",
                    }}
                    onClick={item.onClick}
                    to={item.to}
                  >
                    {item.icon}
                    <p>{item.label}</p>
                  </Link>
                </li>
              ))}
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

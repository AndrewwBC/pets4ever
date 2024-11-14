import { FormEvent, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, Content, SideMenu, SideMenuContent } from "./styles";
import CreatePostModal from "../../Pages/auth/modals/CreatePostModal";
import { CgLogOut, CgProfile } from "react-icons/cg";
import {
  IoCreateOutline,
  IoHomeOutline,
  IoMoonOutline,
  IoSearchOutline,
  IoSunnyOutline,
} from "react-icons/io5";

import { useTheme } from "../../context/MyThemeProvider";
import LogoutModal from "./LogoutModal";
import { useUser } from "../../context/UserProvider";
import { MdOutlineWorkOutline } from "react-icons/md";

const ProtectedRoutesLayout = () => {
  const { systemTheme, setSystemTheme } = useTheme();

  const [search, setSearch] = useState(false);
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

  function handleSearch(e: FormEvent) {
    setSearch(e.isTrusted);
  }

  const iconSize: any = 26 + "px";

  const menuItems = [
    {
      to: "/",
      icon: <IoHomeOutline size={iconSize} />,
      label: "Postagens",
    },
    {
      to: "",
      icon: <IoSearchOutline size={iconSize} />,
      label: "Pesquisar",
      onClick: (e: any) => handleSearch(e),
    },
    {
      to: "",
      icon: <IoCreateOutline size={iconSize} />,
      label: "Postar",
      onClick: (e: any) => handleClick(e),
    },
    {
      to: `/${user?.username}`,
      icon: <CgProfile fontWeight={400} size={iconSize} />,
      label: "Meu Perfil",
    },
    {
      to: "",
      icon:
        systemTheme === "darkTheme" ? (
          <IoSunnyOutline size={iconSize} />
        ) : (
          <IoMoonOutline size={iconSize} />
        ),
      label: "Mudar Tema",
      onClick: (e: any) => handleTheme(e),
    },
    {
      to: "/config",
      icon: <MdOutlineWorkOutline size={iconSize} />,
      label: "Configurações",
    },
    {
      to: "",
      icon: <CgLogOut size={iconSize} />,
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
                {search ? <p>Pets4Ever</p> : <p>Pets4Ever</p>}
              </Link>
            </div>

            <nav className="menuContent">
              {menuItems.map((item) => (
                <li key={Math.random()}>
                  <Link onClick={item.onClick} to={item.to}>
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

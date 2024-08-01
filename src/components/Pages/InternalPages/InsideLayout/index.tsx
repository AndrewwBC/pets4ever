import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { Container, Content, SideMenu, SideMenuContent } from "./styles";

import CreatePostModal from "../components/CreatePostModal";
import { CgProfile } from "react-icons/cg";
import { GlobalContext } from "../../../../context/GlobalStorage";
import { IoCreateOutline, IoHomeOutline } from "react-icons/io5";

const InsideLayout = () => {
  const { data } = useContext(GlobalContext);

  const [createPostModal, setCreatePostModal] = useState(false);

  const userId = localStorage.getItem("userId");

  function handleClick(e) {
    e.preventDefault();
    setCreatePostModal(true);
  }

  return (
    <Container>
      {createPostModal && (
        <CreatePostModal setCreatePostModal={setCreatePostModal} />
      )}
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
                  <p>@{data.name}</p>
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

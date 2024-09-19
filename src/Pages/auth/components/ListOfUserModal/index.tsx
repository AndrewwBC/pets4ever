import { createPortal } from "react-dom";
import { Container } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { ListOfUserProps } from "./types";

export default function ListOfUserModal({
  listOfUsers,
  setModal,
}: ListOfUserProps) {
  const nav = useNavigate();

  window.addEventListener("click", (e: any) => {
    if (e.target?.id === "container")
      setModal({
        modalState: false,
        data: undefined,
      });
  });

  function handleClick(e: any, username: string) {
    e.preventDefault();
    setModal({
      data: undefined,
      modalState: false,
    });
    nav(`/${username}`);
  }

  return createPortal(
    <Container id="container">
      <div className="content">
        {listOfUsers.data?.length! > 0 ? (
          listOfUsers.data!.map((item) => (
            <Link
              onClick={(e: any) => handleClick(e, item.username)}
              to={""}
              className="user"
            >
              <img
                src={
                  item.profileImgUrl
                    ? `https://pets4ever.s3.us-east-2.amazonaws.com/${item.profileImgUrl}`
                    : "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"
                }
                alt=""
              />
              <p>@{item.username}</p>
            </Link>
          ))
        ) : (
          <small>Ainda sem dados.</small>
        )}
      </div>
    </Container>,
    document.getElementById("listOfLikesModal")!
  );
}

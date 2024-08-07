import { createPortal } from "react-dom";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { ListOfLikesProps } from "./types";

export default function ListOfLikes({
  listOfLikes,
  setModal,
}: ListOfLikesProps) {
  window.addEventListener("click", (e: any) => {
    if (e.target?.id === "container")
      setModal({
        modalState: false,
        data: undefined,
      });
  });

  return createPortal(
    <Container id="container">
      <div className="content">
        {listOfLikes.data!.map((item) => (
          <Link to={`/profile/${item.userId}`} className="user">
            <img
              src={
                item.userProfilePhotoUrl
                  ? `https://pets4ever.s3.us-east-2.amazonaws.com/${item.userProfilePhotoUrl}`
                  : "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"
              }
              alt=""
            />
            <p>@{item.username}</p>
          </Link>
        ))}
      </div>
    </Container>,
    document.getElementById("listOfLikesModal")!
  );
}

import { useState } from "react";
import { ListOfUserProps } from "../../../../../types/listOfUsers";
import ListOfUserModal from "../../../modals/ListOfUserModal";
import { Container } from "./styles";
import { UsernameAndProfileImgUrlProps } from "../../../../../types/user";

interface QuantityOfLikesProps {
  quantityOfLikes: number;
  userLikedThisPost: boolean;
  listOfLikes: ListOfUserProps[];
}

export default function QuantityOfLikes({
  quantityOfLikes,
  userLikedThisPost,
  listOfLikes,
}: QuantityOfLikesProps) {
  const [modal, setModal] = useState<{
    title: string;
    modalState: boolean;
    data: UsernameAndProfileImgUrlProps[] | undefined;
  }>({
    title: "",
    modalState: false,
    data: undefined,
  });

  const spanText = quantityOfLikes > 1 ? "curtiram" : "curtiu";
  const userOsUsers = quantityOfLikes === 1 ? "usuário" : "usuários";

  function handleQuantityOfLikesClick() {
    setModal({
      data: listOfLikes,
      modalState: true,
      title: "Curtidas",
    });
  }

  if (quantityOfLikes === 0)
    return (
      <Container>
        {listOfLikes && (
          <ListOfUserModal
            title={"Curtidas"}
            modal={modal}
            setModal={setModal}
          />
        )}
        <small className="noLikes">
          Seja o <span>primeiro </span>a curtir este post!
        </small>
      </Container>
    );
  else if (quantityOfLikes === 1 && userLikedThisPost)
    return (
      <Container>
        <small>
          Você{" "}
          {listOfLikes && (
            <ListOfUserModal
              title={"Curtidas"}
              modal={modal}
              setModal={setModal}
            />
          )}
          <span
            onClick={() => handleQuantityOfLikesClick()}
            style={{ cursor: "pointer" }}
          >
            {spanText}{" "}
          </span>{" "}
          este post!
        </small>
      </Container>
    );
  else if (quantityOfLikes > 1 && userLikedThisPost)
    return (
      <Container>
        <small>
          {listOfLikes && (
            <ListOfUserModal
              title={"Curtidas"}
              modal={modal}
              setModal={setModal}
            />
          )}
          Você e {quantityOfLikes - 1}{" "}
          {quantityOfLikes - 1 === 1 ? "usuário" : "usuários"}
          <span
            onClick={() => handleQuantityOfLikesClick()}
            style={{ cursor: "pointer" }}
          >
            {" "}
            curtiram{" "}
          </span>{" "}
          este post!
        </small>
      </Container>
    );
  else
    return (
      <Container>
        {listOfLikes && (
          <ListOfUserModal
            title={"Curtidas"}
            modal={modal}
            setModal={setModal}
          />
        )}
        <small>
          {quantityOfLikes} {userOsUsers}
          <span
            onClick={() => handleQuantityOfLikesClick()}
            style={{ cursor: "pointer" }}
          >
            {" "}
            {spanText}{" "}
          </span>{" "}
          este post!
        </small>
      </Container>
    );
}

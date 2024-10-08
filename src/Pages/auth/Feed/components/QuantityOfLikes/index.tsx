import { Container } from "./styles";

export default function QuantityOfLikes({
  quantityOfLikes,
  userLikedThisPost,
  setListOfLikesModal,
  listOfLikes,
}: any) {
  const spanText = quantityOfLikes > 1 ? "curtiram" : "curtiu";
  const userOsUsers = quantityOfLikes === 1 ? "usuário" : "usuários";

  function handleQuantityOfLikesClick() {
    setListOfLikesModal({
      modalState: true,
      data: listOfLikes,
    });
  }

  if (quantityOfLikes === 0)
    return (
      <Container>
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

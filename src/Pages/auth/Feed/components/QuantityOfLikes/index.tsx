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
      <div className="quantityOfLikesContainer">
        <small>
          Seja o <span>primeiro </span>a curtir este post!
        </small>
      </div>
    );
  else if (quantityOfLikes === 1 && userLikedThisPost)
    return (
      <div className="quantityOfLikesContainer">
        <small>
          Você{" "}
          <span
            onClick={() => handleQuantityOfLikesClick()}
            style={{ color: "green", cursor: "pointer" }}
          >
            {spanText}{" "}
          </span>{" "}
          este post!
        </small>
      </div>
    );
  else if (quantityOfLikes > 1 && userLikedThisPost)
    return (
      <div className="quantityOfLikesContainer">
        <small>
          Você e {quantityOfLikes - 1}{" "}
          {quantityOfLikes - 1 === 1 ? "usuário" : "usuários"}
          <span
            onClick={() => handleQuantityOfLikesClick()}
            style={{ color: "green", cursor: "pointer" }}
          >
            {" "}
            curtiram{" "}
          </span>{" "}
          este post!
        </small>
      </div>
    );
  else
    return (
      <div className="quantityOfLikesContainer">
        <small>
          {quantityOfLikes} {userOsUsers}
          <span
            onClick={() => handleQuantityOfLikesClick()}
            style={{ color: "green", cursor: "pointer" }}
          >
            {" "}
            {spanText}{" "}
          </span>{" "}
          este post!
        </small>
      </div>
    );
}

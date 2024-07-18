export default function QuantityOfLikes({
  quantityOfLikes,
  userLikedThisPost,
}: any) {
  const spanText = quantityOfLikes > 1 ? "curtiram" : "curtiu";
  const userOsUsers = quantityOfLikes === 1 ? "usuário" : "usuários";

  if (quantityOfLikes === 0)
    return (
      <div className="quantityOfLikesContainer">
        <small>
          Seja o <span style={{ color: "green" }}>primeiro </span>a curtir este
          post!
        </small>
      </div>
    );
  else if (quantityOfLikes === 1 && userLikedThisPost)
    return (
      <div className="quantityOfLikesContainer">
        <small>
          Você <span style={{ color: "green" }}>{spanText} </span> este post!
        </small>
      </div>
    );
  else if (quantityOfLikes > 1 && userLikedThisPost)
    return (
      <div className="quantityOfLikesContainer">
        <small>
          Você e {quantityOfLikes - 1}{" "}
          {quantityOfLikes - 1 === 1 ? "usuário" : "usuários"}
          <span style={{ color: "green" }}> curtiram </span> este post!
        </small>
      </div>
    );
  else
    return (
      <div className="quantityOfLikesContainer">
        <small>
          {quantityOfLikes} {userOsUsers}
          <span style={{ color: "green" }}> {spanText} </span> este post!
        </small>
      </div>
    );
}

import { useState } from "react";
import {
  FollowersProps,
  FollowingProps,
} from "../../../../../api/user/types/profileResponse";
import { Toast } from "../../../../../components/Toast";
import { Container } from "./styles";
import { QuantityOfPostFollowersAndFollowingProps } from "./types";

function QuantityOfPostFollowersAndFollowing({
  postQuantity,
  followers,
  following,
}: QuantityOfPostFollowersAndFollowingProps) {
  const [toast, setToast] = useState({
    message: "",
    status: "",
  });

  function handleClick(data: FollowersProps | FollowingProps) {
    if (data.quantity === 0) {
      setToast({
        message: "Não há dados.",
        status: "error",
      });
    }
  }

  return (
    <Container className="userStats">
      {toast.message && <Toast setToast={setToast} toast={toast} />}
      <div>
        <p>{postQuantity}</p>
        <small>Posts</small>
      </div>

      <div>
        <p>{followers.quantity}</p>
        <small onClick={() => handleClick(followers)}>Seguindo</small>
      </div>

      <div>
        <p>{following.quantity}</p>
        <small onClick={() => handleClick(followers)}>Seguidores</small>
      </div>
    </Container>
  );
}
export default QuantityOfPostFollowersAndFollowing;

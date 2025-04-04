import { useState } from "react";
import { Toast } from "../../../../../components/Toast";
import { Container } from "./styles";
import { QuantityOfPostFollowersAndFollowingProps } from "./types";
import ListOfUserModal from "../../../modals/ListOfUserModal";
import { ListOfUserStateProps } from "../../../modals/ListOfUserModal/types";
import { UsernameAndProfileImgUrlProps } from "../../../../../types/user";

function QuantityOfPostFollowersAndFollowing({
  postQuantity,
  followers,
  following,
}: QuantityOfPostFollowersAndFollowingProps) {
  const [toast, setToast] = useState({
    message: "",
    status: "",
  });

  const [modal, setModal] = useState<ListOfUserStateProps>({
    title: "",
    modalState: false,
    data: undefined,
  });

  function handleClick(data: UsernameAndProfileImgUrlProps[], title: string) {
    setModal({
      title,
      data: data,
      modalState: true,
    });
  }

  return (
    <Container className="userStats">
      {modal.modalState && (
        <ListOfUserModal
          title={modal.title}
          modal={modal}
          setModal={setModal}
        />
      )}
      {toast.message && <Toast setToast={setToast} toast={toast} />}
      <div>
        <p>{postQuantity}</p>
        <small>Postagens</small>
      </div>

      <div onClick={() => handleClick(following.followingList, "Seguindo")}>
        <p>{following.quantity}</p>
        <small>Seguindo</small>
      </div>

      <div onClick={() => handleClick(followers.followersList, "Seguidores")}>
        <p>{followers.quantity}</p>
        <small>Seguidores</small>
      </div>
    </Container>
  );
}
export default QuantityOfPostFollowersAndFollowing;

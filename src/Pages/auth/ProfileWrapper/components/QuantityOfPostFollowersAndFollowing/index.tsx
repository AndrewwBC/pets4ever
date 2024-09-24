import { useState } from "react";
import { Toast } from "../../../../../components/Toast";
import { Container } from "./styles";
import { QuantityOfPostFollowersAndFollowingProps } from "./types";
import ListOfUserModal from "../../../components/ListOfUserModal";
import { ListOfUserStateProps } from "../../../components/ListOfUserModal/types";
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
          listOfUsers={modal}
          setModal={setModal}
        />
      )}
      {toast.message && <Toast setToast={setToast} toast={toast} />}
      <div>
        <p>{postQuantity}</p>
        <small>Posts</small>
      </div>

      <div>
        <p>{following.quantity}</p>
        <small onClick={() => handleClick(following.followingList, "Seguindo")}>
          Seguindo
        </small>
      </div>

      <div>
        <p>{followers.quantity}</p>
        <small
          onClick={() => handleClick(followers.followersList, "Seguidores")}
        >
          Seguidores
        </small>
      </div>
    </Container>
  );
}
export default QuantityOfPostFollowersAndFollowing;

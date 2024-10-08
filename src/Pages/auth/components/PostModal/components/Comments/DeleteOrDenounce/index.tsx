import { createPortal } from "react-dom";
import { useUser } from "../../../../../../../context/UserProvider";
import {
  Modal,
  Content,
} from "../../../../../Feed/Posts/components/PostOptionsModal/styles";
import { Dispatch, SetStateAction, useEffect } from "react";
import COMMENT_API from "../../../../../../../api/comment/COMMENT_API";

interface DeleteOrDenounceProps {
  username: string;
  commentId: string;
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

function DeleteOrDenounce({
  username,
  commentId,
  setModal,
  modal,
}: DeleteOrDenounceProps) {
  const { user } = useUser();

  window.addEventListener("click", (e: any) => {
    if (e.target.id === "deleteOrDenounceContainer") setModal(false);
  });

  useEffect(() => {}, [username]);

  async function handleDelete() {
    try {
      const response = await COMMENT_API.delete(commentId);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  if (modal)
    return createPortal(
      <Modal id="deleteOrDenounceContainer">
        <Content>
          <ul>
            {user?.username === username ? (
              <li onClick={() => handleDelete()} className="delete">
                Excluir
              </li>
            ) : (
              <li>Denunciar</li>
            )}
            <li onClick={() => setModal(false)}>Cancelar</li>
          </ul>
        </Content>
      </Modal>,
      document.getElementById("deleteOrDenounceModal")!
    );
}

export default DeleteOrDenounce;

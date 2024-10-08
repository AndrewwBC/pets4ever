import { createPortal } from "react-dom";
import { useUser } from "../../../../../../../context/UserProvider";
import {
  Modal,
  Content,
} from "../../../../../Feed/Posts/components/PostOptionsModal/styles";
import { Dispatch, SetStateAction } from "react";
import COMMENT_API from "../../../../../../../api/comment/COMMENT_API";

interface DeleteOrDenounceProps {
  modal: {
    state: boolean;
    data: {
      username: string;
      commentId: string;
    };
  };
  setModal: Dispatch<
    SetStateAction<{
      state: boolean;
      data: {
        username: string;
        commentId: string;
      };
    }>
  >;
  getPost: () => Promise<any>;
}

function DeleteOrDenounce({ setModal, modal, getPost }: DeleteOrDenounceProps) {
  const { user } = useUser();

  window.addEventListener("click", (e: any) => {
    if (e.target.id === "deleteOrDenounceContainer")
      setModal({
        state: false,
        data: {
          username: "",
          commentId: "",
        },
      });
  });

  async function handleDelete() {
    try {
      const response = await COMMENT_API.delete(modal.data.commentId);
      if (response) {
        await getPost();
        setModal({
          state: false,
          data: {
            username: "",
            commentId: "",
          },
        });
      }
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
            {user?.username === modal.data.username ? (
              <li onClick={() => handleDelete()} className="delete">
                Excluir
              </li>
            ) : (
              <li>Denunciar</li>
            )}
            <li
              onClick={() =>
                setModal({
                  state: false,
                  data: {
                    username: "",
                    commentId: "",
                  },
                })
              }
            >
              Cancelar
            </li>
          </ul>
        </Content>
      </Modal>,
      document.getElementById("deleteOrDenounceModal")!
    );
}

export default DeleteOrDenounce;

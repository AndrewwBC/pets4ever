import { createPortal } from "react-dom";
import { Content, Modal } from "./styles";
import { useEffect } from "react";
import { useUser } from "../../../../../../context/UserProvider";
import { PostOptionsModalProps } from "./types";
import POST_API from "../../../../../../api/post/POST_API";

function PostOptionsModal({ modal, setModal, api }: PostOptionsModalProps) {
  const { user } = useUser();
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  async function deletePost() {
    try {
      const response = await POST_API.delete(modal.post!.postId);
      console.log(response, modal.post!.postId);
      if (response) {
        await api();
      }
    } catch (err) {
      console.log(err);
    }
  }

  if (modal.state) {
    const content =
      user?.username === modal.post!.username ? (
        <>
          <li onClick={() => deletePost()} className="delete">
            Excluir
          </li>
          <li>Editar</li>
        </>
      ) : (
        <li>Denunciar</li>
      );

    window.addEventListener("click", (e: any) => {
      if (e.target.id === "container")
        setModal({
          state: false,
          post: undefined,
        });
    });

    return createPortal(
      <Modal id="container">
        <Content>
          <ul>
            {content}{" "}
            <li
              onClick={() =>
                setModal({
                  state: false,
                  post: undefined,
                })
              }
            >
              Cancelar
            </li>
          </ul>
        </Content>
      </Modal>,
      document.getElementById("modal")!
    );
  }
}

export default PostOptionsModal;

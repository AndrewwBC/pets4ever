import { createPortal } from "react-dom";
import { Content, Modal } from "./styles";
import { useEffect } from "react";
import { useUser } from "../../../../../../context/UserProvider";
import { PostOptionsModalProps } from "./types";
import POST_API from "../../../../../../api/post/POST_API";

function PostOptionsModal({ post, setModal, api }: PostOptionsModalProps) {
  const { user } = useUser();
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  async function deletePost() {
    try {
      const response = await POST_API.delete(post.postId);
      console.log(response, post.postId);
      if (response) {
        await api();
      }
    } catch (err) {
      console.log(err);
    }
  }

  if (post) {
    const content =
      user?.username === post.username ? (
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
      if (e.target.id === "container") setModal(false);
    });

    return createPortal(
      <Modal id="container">
        <Content>
          <ul>
            {content} <li onClick={() => setModal(false)}>Cancelar</li>
          </ul>
        </Content>
      </Modal>,
      document.getElementById("modal")!
    );
  }
}

export default PostOptionsModal;

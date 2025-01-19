import { createPortal } from "react-dom";
import { Content, Modal } from "./styles";
import { useUser } from "../../../../../../context/UserProvider";
import { PostOptionsModalProps } from "./types";
import POST_API from "../../../../../../api/post/POST_API";
import { useNavigate } from "react-router-dom";

function PostOptionsModal({
  modal,
  setModal,
  getPosts,
  setPostModal,
  editPostDescriptionFunction,
}: PostOptionsModalProps) {
  const { user } = useUser();
  const navigate = useNavigate();

  async function deletePost() {
    try {
      const response = await POST_API.delete(modal.post!.postId);

      if (response) {
        await getPosts!();
        setModal({
          state: false,
          post: undefined,
        });
        setPostModal!(false);
      }
    } catch (err) {}
  }

  function handleEdit() {
    editPostDescriptionFunction(modal.post?.postId!);
    setModal({
      state: false,
      post: undefined,
    });
    navigate(`/feed/p/${modal.post?.postId}/edit`);
  }

  if (modal.state) {
    const content =
      user?.username === modal.post!.username ? (
        <>
          <li onClick={() => deletePost()} className="delete">
            Excluir
          </li>
          <li onClick={() => handleEdit()}>Editar</li>
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
            {content}
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
